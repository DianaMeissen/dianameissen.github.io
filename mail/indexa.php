<?php
$to = "infosvit@gmail.com,sharnin@eyepass.tech";

$subject = 'eyepass webform demo request';

$headers = "From: EyePass Online <info@eyepass.tech>\r\n";
$headers .= "Reply-To: info@eyepass.tech\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$message = "<br />name: ".$_REQUEST['Name']."<br />email: ".$_REQUEST['Email']."<br />phone: ".$_REQUEST['Phonenumber']."<br /><br />text: <br />".$_REQUEST['Textarea'];

mail($to, $subject, $message, $headers);
?>
