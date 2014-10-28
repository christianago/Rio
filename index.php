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


<div class="modal fade" id="weather-window">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title">Καιρός</h4>
      </div>
      <div class="modal-body">
        <iframe id="forecast_embed" type="text/html" frameborder="0" height="245" width="100%" src="http://forecast.io/embed/#lat=37.985298&lon=-23.719681&name=Athens&units=ca"> </iframe>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->


<div class="modal fade" id="time-window">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title">Ώρα</h4>
      </div>
      <div class="modal-body">
        <iframe type="text/html" frameborder="0" height="500" width="100%" src="http://www.worldtimeserver.com/current_time_in_GR.aspx"></iframe>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->


<div class="modal fade" id="currency-window">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title">Συνάλλαγμα</h4>
      </div>
      <div class="modal-body">
        <iframe id="tmcmini" src="http://themoneyconverter.com/MoneyConverter.aspx?from=USD&amp;to=EUR"
        style="width: 185px; height: 210px; border: none; background-color: #ffffff;" scrolling="no" frameborder="0" marginwidth="0" marginheight="0"></iframe>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->


<div class="container">


	<div class="row the-header" align="center">
		<?php include_once 'header.php'; ?>
	</div>


	<div class="general-area-1 row">
	
		<div class="col-xs-11 col-lg-8 welcome">
			<div class="title" align="center">Καλώς ορίσατε στο ξενοδοχείο Rio Athens</div><br/>
				Το Ξενοδοχείο ΡΙΟ βρίσκεται στο κέντρο της Αθήνας, σε έναν ήσυχο πεζόδρομο της πλατείας Καραϊσκάκη, δίπλα στον σταθμό του Μετρό ΜΕΤΑΞΟΥΡΓΕΙΟ και πολύ κοντά στον Διεθνή Σιδηροδρομικό Σταθμό της Αθήνας.
				Βρίσκεται σε απόσταση 1 χιλιομέτρου από την πλατεία Συντάγματος,
				απέχει 35΄ λεπτά από τον Διεθνή Αερολιμένα Αθηνών με αυτοκίνητο, και 15΄ λεπτά από το λιμάνι του ΠΕΙΡΑΙΑ, με τον ηλεκτρικό σιδηρόδρομο.
				Το Ξενοδοχείο ΡΙΟ στεγάζεται σε ένα πολύ όμορφο νεοκλασικό κτίριο το οποίο έχει ανακαινισθεί πλήρως, συνδυάζοντας όλες τις ευκολίες της σύγχρονης ζωής με την κλασική αισθητική του κτιρίου. 
				Τα δωμάτια του Ξενοδοχείου είναι φιλόξενα και εξοπλισμένα με σύστημα κλιματισμού, ατομική τουαλέτα με μπάνιο ή ντουζιέρα, δορυφορική τηλεόραση,
				mini bar, στεγνωτήρα μαλλιών, τηλεφωνική συσκευή άμεσης κλήσης, που αποσκοπούν στην πλήρη προσωπική σας ικανοποίηση.
				Το Bar - Εστιατόριο που βρίσκεται στο ισόγειο του ξενοδοχείου, αποτελεί έναν ιδανικό χώρο για να απολαύσετε το ποτό και το φαγητό σας, ακούγοντας ευχάριστη μουσική.
				Σερβίρονται πολλά είδη ποτών και εδεσμάτων από την ελληνική κουζίνα, έως τις πρώτες πρωινές ώρες.
				Το Ξενοδοχείο ΡΙΟ συστήνεται από έναν μεγάλο αριθμό τουριστικών οδηγών σε ολόκληρο τον κόσμο, όχι μόνο σαν χώρος διαμονής σε περιόδους διακοπών, αλλά και κατά τη διάρκεια επιχειρηματικών ταξιδιών. 
				Καθ' όλη τη διάρκεια του έτους, οι ανέσεις του ξενοδοχείου μας είναι στη διάθεσή σας, σε λογικές τιμές, υψηλή ποιότητα παρεχόμενων υπηρεσιών και μέσα σε ένα φιλικό περιβάλλον. 
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

