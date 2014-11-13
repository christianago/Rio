<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title></title>

<meta id="viewport" name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<link rel="stylesheet" href="css/bootstrap.min.css" />
<link rel="stylesheet" href="css/bootstrap-datepicker.css" />
<link rel="stylesheet" href="css/font-awesome.min.css" />
<link rel="stylesheet" href="css/index.css" />

</head>
<body>

<?php include_once 'modals.php'; ?>

<div class="container">

	<div class="row the-header">
		<div class="col-xs-12">
			<?php include_once 'header.php'; ?>
		</div>
	</div>

	<div class="general-area-1 row">
	
		<div class="col-xs-11 col-lg-8 welcome">
			<div class="content-title" align="center"></div><br/>
			<div class="content"></div><br/><br/>
			<div class="row">
				<div class="col-xs-2 content-image-title"></div>
				<div class="col-xs-2 content-image-title"></div>
				<div class="col-xs-2 content-image-title"></div>
				<div class="col-xs-2 content-image-title"></div>
				<div class="col-xs-2 content-image-title"></div>
			</div>
			<div class="row travel-images">
				<div class="col-xs-2"><img src="images/sounio.jpg" /></div>
				<div class="col-xs-2"><img src="images/santorini.jpg" /></div>
				<div class="col-xs-2"><img src="images/stadio.jpg" /></div>
				<div class="col-xs-2"><img src="images/acro.jpg" /></div>
				<div class="col-xs-2"><img src="images/theatre.jpg" /></div>
			</div>
			
		</div>

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
