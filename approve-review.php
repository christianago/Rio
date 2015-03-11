<?php
header('Content-Type: text/html; charset=utf-8');

if ( isset($_GET['id']) ){
	
	$id = (int) $_GET['id'];
	$id--;
	$reviews = '';
	$handle = fopen('rv', "r");
	
	$cnt = 0;
	while(!feof($handle)){
		$line = fgets($handle);
		
		if ( $id == $cnt ){
			$reviews .= '1'.substr($line, 1);
		} else{
			$reviews .= $line;
		}
			
		$cnt++;
	}
	fclose($handle);
	
	//echo $reviews;
	
	file_put_contents('rv', $reviews);
}

header('Location: reviews.php');
