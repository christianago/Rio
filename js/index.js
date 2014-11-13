var map = null, map2 = null;
var currentLanguage = localStorage.getItem('language');
var playSound = true;


jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +  $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +  $(window).scrollLeft()) + "px");
    return this;
}

function preventBack(){
	window.history.forward();
	if ( $('body').hasClass('modal-open') ){
		window.history.forward();
	}
}

$(window).blur(function() {
	var audio = document.getElementById("zorba");
	audio.pause();
});

$(window).focus(function() {
	if ( playSound ){
		var audio = document.getElementById("zorba");
		audio.play();
	}
});

$(document).ready(function(){
	
	//var language = window.navigator.userLanguage || window.navigator.language;
	
	var pages = ['index.php', 'accomodation.php', 'booking-info.php', 'photo-gallery.php', 'travel-services.php', 'contact.php', 'reviews.php'];
	var myURL = document.URL.split('/');
	myURL = myURL[myURL.length-1];
	myURL = myURL.replace("#", "");
	console.log(myURL);
	
	 //MAPS
	 //geolocation();
	 google.maps.event.addDomListener(window, 'load', geolocation);

	
	//preventBack();
	
	
	if ( $.inArray(myURL, pages) != -1 ){
		var key = $.inArray(myURL, pages);
		$('div.header-hover:eq("'+key+'")').addClass('active-link');
	}
	
	
	//LANGUAGES//
	if ( currentLanguage == 'undefined' || currentLanguage == null || currentLanguage == '' ){
		language('EN', myURL);
		localStorage.setItem('language', 'EN');
	} else{
		language(currentLanguage, myURL);
	}

	 $(this).on('click', 'img.flag', function(e){
		 var title = $(this).attr('title');
	     language(title, myURL);
	     localStorage.setItem('language', title);
	 });
	//<-LANGUAGES//
	 
	 
	 //AUDIO
	 $(this).on('click', '#sound', function(e){
		var src = $(this).attr('src');
		var audio = document.getElementById("zorba");
		if ( src == 'images/nosound.png' ){
			$(this).attr('src', 'images/sound.png');
			audio.play();
			playSound = true;
		} else{
			$(this).attr('src', 'images/nosound.png');
			audio.pause();
			playSound = false;
		}
	 });
	 //<-AUDIO
	
	
	//SLIDESHOW//
	$('div.slideshow')
	.cycle({
		fx: 'fade',
		pager: '#nav',
		 pagerAnchorBuilder: function(idx, slide) { 
	        return '<li><a href="#"><img src="' + slide.src + '" width="70" height="50" /></a></li>'; 
	    }
	});

	setTimeout(function(){
		$('div.slideshow-container').fadeIn('slow');
	}, 500);
	//<-SLIDESHOW//
	
	
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
	 
	 $(this).on('mouseenter', '.datepicker-switch, th.next, th.prev', function(){
		$(this).css('background', '#8B0000');
	 });
	 $('#start-date').val(getToday());
	 $('#end-date').val(getTomorrow());
	 //<-DATEPICKER//
	 
	 
	 //MODALS//
	 $(this).on('click', '.weather', function(e){ $('#weather-window').modal('show'); });
	 $(this).on('click', '.time', function(e){ $('#time-window').modal('show'); });
	 $(this).on('click', '.currency', function(e){ $('#currency-window').modal('show'); });
	 $(this).on('click', '#googleMap', function(e){ 
		 $('#map-window').modal('show'); 
		 geolocation2();
		 google.maps.event.trigger(map2, 'resize'); 
	 });
	 //<-MODALS//
	 
	 
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


	
	$(this).on('mouseenter', 'div.header-hover:not(.active-link)', function(){
		$(this).css('background', '#888888');
	}).on('mouseleave', 'div.header-hover:not(.active-link)', function(){
		$(this).css('background', '#8B0000');
	}).on('click', 'div.header-hover:not(.active-link)', function(){
		var link = $(this).find('a').attr('href');
		window.location.href = link;
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
	
	
	//AUTO SELECT DROPDOWNS
	$('select.select-adults option:eq(1)').attr('selected',true);
	$('select.select-rooms option:eq(1)').attr('selected',true);
	 
	 
     //GALLERY//
	 $(this).on('click', 'body', function(e){
		 if( $('div.full-image img').length )
		 $('div.full-image img').fadeOut();
	 });
	 
	 $(this).on('click', 'div.gallery-container img', function(e){
		 e.stopImmediatePropagation();
		 $('div.full-image img').fadeIn();
		 $('div.full-image img').attr('src', $(this).attr('src'));
		 var w = $(window).width() - 100;
		 if ( w > 1000 ){ w = 1000; }
		 $('div.full-image img').css({width:w});
		 $('div.full-image img').center();
	 });
	 //<-GALLERY//
	 

	 //CONTACT-REVIEW//
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
	 //<-CONTACT-REVIEW//
	 
	 
	 //REVIEWS//
	 $('#review-form').submit(function() {
		 $('div.review-label').each(function(i){
			 var s = $(this).find('.fa-star').length;
			 $(this).find('input').val(s);
		 });
		 //return false;
	 });
	//<-REVIEWS// 

});


function language(l, p){
	
	 $('body').hide();
	
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
			 $('div.content').text(data.accomodation[key].content);
			 
			 //content-sub-title
			 var ct = data.accomodation[key].content_sub_title.split(',');
			 $('div.content-sub-title').each(function(k, v){
				 $(this).text(ct[k]);
			 }); 
			 
			 //sub-content-1
			 ct = data.accomodation[key].sub_content_1.split('#');
			 var sc1 = '';
			 $(ct).each(function(k, v){ sc1 += '<li>'+ct[k]+'</li>'; }); 
			 $('ul.sub-content-1').html(sc1);
			 
			 //sub-content-2
			 ct = data.accomodation[key].sub_content_2.split('#');
			 var sc2 = '';
			 $(ct).each(function(k, v){ sc2 += '<li>'+ct[k]+'</li>'; }); 
			 $('ul.sub-content-2').html(sc2);
			 
			 //sub-content-3
			 ct = data.accomodation[key].sub_content_3.split('#');
			 var sc3 = '';
			 $(ct).each(function(k, v){ sc3 += '<li>'+ct[k]+'</li>'; }); 
			 $('ul.sub-content-3').html(sc3);
			 
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
			 
		 } else if ( p == 'travel-services.php' ){
			 $('title').text(data.travel_services[key].title);
			 $('div.content-title').text(data.travel_services[key].content_title);
			 $('div.content').html(data.travel_services[key].content.split("|").join("<br/><br/>"));
			 
			//content-image-title
			 var ct = data.travel_services[key].content_image_title.split(',');
			 $('div.content-image-title').each(function(k, v){
				 $(this).text(ct[k]);
			 }); 
			 
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
			 $('div.content').html(data.index[key].content.split("|").join("<br/><br/>"));
		 }

		 //header
		 var header = data.general[key].header.split(',');
		 $('div.header-hover a').each(function(k, v){
			 $(this).text(header[k]);
		 }); 
		 
		 //footer
		 var footer = data.general[key].footer.split('#');
		 $('.footer-item').each(function(k, v){
			 $(this).html(footer[k].split("|").join("<br/>"));
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
		 
		 
		 $('body').show();

	 });
	 
	 //AUDIO
	 /*document.getElementById('zorba').addEventListener('ended', function(){
	    this.currentTime = 0;
	}, false);*/

}


function geolocation2(position){
	
	var myLatlng = new google.maps.LatLng(37.985298,23.719681);
	
    var mapOptions = {
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoom: 11
    };
    
	if ( $('#googleMap-2').length ){
    	map2 = new google.maps.Map(document.getElementById("googleMap-2"), mapOptions);
    }
	
	markerInfo2(map2, createMarker(map2, myLatlng));
	
	var airportLatLng = new google.maps.LatLng(37.935647,23.948416);
	createMarker(map2, airportLatLng);
	var portLatLng = new google.maps.LatLng(37.940555,23.6333333);
	createMarker(map2, portLatLng);
	var trainLatLng = new google.maps.LatLng(37.991851,23.721024);
	createMarker(map2, trainLatLng);
	
}


function geolocation(position){
	
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
    
    markerInfo(map, createMarker(map, myLatlng));

}


function createMarker(map, Latlng){
	var marker = new google.maps.Marker({
		map: map,
        position: Latlng,
    });
	return marker;
}


function markerInfo(map, marker){
   var infowindow = new google.maps.InfoWindow({ content: '<div id="map-1-info">Hotel Rio Athens</div>' });
   infowindow.open(map, marker);
}


function markerInfo2(map, marker){
   var info = '<div id="map-1-info"><img id="map-image" src="images/map-image.jpg" /></div>';
   info += '<div id="map-2-info"><b>Hotel Rio Athens</b><br/>Οδυσσέως 13 -17,<br/>Πλατεία Καραισκάκη</div>';
   var infowindow = new google.maps.InfoWindow({ content: info });
   infowindow.open(map2, marker);
}


function getToday(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	if(dd<10) {
	    dd='0'+dd;
	} 
	today = dd+'/'+mm+'/'+yyyy;
	if(mm<10) {
	    mm='0'+mm;
	} 
	return today;
}


function getTomorrow(){
	var today = new Date();
	var dd = today.getDate()+1;
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	if(dd<10) {
	    dd='0'+dd;
	} 
	today = dd+'/'+mm+'/'+yyyy;
	if(mm<10) {
	    mm='0'+mm;
	} 
	return today;
}

