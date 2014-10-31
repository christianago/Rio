<?php
session_start();
header('Content-Type: text/html; charset=utf-8');

function filter(&$value) {
	$value = str_replace('#', '', htmlspecialchars($value, ENT_QUOTES, 'UTF-8'));
}

if ( isset($_POST['email-us']) ){
	
	$data = $_POST;
	array_walk($data, "filter");
	//print_r($data);
	
	$emailFrom = "info@hotel-rio.gr";
	$emailTo = "chrilamp@gmail.com";
	
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
	$headers .= "From: $emailFrom" . "\r\n";
	$headers .= "X-Mailer: PHP". phpversion() ."\r\n";
		
	$mail = mail($emailTo, $subject, $msg, $headers);
	if ( $mail == 1 ){
		$_SESSION['message'] = "1";
	} else {
		$_SESSION['message'] = "0";
	}
	
	header('Location: contact.php');
	exit(0);
	
	
} else if ( isset($_POST['review-us']) ){
	
	$data = $_POST;
	array_walk($data, "filter");
	
	print_r($data);
	
	$review = date('Y/m/d').'#'.$data['reserveid'].'#'.$data['rv1'].'#'.$data['rv2'].'#'.$data['rv3'].'#'.$data['rv4'].'#'.$data['rv5'].'#'.$data['comments'];
	
	file_put_contents('rv', $review."\r\n", FILE_APPEND);
	
	header('Location: reviews.php');
	$_SESSION['message'] = "2";
	exit(0);
}

header('Location: index.php');

?>




















