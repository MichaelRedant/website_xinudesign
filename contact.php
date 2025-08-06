<?php
header('Content-Type: application/json');

// ① Simpele honeypot
if (!empty($_POST['website'])) {
  echo json_encode(['success' => true]);  // bots negeren
  exit;
}

// ② Basis-validatie + sanitizing
$name    = trim($_POST['name']    ?? '');
$email   = trim($_POST['email']   ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $message === '') {
  http_response_code(400);
  echo json_encode(['success' => false]);
  exit;
}

// ③ Mail-gegevens - pas aan naar eigen mailadres
$to      = 'michael@xinudesign.be';
$subject = "Nieuw contactformulier van $name";
$body    = "Naam: $name\nE-mail: $email\n\nBericht:\n$message";
$headers = "From: $email\r\nReply-To: $email\r\n";

$sent = mail($to, $subject, $body, $headers);

echo json_encode(['success' => $sent]);
