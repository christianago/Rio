var map = null;
var currentLanguage = localStorage.getItem('language');

$(document).ready(function(){
	
	var pages = ['index.php', 'accomodation.php', 'booking-info.php', 'location.php', 'photo-gallery.php', 'bar-restaurant.php', 'contact.php', 'reviews.php'];
	var myURL = document.URL.split('/');
	myURL = myURL[myURL.length-1];
	myURL = myURL.replace("#", "");
	console.log(myURL);
	
	if ( $.inArray(myURL, pages) != -1 ){
		var key = $.inArray(myURL, pages);
		$('div.header-hover:eq("'+key+'")').addClass('active-link');
	}
	
	
	if ( currentLanguage == 'undefined' || currentLanguage == null || currentLanguage == '' ){
		language('EN', myURL);
		localStorage.setItem('language', 'EN');
	} else{
		language(currentLanguage, myURL);
	}
	
	//SLIDESHOW//
	$('div.slideshow').cycle('fade');
	setTimeout(function(){
		$('div.slideshow-container').fadeIn('slow');
	}, 500);
	
	//DATEPICKER//
	$('input.datepicker').datepicker({
		autoclose: true,
		startDate: '+1d'
	});
	
	 $(this).on('focus', 'input', function(){
		 if ( $('.datepicker').length )
		 $('input.datepicker').datepicker('hide');
	 });
	 
	 $(this).on('click', '.fa-calendar', function(){
		$(this).closest('div.book-field').find('input.datepicker:first').datepicker('show');
	 });
	
	 
	 $(this).on('click', '.dropdown-menu *', function(e){
	     e.stopPropagation();
	 });
	 
	 
	 $(this).on('click', 'img.flag', function(e){
		 var title = $(this).attr('title');
	     language(title, myURL);
	     localStorage.setItem('language', title);
	 });
	 
	 
	 $(this).on('click', '.weather', function(e){
		 $('#weather-window').modal('show');
	 });
	 
	 
	 $(this).on('click', '.time', function(e){
		 $('#time-window').modal('show');
	 });
	 
	 $(this).on('click', '.currency', function(e){
		 $('#currency-window').modal('show');
	 });
	 
	 $(this).on('click', '.useful-links-container', function(e){
		 $('ul.useful-links').slideToggle();
	 });
	 
	 
	 $(this).on('click', '.bookmarkme', function() {
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
	}).on('mouseleave', 'div.header-hover:not(.active-link)', function(){
		$(this).css('background', '#8B0000');
	});
	
	
	 $(this).on('mouseenter', 'span.footer-elem, span.footer-elem a', function(e){
		 $('span.active-footer-elem').removeClass('active-footer-elem');
		 $(this).addClass('active-footer-elem');
	 }).on('mouseleave', 'span.footer-elem, span.footer-elem a', function(e){
		 $('span.active-footer-elem').removeClass('active-footer-elem');
	 });
	 
	 $(this).on('mouseenter', '#check-availability', function(e){
		 $(this).addClass('text-hover');
	 }).on('mouseleave', '#check-availability', function(e){
		 $(this).removeClass('text-hover');
	 });
	 
	 
	 $(this).on('mouseover click', '.review-label .fa-star-o, .review-label .fa-star', function(e){
		 $(this).nextAll().removeClass('fa-star').addClass('fa-star-o');
		 $(this).prevAll().andSelf().removeClass('fa-star-o').addClass('fa-star');
	 });
	

	if ( $('div.googleMap').length ){
		google.maps.event.addDomListener(window, 'load', initiate_geolocation);
	}
	
	$('select.select-adults option:eq(1)').attr('selected',true);
	$('select.select-rooms option:eq(1)').attr('selected',true);
	 
	 
     //GALLERY//
	 if(  $('a.fullsizable').length ){
		 $('a.fullsizable').fullsizable();
	 }
	 
	 
	 //CONTACT//
	 if ( $('#message').text() == '2' || $('#message').text() == '1' || $('#message').text() == '0' ){
		 
		 $('#message-window div.modal-body .review-message').hide();
		 $('#message-window div.modal-body .email-message').hide();
		 $('#message-window div.modal-body .fail-message').hide();
		 
		 if ( $('#message').html() == '2' ){
			 if ( $('#message-window div.modal-body .review-message[title="'+currentLanguage+'"]').length ){
				 $('#message-window div.modal-body .review-message[title="'+currentLanguage+'"]').show();
			 } else{
				 $('#message-window div.modal-body .review-message[title=EN]').show();
			 }
			
		 } else if ( $('#message').html() == '1' ){
			 if ( $('#message-window div.modal-body .email-message[title="'+currentLanguage+'"]').length ){
				 $('#message-window div.modal-body .email-message[title="'+currentLanguage+'"]').show();
			 } else{
				 $('#message-window div.modal-body .email-message[title=EN]').show();
			 }
		 } else{
			 if ( $('#message-window div.modal-body .fail-message[title="'+currentLanguage+'"]').length ){
				 $('#message-window div.modal-body .fail-message[title="'+currentLanguage+'"]').show();
			 } else{
				 $('#message-window div.modal-body .fail-message[title=EN]').show();
			 }
		 }
		 $('#message-window').modal('show');
	 }
	 
	 
	 //REVIEWS//
	 $('#review-form').submit(function() {
		 $('div.review-label').each(function(i){
			 var s = $(this).find('.fa-star').length;
			 $(this).find('input').val(s);
		 });
		 //return false;
	 });
	 
	 
});


function language(l, p){
	
	 var langs = ['EL', 'EN'];
	 var key = 1;
	 for(var i = 0; i < langs.length; i++){
		 if ( l == langs[i] ){
			 key = i;
			 break;
		 }
	 }
	 

	 $.getJSON('languages.json', function(data){
		 
		 if ( p == 'accomodation.php' ){
			 $('title').text(data.accomodation[key].title);
			 $('div.content-title').text(data.accomodation[key].content_title);
			 
		 } else if ( p == 'booking-info.php' ){
			 $('title').text(data.booking_info[key].title);
			 
			 //content-title
			 var ct = data.booking_info[key].content_title.split(',');
			 $('div.content-title').each(function(k, v){
				 $(this).text(ct[k]);
			 }); 
			 
			 //content
			 $('div.content:eq(0)').html(data.booking_info[key].content_1.split("|").join("<br/>"));
			 $('div.content:eq(1)').html(data.booking_info[key].content_2.split("|").join("<br/>"));
			 $('div.content:eq(2)').html(data.booking_info[key].content_3.split("|").join("<br/>"));
			 $('div.content:eq(3)').html(data.booking_info[key].content_4.split("|").join("<br/>"));
			 $('div.content:eq(4)').html(data.booking_info[key].content_5.split("|").join("<br/>"));
			 $('div.content:eq(5)').html(data.booking_info[key].content_6.split("|").join("<br/>"));
			 $('div.content:eq(6)').html(data.booking_info[key].content_7.split("|").join("<br/>"));
			 $('div.content:eq(7)').html(data.booking_info[key].content_8.split("|").join("<br/>"));
			 $('div.content:eq(8)').html(data.booking_info[key].content_9.split("|").join("<br/>"));
			 $('div.content:eq(9)').html(data.booking_info[key].content_10.split("|").join("<br/>"));
			 
		 } else if ( p == 'location.php' ){
			 $('title').text(data.location[key].title);
			 $('div.content-title').text(data.location[key].content_title);
			 
		 } else if ( p == 'photo-gallery.php' ){
			 $('title').text(data.photo_gallery[key].title);
			 $('div.content-title').text(data.photo_gallery[key].content_title);
			 
		 } else if ( p == 'bar-restaurant.php' ){
			 $('title').text(data.bar_restaurant[key].title);
			 $('div.content-title').text(data.bar_restaurant[key].content_title);
			 
		 }  else if ( p == 'contact.php' ){
			 $('title').text(data.contact[key].title);
			 
			 var ct = data.contact[key].content_title.split(',');
			 $('div.content-title').each(function(k, v){
				 $(this).text(ct[k]);
			 }); 
			 
			 $('div.content:eq(0)').html(data.contact[key].content_1.split("|").join("<br/>"));
			 
			 var c = data.contact[key].content_2.split(',');
			 $('div.content:gt(0)').each(function(k, v){
				 $(this).text(c[k]);
			 }); 
			 
			 $('input.content:last').val(c[c.length-1]);
			 
		 } else if ( p == 'reviews.php' ){
			 $('title').text(data.reviews[key].title);
			 
			 var c = data.reviews[key].content.split(',');
			 $('.content').each(function(k, v){
				 $(this).text(c[k]);
			 }); 
			 
			 $('input.content').val(c[c.length-2]);
			 $('.content:last').text(c[c.length-1]);
			 
		 }else{
			 $('title').text(data.index[key].title);
			 $('div.content-title').text(data.index[key].content_title);
			 $('div.content').text(data.index[key].content);
		 }

		 //header
		 var header = data.general[key].header.split(',');
		 $('div.header-hover a').each(function(k, v){
			 $(this).text(header[k]);
		 }); 
		 
		 //footer
		 var footer = data.general[key].footer.split(',');
		 $('.footer-item').each(function(k, v){
			 $(this).text(footer[k]);
		 });
		 
		//modals
		 var modal = data.general[key].modal.split(',');
		 $('.modal-title').each(function(k, v){
			 $(this).text(modal[k]);
		 });
		 
		 //reservation items
		 var ri = data.general[key].reservation_item.split(',');
		 $('div.reservation-item').each(function(k, v){
			 $(this).text(ri[k]); 
		 }); 
		 $('#check-availability').val(ri[ri.length-1]);

	 });

}


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


