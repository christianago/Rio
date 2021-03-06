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

<div class="container">

	<div class="row the-header">
		<div class="col-xs-12">
			<?php include_once 'header.php'; ?>
		</div>
	</div>

	<div class="general-area-1 row">
	
		<div class="col-xs-9 col-lg-8 welcome">
			<div class="content-title" align="center"></div><br/>
			<div class="read">
			
				<div class="content"></div><br/><br/>
			
				<div class="content-sub-title"></div><br/>
			
				<div class="facility-list-1">
					<ul class="content_list"></ul>
				</div>
				
				<div class="facility-list-2">
					<ul class="content_list"></ul>
				</div>
				
				<div class="row">
					<div class="col-xs-12">
						<div class="content-sub-title specs"></div><br/>
						<ul class="sub-content-3"></ul>
					</div>
				</div>
				
				<br/>
				
				<div class="amenities-list-1 read">
					<div class="content-sub-title"></div><br/>
					<ul class="sub-content-1"></ul>
				</div>
				
				<div class="amenities-list-2 read">
					<div class="content-sub-title"></div><br/>
					<ul class="sub-content-2"></ul>
				</div>
				
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

