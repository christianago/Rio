<audio id="myaudio" loop preload="auto">
  <source src="audio/ChariotsofFire.mp3" type="audio/ogg">
  <source src="audio/ChariotsofFire.mp3" type="audio/mpeg">
</audio>

<img id="backtotop" src="images/backtotop.png"/>

<div class="row header-1">
	<div class="col-xs-2">
		<img id="logo" src="images/logo.png" /> 
		<div id="hotel">HOTEL</div>
		<img class="gold-star" src="images/gold-star.gif" /> 
		<img class="gold-star" src="images/gold-star.gif" /> 
		<img class="gold-star" src="images/gold-star.gif" /> 
	</div>
	<div class="col-xs-10 collage-container">
		<div class="col-xs-3"><img id="sticker" src="images/sticker.png"/></div>
		<div class="col-xs-3"><img id="sticker2" src="images/sticker.png"/></div>
		<div class="col-xs-3"><img id="sticker3" src="images/sticker.png"/></div>
		<div class="col-xs-3"><img id="sticker4" src="images/sticker.png"/></div>
		
		<div class="row collage">
			<div class="col-xs-3"><a href="#" id="col-img-1"><img src="images/acro-day.jpg" /></a></div>
			<div class="col-xs-3"><a href="#" id="col-img-2"><img src="images/exte.jpg" /></a></div>
			<div class="col-xs-3"><a href="#" id="col-img-3"><img src="images/acro-night.jpg" /></a></div>
			<div class="col-xs-3"><a href="#" id="col-img-4"><img src="images/rio-night.jpg" /></a></div>
		</div>
	</div>
</div>


<i id="sound" class="fa fa-volume-up fa-2x"></i> 


<div class="row header-2">
	<div class="col-xs-12">
		<div class="header-hover"><a href="index.php"></a></div>
		<div class="header-hover"><a href="accomodation.php"></a></div>
		<div class="header-hover"><a href="booking-info.php"></a></div>
		<div class="header-hover"><a href="photo-gallery.php"></a></div>
		<div class="header-hover"><a href="bar-restaurant.php"></a></div>
		<div class="header-hover"><a href="travel-services.php"></a></div>
		<div class="header-hover"><a href="contact.php"></a></div>
		<div class="header-hover"><a href="reviews.php"></a></div>
	</div>
</div>


<div class="col-xs-5 col-lg-4 col-lg-offset-1">

	<div class="row">
	
		<div class="book-online-container col-xs-12 col-lg-12">
	
			<div class="row languages">
				<div class="col-xs-12">
					<img class="flag" title="EN" src="images/uk.png" />
					<img class="flag" title="DE" src="images/de.png" />
					<img class="flag" title="IT" src="images/it.png" />
					<img class="flag" title="SP" src="images/es.png" />
					<img class="flag" title="FR" src="images/fr.png" />
					<img class="flag" title="EL" src="images/gr.png" />
					<img class="flag" title="RU" src="images/ru.png" />
					<img class="flag" title="BR" src="images/br.png" />
					
					<img class="flag" title="CN" src="images/cn.png" />
					<img class="flag" title="PL" src="images/pl.png" />
					<img class="flag" title="SE" src="images/se.png" />
				</div>
			</div>
			
			
			<form name="frmSearchCosmoresBooking" id="frmSearchCosmoresBooking" method="get" target="_blank">
			<input type="hidden" name="lan_cosmores" id="lan_cosmores" value="EN" />
				
			<div class="row book-online">
				<div class="col-xs-12 book-online-sub">
					<div class="book-online-literal reservation-item"></div>
					
					<div class="row book-field">
						<div class="col-xs-4 reservation-item"></div>
						<div class="col-xs-4">
							<input type="text" id="check_in_date_cosmores" name="check_in_date_cosmores" readonly="readonly" class="datepicker form-control" data-date-format="dd/mm/yyyy" />
						</div>
						<div class="col-xs-1 calendar-item">
							<i class="fa fa-calendar"></i>
						</div>
					</div>
					
					<div class="row book-field">
						<div class="col-xs-4 reservation-item"></div>
						<div class="col-xs-4">
							<input type="text" id="check_out_date_cosmores" name="check_out_date_cosmores" readonly="readonly" class="datepicker form-control" data-date-format="dd/mm/yyyy" />
						</div>
						<div class="col-xs-1 calendar-item">
							<i class="fa fa-calendar"></i>
						</div>
					</div>
					
					<div class="row book-field">
						<div class="col-xs-4 reservation-item"></div>
						<div class="col-xs-4">
							<select class="form-control select-adults"  name="adults_cosmores" id="adults_cosmores">
							    <option value="1">1</option>
							    <option value="2">2</option>
							    <option value="3">3</option>
							    <option value="4">4</option>
							</select>
						</div>
					</div>
					
					<div class="row book-field">
						<div class="col-xs-4 reservation-item"></div>
						<div class="col-xs-4">
							<select class="form-control select-kids">
							    <option value="-1">select</option>
								<option value="0">0</option>
								<option value="1">1</option>
							    <option value="2">2</option>
							    <option value="3">3</option>
							</select>
						</div>
					</div>
					
					<div class="row book-field">
						<div class="col-xs-4 reservation-item"></div>
						<div class="col-xs-4">
							<select class="form-control select-rooms" name="rooms_cosmores" id="rooms_cosmores">
							    <option value="1">1</option>
							    <option value="2">2</option>
							    <option value="3">3</option>
							    <option value="4">4</option>
							    <option value="5">5</option>
							    <option value="6">6</option>
							    <option value="7">7</option>
							    <option value="8">8</option>
							    <option value="9">9+</option>
							</select>
						</div>
					</div>
					
					<div class="row book-field">
						<div class="col-xs-12" align="center">

						<input type="hidden" name="button_cosmores" id="button_cosmores" />
						
						<a id="gotoCosmores" href="https://riohotel.cosmores.com/?SITE=1095">
						
							<input class="form-control btn btn-primary reservation-item" id="check-availability" type="button" value="Έλεγχος διαθεσιμότητας" />
						</a>
						
						</div>
					</div>
					
				</div>
				
				<div class="col-xs-12" align="center">
					<img id="best-price" src="images/Best-Price-Guarantee.png" />
				</div>
				
			</div>
			
			</form>
			
		</div>
		
	</div>
	
	
	<div class="row last-minute-container">
		<div class="col-xs-12">
			<img id="last-minute" src="images/last-minute-hotel_04.gif" />
			<div id="phone" align="center">
				<a href="tel:+30 210 5227075">+30 210 5227075
				<br/>
				<img id="callnow" src="images/callnow.png"/><span id="call-now-literal"></span>
				</a>
			</div>
		</div>
	</div>

	
</div>

<div class="col-xs-7 col-lg-7 book-right pull-right">

	<div class="row cycle-slideshow responsive" data-cycle-carousel-fluid="true" data-cycle-pager="#nav-container" data-cycle-pager-template="<a href='#'><img src='{{src}}' width=70 height=50>
		<?php 
		if ( strpos( $_SERVER["REQUEST_URI"], 'reviews.php') === FALSE ){
			include_once 'slides-1.php'; 
		} else{
			include_once 'slides-2.php';
		}
		?>
		<div class="row lezanta-container">
			<div id="lezanta">
				<i class="fa fa-circle"></i>
				<i class="fa fa-circle"></i>
				<i class="fa fa-circle"></i>
				in the center of Athens
			</div>
			<div id="lezanta-2">Hotel RIO Athens is recommended in many international tourist guide books around the world not only for holidays stays, but also for business trips</div>
			<div class="row stand">&nbsp;</div>
		</div>
		
		<div class="row">
			<div class="col-xs-1 nav-container" id="nav-container"></div>
		</div>
	</div>
	
	<?php 
	if ( strpos($_SERVER["REQUEST_URI"], 'reviews.php') !== FALSE )
	include_once 'reviews_inc.php'; ?>
	
</div>
	