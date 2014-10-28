var map = null;

$(document).ready(function(){

	//DATEPICKER//
	$('input.datepicker').datepicker({
		autoclose: true,
		startDate: '+1d'
	});
	
	 $(this).on('focus', 'input', function(){
		 if ( $('.datepicker').length )
		 $('input.datepicker').datepicker('hide');
	 });
	 
	 $(this).on('click', '.dropdown-menu *', function(e){
	     e.stopPropagation();
	 });
	 
	 
	 $(this).on('click', 'div.weather', function(e){
		 $('#weather-window').modal('show');
	 });
	 
	 
	 $(this).on('click', 'div.time', function(e){
		 $('#time-window').modal('show');
	 });
	 
	 $(this).on('click', 'div.currency', function(e){
		 $('#currency-window').modal('show');
	 });
	 
	 
	 $(this).on('click', 'div.bookmarkme', function() {
         if (window.sidebar && window.sidebar.addPanel) { // Mozilla Firefox Bookmark
             window.sidebar.addPanel(document.title,window.location.href,'');
         } else if(window.external && ('AddFavorite' in window.external)) { // IE Favorite
             window.external.AddFavorite(location.href,document.title); 
         } else if(window.opera && window.print) { // Opera Hotlist
             this.title=document.title;
             return true;
         } else { // webkit - safari/chrome
             alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != - 1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');
         }
     });

	 
	
	$(this).on('mouseenter', '.datepicker-switch, th.next, th.prev', function(){
		$(this).css('background', '#8B0000');
	});
	
	$(this).on('mouseenter', 'div.header-hover:not(.active-link)', function(){
		$(this).css('background', '#888888');
	});

	$(this).on('mouseleave', 'div.header-hover:not(.active-link)', function(){
		$(this).css('background', '#8B0000');
	});
	
	$(this).on('click', '.fa-calendar', function(){
		$(this).closest('div.book-field').find('input.datepicker:first').datepicker('show');
	});
	
	
	
	if ( $('div.googleMap').length ){
		google.maps.event.addDomListener(window, 'load', initiate_geolocation);
	}
	
	
	 $('#tabs a').click(function(e){
        e.preventDefault();
        $(this).tab('show');
        if ( map ) google.maps.event.trigger(map, 'resize');
    });
	
	var pages = ['home', 'accomodation.php', 'offers.php', 'location.php', 'thehotel.php', 'dining.php', 'photo-gallery.php'];
	
	var myURL = document.URL.split('/');
	myURL = myURL[myURL.length-1];
	myURL = myURL.replace("#", "");
	console.log(myURL);
	
	if ( $.inArray(myURL, pages) == -1 ){
		
	} else{
		var index = $.inArray(myURL, pages);
		$('div.active-link').removeClass('active-link');
		$('div.header-hover:eq("'+index+'")').addClass('active-link');
	}



	 
	 $(this).on('click', 'div.plus-area', function(){
		 var $elem = $(this).closest('div.boxes').next('div.details:first');
		 var $this = $(this);
		 if ( $elem.is(':hidden') ){
			 $elem.slideDown().promise().done(function(){
				 $this.find('.fa-plus').removeClass('fa-plus').addClass('fa-minus');
			 });
		 } else{
			 $elem.slideUp().promise().done(function(){
				 $this.find('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
			 });
		 }
	 });
	 
	 
	 //SLIDESHOW//
	 $('div.slideshow').cycle('fade');

     
     //$('a.fullsizable').fullsizable();

});


function initiate_geolocation(mapString) {  
    navigator.geolocation.getCurrentPosition(handle_geolocation_query);  
}  


function handle_geolocation_query(position){
	
	//var lng = position.coords.longitude;
	//var lat = position.coords.latitude;
	var myLatlng = new google.maps.LatLng(37.985298,23.719681);
	
    var mapOptions = {
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoom: 15
    };
    
    if ( $('#googleMap').length ){
    	map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
    } else if ( $('#googleMap-2').length ){
    	map = new google.maps.Map(document.getElementById("googleMap-2"), mapOptions);
    }
    
    var marker = createMarker(map, myLatlng);
    markerInfo(map, marker);
}


function createMarker(map, myLatlng){
	var marker = new google.maps.Marker({
		map: map,
        position: myLatlng,
        title: "Hotel Rio Athens",
    });
	return marker;
}
	

function markerInfo(map, marker){
   var address = "Hotel Rio Athens";
   var infoLen = address.length * 8;
   var infoStyle = "style=width:"+infoLen+"px";
   infowindow = new google.maps.InfoWindow({
      content: '<div id="infoWindow"'+infoStyle+'>' + address,
   });
   infowindow.open(map, marker);
}


function getToday(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	if(dd<10) {
	    dd='0'+dd;
	} 
	today = mm+'/'+dd+'/'+yyyy;
	if(mm<10) {
	    mm='0'+mm;
	} 
	return today;
}


