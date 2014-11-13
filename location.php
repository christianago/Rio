<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Τοποθεσία - Hotel Rio Athens</title>

<meta id="viewport" name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<link rel="stylesheet" href="css/bootstrap.min.css" />
<link rel="stylesheet" href="css/bootstrap-datepicker.css" />
<link rel="stylesheet" href="css/font-awesome.min.css" />
<link rel="stylesheet" href="css/index.css" />

</head>
<body>

<?php include_once 'modals.php'; ?>

<div class="container">

	<div class="row the-header" align="center">
		<?php include_once 'header.php'; ?>
	</div>

	<div class="row">
		<div class="col-xs-11 col-lg-8 welcome">
			<div class="content-title" align="center">Τοποθεσία</div>
			<div class="googleMap" id="googleMap"></div>
		</div>
	</div>
	
	<?php include_once 'footer.php'; ?>

</div>

	<script src="js/jquery.min.js"></script>
	<script src="http://www.google-analytics.com/ga.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/jquery.cycle.all.js"></script>
	<script src="js/bootstrap-datepicker.js"></script>
	<script src="js/index.js"></script>
</body>
</html>