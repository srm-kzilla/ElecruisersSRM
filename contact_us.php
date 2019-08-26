<?php

$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];
$headers = array("From" => $email);

$to_email = "theelecruisers@gmail.com";

if (mail($to_email, $subject, $message, $headers)) {
    http_response_code(200);
} else {
    http_response_code(500);
}

?>