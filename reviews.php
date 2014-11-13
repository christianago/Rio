<?php error_reporting(0); session_start(); ?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Αξιολογήσεις - Hotel Rio Athens</title>

<meta id="viewport" name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<link rel="stylesheet" href="css/bootstrap.min.css" />
<link rel="stylesheet" href="css/bootstrap-datepicker.css" />
<link rel="stylesheet" href="css/font-awesome.min.css" />
<link rel="stylesheet" href="css/index.css" />

</head>
<body>

<?php include_once 'modals.php'; ?>

<div class="container">

<div id="message"><?php echo @$_SESSION['message'];?></div>
<?php $_SESSION['message'] = ''; ?>

	<div class="row the-header" align="center">
		<?php include_once 'header.php'; ?>
	</div>

	<div class="row">
	
		<div class="col-xs-11 col-lg-8 welcome">
			<div class="content-title content">Αξιολογήστε το ξενοδοχείο μας</div><br/>
			
			<form id="review-form" action="submit.php" method="post">
			
				<div class="row review-label">
					<input name="rv1" type="hidden" />
					<div class="col-xs-3">
						<i class="fa fa-hospital-o fa-2x"></i>
						<span class="content">Γενική εικόνα</span>
					</div>
					<div class="col-xs-9">
						<i class="fa fa-star-o fa-2x"></i>
						<i class="fa fa-star-o fa-2x"></i>
						<i class="fa fa-star-o fa-2x"></i>
						<i class="fa fa-star-o fa-2x"></i>
						<i class="fa fa-star-o fa-2x"></i>
					</div>
				</div>
				
				<div class="row review-label">
				<input name="rv2" type="hidden" />
					<div class="col-xs-3">
						<i class="fa fa-female fa-2x"></i>
						<span class="content">Προσωπικό</span>
					</div>
					<div class="col-xs-9">
						<i class="fa fa-star-o fa-2x"></i>
						<i class="fa fa-star-o fa-2x"></i>
						<i class="fa fa-star-o fa-2x"></i>
						<i class="fa fa-star-o fa-2x"></i>
						<i class="fa fa-star-o fa-2x"></i>
					</div>
				</div>
				
				<div class="row review-label">
				<input name="rv3" type="hidden" />
					<div class="col-xs-3">
						<i class="fa fa-map-marker fa-2x"></i>
						<span class="content">Τοποθεσία</span>
					</div>
					<div class="col-xs-9">
						<i class="fa fa-star-o fa-2x"></i>
						<i class="fa fa-star-o fa-2x"></i>
						<i class="fa fa-star-o fa-2x"></i>
						<i class="fa fa-star-o fa-2x"></i>
						<i class="fa fa-star-o fa-2x"></i>
					</div>
				</div>
	
				<div class="row review-label">
				<input name="rv4" type="hidden" />
					<div class="col-xs-3">
						<i class="fa fa-trash fa-2x"></i>
						<span class="content">Καθαριότητα</span>
					</div>
					<div class="col-xs-9">
						<i class="fa fa-star-o fa-2x"></i>
						<i class="fa fa-star-o fa-2x"></i>
						<i class="fa fa-star-o fa-2x"></i>
						<i class="fa fa-star-o fa-2x"></i>
						<i class="fa fa-star-o fa-2x"></i>
					</div>
				</div>
				
				<div class="row review-label">
				<input name="rv5" type="hidden" />
					<div class="col-xs-3">
						<i class="fa fa-euro fa-2x"></i>
						<span class="content">Τιμή</span>
					</div>
					<div class="col-xs-9">
						<i class="fa fa-star-o fa-2x"></i>
						<i class="fa fa-star-o fa-2x"></i>
						<i class="fa fa-star-o fa-2x"></i>
						<i class="fa fa-star-o fa-2x"></i>
						<i class="fa fa-star-o fa-2x"></i>
					</div>
				</div>
				
				<div class="row">
				<br/>
					<div class="col-xs-3">
						<span class="content"><b>Σχόλια</b></span>
					</div>
					<div class="col-xs-3">
						<textarea class="form-control" rows="5" name="comments"></textarea>
					</div>
				</div>
				
				
				<div class="row"><br/>
					<div class="col-xs-2 col-xs-offset-4"><input class="form-control btn btn-primary content" type="submit" id="review-us" name="review-us" value="Αξιολόγηση" /></div>
				</div>
				
				<?php 
				
					//$review = date('Y/m/d').'#'.$data['reserveid'].'#'.$data['rv1'].'#'.$data['rv2'].'#'.$data['rv3'].'#'.$data['rv4'].'#'.$data['rv5'].'#'.$data['comments'];
				
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
						
						for($i = 3; $i < 8; $i++){
							if ( $part[$i] != '0' ){
								$values[] = $part[$i];
							}
						}
						
						$av = array_sum($values) / count($values);
						if ( $av == 0 ) continue;
							
						$avg[] = $av;
						$dates[] =  $part[1];
						$comments[] = $part[8].'&nbsp;';
					}
					
				?>
				
				<br/><hr class="review-line" />
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
					<br/><br/>
					<div class="row review-container">
						<div class="col-xs-2 review-date"><?=$v?></div>
						<div class="col-xs-6 review-comment"><?=$comments[$k]?></div>
						<div class="col-xs-2 review-star"><?=$star?></div>
					</div>
				<?php endforeach; ?>
		</form>
		
	</div>
	
	<?php include_once 'footer.php'; ?>

</div>

	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/jquery.cycle.all.js"></script>
	<script src="js/bootstrap-datepicker.js"></script>
	<script src="js/index.js"></script>
</body>
</html>
