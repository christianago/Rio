<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Hotel Rio</title>

<meta id="viewport" name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<link rel="stylesheet" href="css/bootstrap.min.css" />
<link rel="stylesheet" href="css/bootstrap-datepicker.css" />
<link rel="stylesheet" href="css/font-awesome.min.css" />
<link rel="stylesheet" href="css/index.css" />

</head>
<body>


<div class="container">

	<div class="general-area-1 row">
	
	<?php include_once 'header.php'; ?>
		
		<div class="row slideshow">
	
			<?php include_once 'slideshow.php'; ?>
			
			<div class="col-xs-7 availability-center-area">
				<div class="row">
					<div class="avail-label">Άφιξη</div>
					<div class="avail-label">Αναχώρηση</div>
					<div class="avail-label">Ενήλικες</div>
					<div class="avail-label">Παιδιά</div>
					<div class="avail-label">Δωμάτια</div>
					<div class="avail-label">Κωδικός</div>
				</div>
				
				
				<div class="row">
					<div class="avail-form-group">
						<input class="datepicker form-control" data-date-format="dd/mm/yyyy" />
					</div>
				
					<div class="avail-form-group">
						<input class="datepicker form-control" data-date-format="dd/mm/yyyy" />
					</div>
					
					<div class="avail-form-group">
						<select class="form-control select-adults-2">
						    <option value="1">1</option>
						    <option value="2">2</option>
						    <option value="3">3</option>
						    <option value="4">4</option>
						</select>
					</div>
					
					<div class="avail-form-group">
						<select class="form-control select-kids-2">
				       		<option value="0">0</option>
						    <option value="1">1</option>
						    <option value="2">2</option>
						    <option value="3">3</option>
						    <option value="4">4</option>
						</select>
					</div>
					
					<div class="avail-form-group">
						<select class="form-control select-rooms-2">
						    <option value="1">1</option>
						    <option value="2">2</option>
						    <option value="3">3</option>
						    <option value="4">4</option>
						</select>
					</div>
					
					<div class="avail-form-group">
						<input type="password" class="form-control" />
					</div>
					
					<div class="avail-form-group">
						<button type="button" class="btn btn-primary availability">Διαθεσιμότητα</button>
					</div>
					
				</div>
				
			</div>
		
		</div>
		
		
		<div class="col-xs-7 welcome">
			<div class="title">Καλώς ορίσατε στο ξενοδοχείο Lato Boutique</div>
			
		Η μοναδική θέα του <b>Ενετικού κάστρου</b> στο <b>παλιό λιμάνι</b> του Ηρακλείου και το θαυμάσιο Κρητικό πέλαγος είναι από τα πιο φωτογραφημένα αξιοθέατα στη Κρήτη.
		Δεν είναι πολλοί οι επισκέπτες της πόλης που μπορουν να απολαύσουν το πλήρες <b>πανοραμικό μεγαλείο</b> αυτού του τοπίου, όπως αυτοί που διαμένουν στο ξενοδοχείο Lato Boutique.
		<br/><br/>
		Ακριβώς πάνω από τη μαρίνα, το ξενοδοχείο μας <b>λειτουργεί 365</b> ημέρες το χρόνο για περισσότερα από 40 χρόνια.
		Διάσημο για την <b>αυθεντική Κρητική φιλοξενία</b> του, αποτελεί μαγνήτη για ρομαντικά ζευγάρια, για οικογένειες, αλλά και για επαγγελματίες επισκέπτες.
		<br/><br/>
		Το ξενοδοχείο Lato Boutique είναι ιδανικό σημείο εκκίνησης για εξερεύνηση της Κρήτης και της συναρπαστικής πρωτεύουσας του νησιού.
		Αφού απολαύσετε την εκπληκτική θέα πάνω από το παλιό Λιμάνι, μπορείτε να ανακαλύψετε το ιστορικό κέντρο της πόλης και τα πιο σημαντικά αξιοθέατα ή να επισκεφθείτε τα διάσημα μουσεία,
		τα οποία βρίσκονται σε πολύ κοντινή απόσταση από την είσοδο του ξενοδοχείου. Το γεμάτο ζωή κέντρο της παλιάς πόλης του Ηρακλείου με τα πιο όμορφα εμπορικά καταστήματα, και χώρους αναψυχής
		και διασκέδασης είναι επίσης λίγα βήματα από το ξενοδοχείο μας. Επιπλέον, αν θέλετε να απολαύσετε την πιο φρέσκια δημιουργική <b>Κρητική κουζίνα</b>, δεν χρειάζεται να απομακρυνθείτε.
		Τα διεθνούς φήμης εστιατόρια του Lato είναι πάντα έτοιμα να σας εντυπωσιάσουν.
		</div>
	
	</div>


	<div class="general-area-2 row">
	
		<div class="row area-1">
			<div class="col-xs-3 title link-1"><a href="#">Τιμές & Προσφορές</a></div>
			<div class="col-xs-3 col-xs-offset-3 title link-1"><a href="#">Εστιατόριο Herbs' Garden</a></div>
		</div>
		
		<div class="row area-2">
			<div class="col-xs-3"><img src="images/homeoffers.jpg" /></div>
			<div class="col-xs-3 area-3">
				<div class="side-text"><i class="fa fa-chevron-right"></i>Μεγάλη Διαμονή – ειδικές τιμές</div>
				<br/>
				<div class="side-text"><i class="fa fa-chevron-right"></i>Ρομαντική διαφυγή</div>
				<br/>
				<div class="side-text"><i class="fa fa-chevron-right"></i>Διαμονή και Αυτοκίνητο</div>
			</div>
			
			<div class="col-xs-3 title"><img src="images/herbsgardenrestaurantgree.jpg" /></div>
		</div>
		
		
		
		<div class="row area-4">
			<div class="col-xs-4 title">Γαστρονομία - Κρητική διατροφή</div>
			<div class="col-xs-4 title">Κοινωνικές & Επαγγελματικές εκδηλώσεις</div>
			<div class="col-xs-3 title">Πώς να έρθετε</div>
		</div>
		
		
		<div class="row area-5">
			<div class="col-xs-4"><a href="#"><img src="images/gastronomy.jpg" /></a></div>
			<div class="col-xs-4"><a href="#"><img src="images/socialbusinessevents.jpg" /></a></div>
			<div class="col-xs-3"><a href="#"><img src="images/findus.jpg" /></a></div>
		</div>

	
	</div>
	
	<?php include_once 'footer.php'; ?>


</div>


	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/bootstrap-datepicker.js"></script>
	<script src="js/jssor.slider.min.js"></script>
	<script src="js/index.js"></script>
</body>
</html>

