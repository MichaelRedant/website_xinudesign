<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false]);
    exit;
}

$honeypot = $_POST['website'] ?? '';
if (!empty($honeypot)) {
    echo json_encode(['success' => false]);
    exit;
}

$name = strip_tags(trim($_POST['name'] ?? ''));
$email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
$message = strip_tags(trim($_POST['message'] ?? ''));

if ($name === '' || $email === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false]);
    exit;
}

if (preg_match("/[\r\n]/", $email)) {
    echo json_encode(['success' => false]);
    exit;
}

$to = 'michael@xinudesign.be';
$subject = "Nieuw bericht van $name";
$body = "Naam: $name\nE-mail: $email\n\n$message";
$headers = "From: $name <$email>\r\nReply-To: $email\r\n";

$success = mail($to, $subject, $body, $headers);

echo json_encode(['success' => $success]);
exit;

