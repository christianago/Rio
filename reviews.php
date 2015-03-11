<?php error_reporting(0); session_start(); ?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Hotel Rio Athens</title>

<meta id="viewport" name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<link rel="stylesheet" href="css/bootstrap.min.css" />
<link rel="stylesheet" href="css/bootstrap-datepicker.css" />
<link rel="stylesheet" href="css/font-awesome.min.css" />
<link rel="stylesheet" href="css/index.css" />

</head>
<body>

<?php include_once 'modals.php'; ?>

<div class="container the-review">

<div id="message"><?php echo @$_SESSION['message'];?></div>
<?php $_SESSION['message'] = ''; ?>

	<div class="row the-header">
		<div class="col-xs-12">
			<?php include_once 'header.php'; ?>
		</div>
	</div>
	
	
	<?php 
		$reviews = array();
		$avg = array();
		$dates = array();
		$comments = array();
		
		$handle = fopen("rv", "r");
		if ( $handle ) {
		    while (($line = fgets($handle)) !== false) {
		    	if ( strlen($line) < 20 ) continue;
		 		$reviews[] = $line;
		    }
		} else { exit(0); } 
		fclose($handle);
		
		$reviews = array_reverse($reviews);
		
		foreach($reviews as $k=>$v){
			$part = explode('#', $v);
			if ( $part[0] == '0' ) continue; //unapproved review
			
			$values = array();
			
			for($i = 3; $i < 9; $i++){
				if ( $part[$i] != '0' ){
					$values[] = $part[$i];
				}
			}
			
			$av = array_sum($values) / count($values);
			if ( $av == 0 ) continue;
				
			$avg[] = $av;
			$dates[] =  $part[1];
			$comments[] = $part[9].'&nbsp;';
		}
		
	?>
	
	<div class="row reviews-bottom">
	
		<div class="col-xs-12">

			<hr class="review-line" />
			<div class="sub-title content" align="center">Οι αξιολογήσεις των φιλοξενούμενών μας</div><br/>
			
				<?php 
				foreach ($dates as $k=>$v):
					$total = (int) $avg[$k];
					$star = '';
					for($i = 0; $i < $total; $i++){
						$star .= '<i class="fa fa-star"></i>';
					}
					$total = (float) $avg[$k];
					if ( strlen($total) > 1 ){
						$star .= '<i class="fa fa-star-half-o"></i>';
					}
				?>
				
				<br/>
				<div class="row review-container read">
					<div class="col-xs-2 col-xs-offset-2 review-date"><?=$v?></div>
					<div class="col-xs-5 review-comment"><?=$comments[$k]?></div>
					<div class="col-xs-3 review-star"><?=$star?></div>
				</div>
			<?php endforeach; ?>

		</div>
	
	</div>
		
		
		<div class="row reviews-footer">
			<div class="col-xs-12">
			<?php include_once 'footer.php'; ?>
			</div>
		</div>

</div>

	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/jquery.lazyload.js"></script>
	<script src="js/date.js"></script>
	<script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
	<script src="js/jquery.cycle.all.js"></script>
	<script src="js/bootstrap-datepicker.js"></script>
	<script src="http://www.cosmores.com/plugins/js/cosmoresbooking.search.plugin.js"></script>
	<script src="js/index.js"></script>
</body>
</html>

