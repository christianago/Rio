<div class="modal fade" id="weather-window">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title">Weather</h4>
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
        <h4 class="modal-title">Local Time</h4>
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
        <h4 class="modal-title">Currency</h4>
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
        <h4 class="modal-title">Map</h4>
      </div>
      <div class="modal-body">
	      <b class="modal-map-title"></b><br/>
	      <ul>
	      	<li class="modal-map-content"></li>
	      	<lo class="modal-map-content"></li>
	      </ul>
	      <b class="modal-map-title"></b>
	      <ul>
	      	<li class="modal-map-content"></li>
	      </ul>
	      <b class="modal-map-title"></b>
	      <ul>
	      	<li class="modal-map-content"></li>
	      </ul>
	      <br/>
       	<div class="googleMap-2" id="googleMap-2"></div>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
