<div class="modal fade" id="weather-window">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title">Καιρός</h4>
      </div>
      <div class="modal-body">
        <iframe id="forecast_embed" scrolling="no" frameborder="0" height="420" width="800" src="http://www.wunderground.com/q/locid:GRIX0012#city-page"></iframe>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->


<div class="modal fade" id="time-window">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title">Τοπική Ώρα</h4>
      </div>
      <div class="modal-body">
        <iframe frameborder="0" height="500" width="100%" src="http://www.worldtimeserver.com/current_time_in_GR.aspx"></iframe>
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


<div class="modal" id="map-window">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title">Χάρτης</h4>
      </div>
      <div class="modal-body">
	      <b>Άφιξη από το αεροδρόμιο</b><br/>
	      <ul>
	      	<li>Μετρό: Γραμμή 3 - Σύνταγμα, Γραμμή 2 - Μεταξουργείο</li>
	      	<li>Λεωφορείο: Χ95 - Σύνταγμα, Τρόλλευ 11 - Ομόνοια</li>
	      </ul>
	      <b>Άφιξη από το λιμάνι Πειραιώς</b>
	      <ul>
	      	<li>Μετρό: Γραμμή 1 - Ομόνοια</li>
	      </ul>
	      <b>Άφιξη από το σταθμό τρένου</b>
	      <ul>
	      	<li>Μετρό: Γραμμή 2 - Μεταξουργείο</li>
	      </ul>
	      <br/>
       	<div class="googleMap-2" id="googleMap-2"></div>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->


<div class="modal fade" id="message-window">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      	 <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
     	 <h4 class="modal-title">Hotel Rio Athens</h4>
      </div>
      <div class="modal-body">
      
      	 <div class="email-message" title="EL">Ευχαριστούμε! Το μήνυμά σας εστάλη με επιτυχία.'</div>
     	 <div class="email-message" title="EN">Thank you! Your message sent succesfully.</div>
     	 
     	 <div class="review-message" title="EL">Ευχαριστούμε! Η αξιολόγησή σας έγινε με επιτυχία και θα ελεγχθεί σύντομα.</div>
     	 <div class="review-message" title="EN">Thank you! Your review succesfully submited and it will be briefly verified.</div>
     	 
     	 <div class="fail-message" title="EL">Προέκυψε κάποιο σφάλμα. Παρακαλούμε προσπαθήστε ξανά αργότερα.</div>
     	 <div class="fail-message" title="EN">Error occured. Please try again later.</div>
     	 
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
