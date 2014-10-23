<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Φωτογραφίες</title>

<meta id="viewport" name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<link rel="stylesheet" href="css/bootstrap.min.css" />
<link rel="stylesheet" href="css/bootstrap-datepicker.css" />
<link rel="stylesheet" href="css/font-awesome.min.css" />
<link rel="stylesheet" href="css/jquery-fullsizable.css" />
<link rel="stylesheet" href="css/index.css" />

</head>
<body id="photo-gallery">


<div class="container">

	<div class="general-area-1 row">
	<?php include_once 'header.php'; ?>
	<div class="row slideshow">
			<?php include_once 'slideshow.php'; ?>
		</div>
	</div>


	<div class="row main-area">
	<br/><br/><br/><br/><br/>
		<div class="col-xs-8 center">
		
			<div class="row">
				<div class="col-xs-12">
					<div class="title">Φωτογραφίες</div><br/>
					Απολαύστε μια συλλογή <b>φωτογραφιών</b> του ξενοδοχείου Lato Boutique.<br/><br/>
					
						<div class="row image-container">
							<div class="col-xs-3"><a class="fullsizable" href="images/comfyroombathroomdetail_xm.jpg"><img src="images/superiorroom7_m.jpg" /></a></div>
							<div class="col-xs-3"><a class="fullsizable" href="images/comfyroom_xm.jpg"><img src="images/comfyroom2_m.jpg" /></a></div>
							<div class="col-xs-3"><a class="fullsizable" href="images/comfyroomdetail_xm.jpg"><img src="images/comfyroom3_m.jpg" /></a></div>
							<div class="col-xs-3"><a class="fullsizable" href="images/superiorroom_xm.jpg"><img src="images/superiorroom_m.jpg" /></a></div>
						</div>
						
						<div class="row image-container">
							<div class="col-xs-3"><a class="fullsizable" href="images/comfyroombathroomdetail_xm.jpg"><img src="images/superiorroom7_m.jpg" /></a></div>
							<div class="col-xs-3"><a class="fullsizable" href="images/comfyroom_xm.jpg"><img src="images/comfyroom2_m.jpg" /></a></div>
							<div class="col-xs-3"><a class="fullsizable" href="images/comfyroomdetail_xm.jpg"><img src="images/comfyroom3_m.jpg" /></a></div>
							<div class="col-xs-3"><a class="fullsizable" href="images/superiorroom_xm.jpg"><img src="images/superiorroom_m.jpg" /></a></div>
						</div>
						
				</div>
			</div>
			
			
			<br/>

		
		</div>
		
	</div>
	
			
	<?php include_once 'footer.php'; ?>
  


</div>


	<script src="js/jquery.min.js"></script>
	<script src="https://maps.googleapis.com/maps/api/js?sensor=false&language=el"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/bootstrap-datepicker.js"></script>
	<script src="js/jssor.slider.min.js"></script>
	<script src="js/jquery.fullsizable.2.0.1.min.js"></script>
	<script src="js/index.js"></script>
</body>
</html>


