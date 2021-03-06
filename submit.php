<?php
session_start();
header('Content-Type: text/html; charset=utf-8');

function filter(&$value) {
	$value = str_replace('#', '', htmlspecialchars($value, ENT_QUOTES, 'UTF-8'));
}

$data = $_POST;
$emailFrom = $data['email'];
$emailTo = "info@hotel-rio.gr";
#$emailTo = "chrilamp@gmail.com";
$domain = 'www.hotel-rio.gr/';

$header = "Content-Type: text/html; charset=utf-8\r\n"; 
$header .= "MIME-Version: 1.0\r\n";
$header .= "X-Priority: 1\r\n"; 
$header .= "From: $emailFrom \r\n";
$header.= "X-Mailer: PHP". phpversion() ."\r\n";

if ( isset($_POST['email-us']) ){
	
	include_once 'securimage/securimage.php';
	
	$securimage = new Securimage();
	
	if ( $securimage->check($_POST['captcha']) == false ){
		$_SESSION['message'] = "3";
		header('Location: contact.php');
		exit(0);
	}
	
	
	array_walk($data, "filter");
	//print_r($data);
	
	$subject = "Μήνυμα μέσω της φόρμας επικοινωνίας της ιστοσελίδας";
	$msg = '';
	$msg = 'Ονοματεπώνυμο: '.$data['firstname'].' '.$data['lastname']."\r\n";
	$msg .= 'Πόλη: '.$data['address']."\r\n";
	$msg .= 'Email: '.$data['email']."\r\n";
	$msg .= 'Χώρα: '.$data['country']."\r\n";
	$msg .= 'Τηλέφωνο: '.$data['tel']."\r\n";
	$msg .= 'Θέμα: '.$data['subject']."\r\n";
	$msg .= 'Mήνυμα: '.$data['message']."\r\n";
	

	$mail = mail($emailTo, $subject, $msg, $headers);
	if ( $mail == 1 ){
		$_SESSION['message'] = "1";
	} else {
		$_SESSION['message'] = "0";
	}
	
	header('Location: contact.php');
	
	
} else if ( isset($_POST['review-us']) ){
	
	$data = $_POST;
	array_walk($data, "filter");
	//print_r($data);
	
	$file = "rv";
	$linecount = 0;
	$handle = fopen($file, "r");
	while(!feof($handle)){
		$line = fgets($handle);
		$linecount++;
	}
	//$linecount--;
	fclose($handle);
	
	
	if ( !isset($data['rv1']) || $data['rv1'] == '' || $data['rv1'] == ' ' ){
		$rv1 = 5;
	}
	
	if ( !isset($data['rv2']) || $data['rv2'] == '' || $data['rv2'] == ' ' ){
		$rv2 = 5;
	}
	
	if ( !isset($data['rv3']) || $data['rv3'] == '' || $data['rv3'] == ' ' ){
		$rv3 = 5;
	}
	
	if ( !isset($data['rv4']) || $data['rv4'] == '' || $data['rv4'] == ' ' ){
		$rv4 = 5;
	}
	
	if ( !isset($data['rv5']) || $data['rv5'] == '' || $data['rv5'] == ' ' ){
		$rv5 = 5;
	}
	
	if ( !isset($data['rv6']) || $data['rv6'] == '' || $data['rv6'] == ' ' ){
		$rv6 = 5;
	}
	
	$review = '0#'.date('Y/m/d').'#123456789#'.$rv1.'#'.$rv2.'#'.$rv3.'#'.$rv4.'#'.$rv5.'#'.$rv6.'#'.$data['comments']."\n";
	file_put_contents($file, $review, FILE_APPEND);
	
	$subject = "Αξιολόγηση του ξενοδοχείου μέσω της ιστοσελίδας";
	
	$reviewMsg = date('d/m/Y')."\r\n";
	$reviewMsg .='Γενική εικόνα: '.$data['rv1']."\r\n";
	$reviewMsg .='Προσωπικό: '.$data['rv2']."\r\n";
	$reviewMsg .='Τοποθεσία: '.$data['rv3']."\r\n";
	$reviewMsg .='Καθαριότητα: '.$data['rv4']."\r\n";
	$reviewMsg .='Τιμή: '.$data['rv5']."\r\n";
	$reviewMsg .='Υπηρεσίες: '.$data['rv6']."\r\n";
	$reviewMsg .='Σχόλια: '.$data['comments']."\r\n";
	$reviewMsg .="Έγκριση: \r\n";
	$reviewMsg .= $domain.'approve-review.php?id='.$linecount;

	$mail = mail($emailTo, $subject, $reviewMsg, $headers);
	
	header('Location: reviews.php');
	$_SESSION['message'] = "2";
}
