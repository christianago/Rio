<?php
session_start();
header('Content-Type: text/html; charset=utf-8');

if ( isset($_POST['email-us']) ){
	
	$data = $_POST;
	$email = "info@hotel-rio.gr";
	
	//print_r($data);
	
	$subject = "Μήνυμα μέσω της φόρμας επικοινωνίας της ιστοσελίδας";
	$msg = '';
	$msg = 'Ονοματεπώνυμο: '.$data['name']."\r\n";
	$msg .= 'Διεύθυνση: '.$data['address']."\r\n";
	$msg .= 'Email: '.$data['email']."\r\n";
	$msg .= 'Χώρα: '.$data['country']."\r\n";
	$msg .= 'Τηλέφωνο: '.$data['tel']."\r\n";
	$msg .= 'Mήνυμα: '.$data['message']."\r\n";
	
	
	$headers = array("Content-Type: text/html; charset=UTF-8");
	$headers .= "Organization: Sender Organization\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/plain; charset=utf-8\r\n";
	$headers .= "X-Priority: 3\r\n";
	$headers .= "From: $email" . "\r\n";
	$headers .= "X-Mailer: PHP". phpversion() ."\r\n";
		
	$mail = mail("chrilamp@gmail.com", $subject, $msg, $headers);
	if ( $mail == 1 ){
		$_SESSION['email'] = "Το email εστάλη με επιτυχία";
	} else { $_SESSION['email'] = "Το email δεν εστάλη"; }
	
	header('Location: contact.php');
}

?>