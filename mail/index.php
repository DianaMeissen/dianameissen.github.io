<?php
$to = $_REQUEST['Email'];

$subject = 'Thank you! EyePass team will be in touch with you soon';

$headers = "From: EyePass Online <info@eyepass.tech>\r\n";
$headers .= "Reply-To: info@eyepass.tech\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$message = file_get_contents('/var/www/html/mail/template1.html');

mail($to, $subject, $message, $headers);
?>
