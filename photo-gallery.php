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

<div class="container">

<div class="full-image"><img /></div>

	<div class="row the-header">
		<div class="col-xs-12">
			<?php include_once 'header.php'; ?>
		</div>
	</div>

	<div class="row" align="center">
		<div class="col-xs-12 welcome gallery-container">
			<div class="content-title" align="center"></div><br/>
			<div class="row">
			<?php include 'slides-1.php'; ?>
			</div>
		</div>
	</div>
	
	<?php include_once 'footer.php'; ?>

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
