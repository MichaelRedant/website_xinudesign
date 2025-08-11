<?php
declare(strict_types=1);

// ---------- CONFIG ----------
$to          = 'michael@xinudesign.be';      // JOUW inbox
$fromDomain  = 'xinudesign.be';              // Voor SPF/DMARC: afzender = no-reply@<jouwdomein>
$enableLog   = false;                        // true = log naar bestand
$logFile     = __DIR__ . '/contact.log';     // Pad voor logging (zorg dat webserver kan schrijven)

// Rate limit (simpel per IP)
$maxPerWindow = 5;                           // max 5 verzoeken
$windowSecs   = 60 * 10;                     // per 10 minuten

// ---------- HEADERS ----------
header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');

// Alleen POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['success' => false, 'error' => 'Method not allowed']);
  exit;
}

// ---------- HELPERS ----------
function clean_string(?string $v, int $max = 5000): string {
  $v = (string)$v;
  // header injection preventie
  $v = str_replace(["\r", "\n"], ' ', $v);
  $v = strip_tags($v);
  $v = trim($v);
  if (mb_strlen($v) > $max) $v = mb_substr($v, 0, $max);
  return $v;
}
function valid_email(string $e): bool {
  return (bool)filter_var($e, FILTER_VALIDATE_EMAIL);
}
function log_line(string $path, string $line): void {
  @file_put_contents($path, '[' . date('c') . '] ' . $line . PHP_EOL, FILE_APPEND | LOCK_EX);
}
function json_fail(string $msg, int $code = 400) {
  http_response_code($code);
  echo json_encode(['success' => false, 'error' => $msg]);
  exit;
}

// ---------- HONEYPOT ----------
if (!empty($_POST['website'] ?? '')) {
  // Bot: doe alsof ok (silent accept)
  echo json_encode(['success' => true]);
  exit;
}

// ---------- RATE LIMIT ----------
session_start();
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$now = time();
if (!isset($_SESSION['cf_rate'])) {
  $_SESSION['cf_rate'] = [];
}
$_SESSION['cf_rate'] = array_filter(
  (array)$_SESSION['cf_rate'],
  fn($t) => ($now - (int)$t) < $windowSecs
);
if (count($_SESSION['cf_rate']) >= $maxPerWindow) {
  json_fail('Te veel verzoeken, probeer het later opnieuw.', 429);
}
$_SESSION['cf_rate'][] = $now;

// ---------- INPUTS ----------
$name          = clean_string($_POST['name'] ?? '', 200);
$email         = clean_string($_POST['email'] ?? '', 320);
$phone         = clean_string($_POST['phone'] ?? '', 40);
$company       = clean_string($_POST['company'] ?? '', 200);
$subjectSel    = clean_string($_POST['subject'] ?? '', 100);
$budget        = clean_string($_POST['budget'] ?? '', 40);
$contact_time  = clean_string($_POST['contact_time'] ?? '', 40);
$message       = clean_string($_POST['message'] ?? '', 4000);
$consent       = clean_string($_POST['consent'] ?? '', 5);

// Tracking (optioneel)
$utm_source    = clean_string($_POST['utm_source'] ?? '', 100);
$utm_medium    = clean_string($_POST['utm_medium'] ?? '', 100);
$utm_campaign  = clean_string($_POST['utm_campaign'] ?? '', 100);
$utm_term      = clean_string($_POST['utm_term'] ?? '', 100);
$utm_content   = clean_string($_POST['utm_content'] ?? '', 100);
$referrer      = clean_string($_POST['referrer'] ?? '', 500);
$topSecRaw     = (string)($_POST['time_on_page_sec'] ?? '');
$time_on_page  = ctype_digit($topSecRaw) ? (int)$topSecRaw : 0;

// ---------- VALIDATIE ----------
$errors = [];
if ($name === '')                      $errors['name']    = 'Naam is verplicht.';
if (!valid_email($email))              $errors['email']   = 'Ongeldig e‑mailadres.';
if ($message === '')                   $errors['message'] = 'Bericht is verplicht.';
if ($consent !== 'yes')                $errors['consent'] = 'Toestemming is vereist.';
if ($time_on_page < 5)                 $errors['bot']     = 'Te snel verzonden.';

// Optioneel: telefoon patroon check (alleen als ingevuld)
if ($phone !== '' && !preg_match('/^\+?[0-9\s().-]{6,}$/', $phone)) {
  $errors['phone'] = 'Controleer je telefoonnummer.';
}

if (!empty($errors)) {
  json_fail('Validatie mislukt', 422);
}

// ---------- MAIL OPBOUW ----------
// Gebruik eigen domein als afzender (DMARC). Reply-To = klant.
$from = 'no-reply@' . $fromDomain;
$replyTo = $email;

// Onderwerp
$subjectMap = [
  'webdesign' => 'Webdesign / Webapp',
  'seo'       => 'SEO / Technische SEO',
  'ads'       => 'Google Ads / Meta Ads',
  'cxo'       => 'CRO / Landingspagina’s',
  'other'     => 'Anders',
];
$subjectLabel = $subjectMap[$subjectSel] ?? 'Contactformulier';
$subject = "Nieuwe lead via contactformulier – {$subjectLabel} – {$name}";

// Tekst‑body
$lines = [
  "Naam:        {$name}",
  "E‑mail:      {$email}",
  ($phone !== '' ? "Telefoon:    {$phone}" : null),
  ($company !== '' ? "Bedrijf:     {$company}" : null),
  "Onderwerp:   {$subjectLabel}",
  ($budget !== '' ? "Budget:      {$budget}" : null),
  ($contact_time !== '' ? "Contact:     {$contact_time}" : null),
  "",
  "Bericht:",
  $message,
  "",
  "--- Tracking / Context ---",
  "UTM: source={$utm_source} medium={$utm_medium} campaign={$utm_campaign} term={$utm_term} content={$utm_content}",
  "Referrer: {$referrer}",
  "Time on page (s): {$time_on_page}",
  "IP: {$ip}",
  "Timestamp: " . date('c'),
];
$bodyText = implode("\n", array_filter($lines, fn($v) => $v !== null));

// Headers
$headers = [];
$headers[] = "From: Xinudesign <{$from}>";
$headers[] = "Reply-To: {$name} <{$replyTo}>";
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";
$headersStr = implode("\r\n", $headers);

// ---------- VERSTUREN ----------
$sent = @mail($to, '=?UTF-8?B?'.base64_encode($subject).'?=', $bodyText, $headersStr);

// (Optioneel) log
if ($enableLog) {
  $ok = $sent ? 'OK' : 'FAIL';
  log_line($logFile, "{$ok} | {$ip} | {$subjectLabel} | {$name} <{$email}> | {$budget} | t={$time_on_page}s | utm={$utm_source}/{$utm_medium}/{$utm_campaign}");
}

if ($sent) {
  echo json_encode(['success' => true]);
} else {
  // Tip: als mail() onbetrouwbaar is op je hosting, stap over op SMTP (PHPMailer).
  http_response_code(500);
  echo json_encode(['success' => false, 'error' => 'Verzenden mislukt']);
}
