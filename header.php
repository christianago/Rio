
<audio id="zorba" loop>
  <source src="audio/zorba.mp3" type="audio/ogg">
  <source src="audio/zorba.mp3" type="audio/mpeg">
</audio>


<div class="row header-1">
	<div class="col-xs-2 col-lg-2 col-lg-offset-2">
		<img id="logo" src="images/logo.png" /> 
		<div id="hotel">HOTEL</div>
		<img class="gold-star" src="images/gold-star.gif" /> 
		<img class="gold-star" src="images/gold-star.gif" /> 
		<img class="gold-star" src="images/gold-star.gif" /> 
	</div>
	<div class="col-xs-10 col-lg-5">
		<img id="sticker" src="images/sticker.png"/>
		<img id="sticker2" src="images/sticker.png"/>
		<img id="sticker3" src="images/sticker.png"/>
		<div class="collage">
			<a href="#"><img src="images/acro-day.jpg" /></a>
			<a href="#"><img src="images/exte.jpg" /></a>
			<a href="#"><img src="images/acro-night.jpg" /></a>
			<a href="#"><img src="images/rio-night.jpg" /></a>
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
		<div class="header-hover"><a href="travel-services.php"></a></div>
		<div class="header-hover"><a href="facilities.php"></a></div>
		<div class="header-hover"><a href="contact.php"></a></div>
		<div class="header-hover"><a href="reviews.php"></a></div>
	</div>
</div>


<div class="col-xs-4 col-lg-3 col-lg-offset-2 book-slide">

	<div class="row">
	
		<div class="book-online-container col-xs-12 col-lg-12">
	
			<div class="row languages">
				<div class="col-xs-12">
					<img class="flag" title="EN" src="images/en.png" />
					<img class="flag" title="EL" src="images/gr.png" />
					<img class="flag" title="FR" src="images/fr.png" />
					<img class="flag" title="SP" src="images/sp.png" />
					<img class="flag" title="IT" src="images/it.png" />
					<img class="flag" title="DE" src="images/de.png" />
					<img class="flag" title="RU" src="images/rus.png" />
					<img class="flag" title="CN" src="images/cn.png" />
					<img class="flag" title="BR" src="images/br.png" />
				</div>
			</div>
			
			
			<div class="row book-online">
				<div class="col-xs-12">
					<div class="book-online-literal reservation-item"></div>
					
					<div class="row book-field">
						<div class="col-xs-4 reservation-item"></div>
						<div class="col-xs-4">
							<input id="start-date" class="datepicker form-control" data-date-format="dd/mm/yyyy" />
						</div>
						<div class="col-xs-1 col-xs-offset-1">
							<i class="fa fa-calendar"></i>
						</div>
					</div>
					
					<div class="row book-field">
						<div class="col-xs-4 reservation-item"></div>
						<div class="col-xs-4">
							<input id="end-date" class="datepicker form-control" data-date-format="dd/mm/yyyy" />
						</div>
						<div class="col-xs-1 col-xs-offset-1">
							<i class="fa fa-calendar"></i>
						</div>
					</div>
					
					<div class="row book-field">
						<div class="col-xs-4 reservation-item"></div>
						<div class="col-xs-4">
							<select class="form-control select-adults">
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
							<select class="form-control select-rooms">
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
							<input class="form-control btn btn-primary reservation-item" type="submit" id="check-availability" value="Έλεγχος διαθεσιμότητας" />
						</div>
					</div>
					
				</div>
				
				
				<div class="col-xs-12" align="center">
					<img id="best-price" src="images/Best-Price-Guarantee.png" />
				</div>
				
			</div>
			
		</div>
		
	</div>

	
</div>

<div class="col-xs-8 col-lg-4 book-slide">
	
	<div class="row slideshow">
		<?php 
		if ( strpos( $_SERVER["REQUEST_URI"], 'reviews.php') === FALSE ){
			include_once 'slides-1.php'; 
		} else{
			include_once 'slides-2.php';
		}
		?>
	</div>
	
	<div class="row" id="lezanta">
		<div class="col-xs-12">
		<i class="fa fa-circle"></i>
		<i class="fa fa-circle"></i>
		<i class="fa fa-circle"></i>
		in the center of Athens</div>
	</div>
	
	<div class="row stand">&nbsp;</div>
	
	<div class="row nav-container">
		<div class="col-xs-12">
			<div id="nav" class="nav"></div>
		</div>
	</div>
	
</div>
	