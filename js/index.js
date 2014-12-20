var map = null, map2 = null, map3 = null;
var currentLanguage = localStorage.getItem('language');
var reviewLock = [false, false, false, false, false];
var startDate = '', endDate = '';


jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +  $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +  $(window).scrollLeft()) + "px");
    return this;
}


$(window).blur(function() {
	var audio = document.getElementById("myaudio");
	var audioCurrentTime = audio.currentTime;
	localStorage.setItem('audioCurrentTime', audioCurrentTime);
	if ( audio ) audio.pause();
});


$(window).focus(function() {
	var audio = document.getElementById("myaudio");
	var canPlaySound = localStorage.getItem('canPlaySound');
	var audioCurrentTime = audio.currentTime;
	if ( (canPlaySound == '1' || canPlaySound == null) && audio ) {
		audio.currentTime = parseFloat(audioCurrentTime);
		audio.play();
	}
});


$(window).resize(function(){
    google.maps.event.trigger(map, 'resize');
    map.setZoom(map.getZoom());
});

//MAPS
$(window).load(function(){
	 var myURL = document.URL.split('/');
	 myURL = myURL[myURL.length-1];
	 myURL = myURL.replace("#", "");
	 if ( myURL != 'map.php' ){
		 try{  
			 geolocation(1, 17); 
			 google.maps.event.trigger(map, 'resize');
		 } catch(e){}
	 } else{ 
		 try{
			 geolocation(3, 17);
			 google.maps.event.trigger(map, 'resize');
		 } catch(e){}
	 }
	 
});
//<-MAPS


$(document).ready(function(){

	var pages = ['index.php', 'accomodation.php', 'booking-info.php', 'photo-gallery.php', 'travel-services.php', 'facilities.php', 'contact.php', 'reviews.php', 'map.php'];
	var myURL = document.URL.split('/');
	myURL = myURL[myURL.length-1];
	myURL = myURL.replace("#", "");
	console.log(myURL);
	
	
	//MIDDLE STAR
	$('img.gold-star:eq(1)').css({top:0});
	//<-MIDDLE STAR
	
	
	//BACKTOTOP
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 100 ){
			$('#backtotop').fadeIn();
		} else{
			$('#backtotop').fadeOut();
		}
	});
	 $(this).on('click', '#backtotop', function(e){
		 $('html, body').animate({scrollTop : 0}, 500);
	 });
	//<-BACKTOTOP
	
	 
	 if ( myURL == 'reviews.php' ){
		 $('#lezanta, .stand').hide();
		 $('#lezanta-2').show();
	 } else if ( myURL == 'map.php' ){
		 $('div.book-slide, div.footer-flash, div.footer-social, div.footer-2, div.divider:last').hide();
	 }
	
	
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
	 var canPlaySound = localStorage.getItem('canPlaySound');
	 var audio = document.getElementById("myaudio");
	 
	 if ( audio ) {
		 if ( canPlaySound == '1' || canPlaySound == null ){
			 var audioCurrentTime = localStorage.getItem('audioCurrentTime');
			 audio.currentTime = parseFloat(audioCurrentTime);
			 audio.play();
		 } else{
			 $('#sound').removeClass('fa-volume-up').addClass('fa-volume-off');
		 }
	 } 
	 
	 $(this).on('click', '#sound', function(e){
		if ( $(this).hasClass('fa-volume-up') ){
			$(this).removeClass('fa-volume-up').addClass('fa-volume-off');
			localStorage.setItem('canPlaySound', '0');
			if ( audio ) {
				var audioCurrentTime = audio.currentTime;
				localStorage.setItem('audioCurrentTime', audioCurrentTime);
				audio.pause();
			}
		} else{
			$(this).removeClass('fa-volume-off').addClass('fa-volume-up');
			localStorage.setItem('canPlaySound', '1');
			if ( audio ) audio.play();
		}
	 });
	 //<-AUDIO
	
	
	//SLIDESHOW//
	$('div.slideshow')
	.cycle({
		fx: 'fade',
		pager: '#nav',
		pagerAnchorBuilder: function(idx, slide){ 
			if ( myURL != 'reviews.php' ){
				return '<li><a href="#"><img src="' + slide.src + '" width="70" height="50" /></a></li>'; 
			}
	    }
	});

	setTimeout(function(){
		$('div.slideshow-container').fadeIn('slow');
	}, 500);
	//<-SLIDESHOW//
	
	
	//DATEPICKER//
	$('input.datepicker').datepicker({
		autoclose: true,
		startDate: '+1d',
		orientation: 'top',
		todayHighlight: true
	});
	
	
	$(this).on('focus', 'input', function(){
		 if ( $('.datepicker').length ){
			 $('input.datepicker').datepicker('hide');
		 }
	 });
	 
	 $(this).on('click', '.fa-calendar', function(){
		$(this).closest('div.book-field').find('input.datepicker:first').datepicker('show');
		if ( $('input.datepicker:first').val() != '' ){
			startDate = $('input.datepicker:first').val();
		}
		if ( $('input.datepicker:last').val() != '' ){
			endDate = $('input.datepicker:last').val();
		}
	 });
	 
	 $(this).on('click', 'div.datepicker td.day', function(){
		startDate = $('input.datepicker:first').val();
		endDate = $('input.datepicker:last').val();
	 });
	 
	 
	 $(this).on('change', 'input.datepicker:first', function(){
		 $('#end-date').datepicker('remove');
		 var startDay = Date.parse($('#start-date').val());
		 var sd = '+1d';
		 if ( startDay != null ){
			 sd = startDay.add(1).days();
		 }
		 $('#end-date').datepicker({
			 autoclose: true,
			 startDate: sd,
			 orientation: 'top',
			 todayHighlight: true
		 });
	 });
	 
	 
	 $(this).on('click', 'body', function(){
		 if ( $('input.datepicker:first').val() == '' ){
			 $('input.datepicker:first').val(startDate);
		 }
		 if ( $('input.datepicker:last').val() == '' ){
			 $('input.datepicker:last').val(endDate);
		 }
	 });

	
	 $(this).on('click', '.dropdown-menu *', function(e){ e.stopPropagation(); });
	 
	 $('#start-date').val(getDate(0));
	 $('#end-date').val(getDate(1));
	 //<-DATEPICKER//
	 
	 
	 //MODALS//
	 $(this).on('click', '.weather', function(e){ $('#weather-window').modal('show'); });
	 $(this).on('click', '.time', function(e){ $('#time-window').modal('show'); });
	 $(this).on('click', '.currency', function(e){ $('#currency-window').modal('show'); });
	 $(this).on('click', '#map-directions', function(e){ 
		 $('#map-window').modal('show'); 
		 try{ geolocation(2, 14);
		 } catch (e) {}
		 google.maps.event.trigger(map2, 'resize'); 
	 });
	 //<-MODALS//
	 
	 
	 //USEFUL LINKS
	 /*$(this).on('click', '.useful-links-trigger', function(e){
		 $('ul.useful-links').slideToggle();
	 });*/
	//<-USEFUL LINKS
	 
	 
	 //BOOKMARK
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
	//<-BOOKMARK

	
	//HEADER MENU
	$(this).on('mouseenter', 'div.header-hover:not(.active-link)', function(){
		$(this).addClass('active-link-hover');
	}).on('mouseleave', 'div.header-hover', function(){
		$(this).removeClass('active-link-hover');
	}).on('click', 'div.header-hover:not(.active-link)', function(){
		var link = $(this).find('a').attr('href');
		window.location.href = link;
	});
	//<-HEADER MENU
	
	
	 //FOOTER MENU
	 $(this).on('mouseenter', 'span.footer-elem, span.footer-elem a', function(e){
		 $('span.active-footer-elem').removeClass('active-footer-elem');
		 $(this).addClass('active-footer-elem');
	 }).on('mouseleave', 'span.footer-elem, span.footer-elem a', function(e){
		 $('span.active-footer-elem').removeClass('active-footer-elem');
	 });
	//<-FOOTER MENU

	 
	 //AVAILABILITY BUTTON
	 $(this).on('mouseenter', '#check-availability', function(e){
		 $(this).addClass('text-hover');
	 }).on('mouseleave', '#check-availability', function(e){
		 $(this).removeClass('text-hover');
	 });
	 //<-AVAILABILITY BUTTON
	 
	 
	 //REVIEW STARS
	 $(this).on('mouseover', '.review-label .fa-star-o, .review-label .fa-star', function(e){
		 var index = parseInt($(this).closest('div.review-label').attr('id').split('r')[1]);
		 if ( reviewLock[index] == false ){
			 $(this).nextAll().removeClass('fa-star').addClass('fa-star-o');
			 $(this).prevAll().andSelf().removeClass('fa-star-o').addClass('fa-star');
		 } 
	 });
	 
	 $(this).on('click', '.review-label .fa-star-o, .review-label .fa-star', function(e){
		 var index = parseInt($(this).closest('div.review-label').attr('id').split('r')[1]);
		 reviewLock[index] = !reviewLock[index];
		 $(this).nextAll().removeClass('fa-star').addClass('fa-star-o');
		 $(this).prevAll().andSelf().removeClass('fa-star-o').addClass('fa-star');
	 });
	 //<-REVIEW STARS
	
	
	//AUTO SELECT DROPDOWNS
	$('select.select-adults option:eq(1)').attr('selected',true);
	$('select.select-rooms option:eq(0)').attr('selected',true);
	//<-AUTO SELECT DROPDOWNS
	 
	
     //GALLERY//
	 $(this).on('click', 'body', function(e){
		 if( $('div.full-image img').length )
		 $('div.full-image img').fadeOut();
		 
		 if( $('div.full-image-travel-services img').length )
		 $('div.full-image-travel-services img').fadeOut();
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
	 
	 
     //TRAVEL SERVICES//
	 $(this).on('click', 'div.travel-images img', function(e){
		 e.stopImmediatePropagation();
		 $('div.full-image-travel-services img').fadeIn();
		 $('div.full-image-travel-services img').attr('src', $(this).attr('src'));
		 var w = $(window).width() - 100;
		 if ( w > 1000 ){ w = 1000; }
		 $('div.full-image-travel-services img').css({width:w});
		 $('div.full-image-travel-services img').center();
	 });
	//<-TRAVEL SERVICES//
	 

	 //CONTACT-REVIEW//
	 if ( $('#message').text() == '3' || $('#message').text() == '2' || $('#message').text() == '1' || $('#message').text() == '0' ){
		 
		 var type = '';
		 var message = $('#message').html();
		 
		 if ( message == '3' ){ type = '.captcha-message'; } 
		 else if ( message == '2' ){ type = '.review-message';} 
		 else if ( message == '1' ){ type = '.email-message'; } 
		 else { type = '.fail-message'; }
		 
		 if ( $('div.system-message '+type+'[title="'+currentLanguage+'"]').length ){
			  $('div.system-message '+type+'[title="'+currentLanguage+'"]').show();
		 } else{
			 $('div.system-message '+type+'[title=EN]').show();
		 }
		 
		 $("html, body").animate({ scrollTop: $(document).height() }, "slow");

		
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

	 var langs = ['EL', 'EN', 'FR', 'SP', 'IT', 'DE', 'RU', 'CN', 'BR', 'PL', 'SE'];
	 var key = 1;
	 for(var i = 0; i < langs.length; i++){
		 if ( l == langs[i] ){
			 key = i;
			 break;
		 }
	 }
	 
	 //console.log(key);
	 
	 //key = 0;

	 $.getJSON('languages.json', function(data){
		 
		 if ( p == 'accomodation.php' ){ //accomodation
			 if ( data.accomodation[key] == undefined ){ key = 1; }
				 
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
			 
		 } else if ( p == 'booking-info.php' ){ //booking-info
			 if ( data.booking_info[key] == undefined ){ key = 1; }
			 
			 $('title').text(data.booking_info[key].title);
			 
			 //content-title
			 var ct = data.booking_info[key].content_title.split(',');
			 $('div.content-title').each(function(k, v){
				 if ( k == 0 )
				 $(this).html(ct[k]+",");
				 else $(this).html(ct[k]);
			 }); 
			 
			 //content
			 $('.content:eq(0)').html(data.booking_info[key].content_0.split("|").join("<br/>").replace('(', '<b>').replace(')', '</b>'));
			 $('.content:eq(1)').html(data.booking_info[key].content_1.split("|").join("<br/>"));
			 $('.content:eq(2)').html(data.booking_info[key].content_2.split("|").join("<br/>"));
			 $('.content:eq(3)').html(data.booking_info[key].content_3.split("|").join("<br/>"));
			 $('.content:eq(5)').html(data.booking_info[key].content_5.split("|").join("<br/>"));
			 $('.content:eq(6)').html(data.booking_info[key].content_6.split("|").join("<br/>").replace('(', '<b>').replace(')', '</b>'));
			 $('.content:eq(7)').append(data.booking_info[key].content_7.split("|").join("<br/>"));
			 $('.content:eq(8)').html(data.booking_info[key].content_8.split("|").join("<br/>"));

			 var extra_services = '';
			 var temp = data.booking_info[key].content_4.split("|");
			 $(temp).each(function(k, v){
				 extra_services += '<li>'+v+'</li>';
			 });
			 
			 $('.content:eq(4)').html(extra_services);
			 
		 } else if ( p == 'photo-gallery.php' ){ //photo-gallery
			 if ( data.photo_gallery[key] == undefined ){ key = 1; }
			 
			 $('title').text(data.photo_gallery[key].title);
			 $('div.content-title').text(data.photo_gallery[key].content_title);
			 
		 } else if ( p == 'travel-services.php' ){ //travel-services
			 if ( data.travel_services[key] == undefined ){ key = 1; }
			 
			 $('title').text(data.travel_services[key].title);
			 $('div.content-title').text(data.travel_services[key].content_title);
			 $('div.content').html(data.travel_services[key].content.split("|").join("<br/><br/>"));
			 
			//content-image-title
			 var ct = data.travel_services[key].content_image_title.split(',');
			 $('div.content-image-title').each(function(k, v){
				 $(this).text(ct[k]);
			 }); 
			 
		 }  else if ( p == 'contact.php' ){ //contact
			 if ( data.contact[key] == undefined ){ key = 1; }
			 
			 $('title').text(data.contact[key].title);
			 
			 var ct = data.contact[key].content_title.split(',');
			 $('div.content-title').each(function(k, v){
				 $(this).text(ct[k]);
			 }); 
			 
			 $('div.content:eq(0)').html(data.contact[key].content_1.split("|").join("<br/>"));
			 
			 var c = data.contact[key].content_2.split(',');
			 $('.content:gt(0)').each(function(k, v){
				 $(this).text(c[k]);
			 }); 
			 
			 //$('input.content:last').val(c[c.length-1]);
			 
		 } else if ( p == 'reviews.php' ){ //reviews
			 if ( data.reviews[key] == undefined ){ key = 1; }
			 
			 $('title').text(data.reviews[key].title);
			 
			 var c = data.reviews[key].content.split(',');
			 $('.content').each(function(k, v){
				 $(this).text(c[k]);
			 }); 
			 
			 $('input.content').val(c[c.length-2]);
			 $('.content:last').text(c[c.length-1]);
			 
		 } else if ( p == 'facilities.php' ){ //facilities
			 if ( data.facilities[key] == undefined ){ key = 1; }
				 
			 $('title').text(data.facilities[key].title);
			 $('div.content-title').text(data.facilities[key].content_title);
			 
			 var ct = data.facilities[key].content_title.split(',');
			 
			 $('div.content-title:first').text(ct[0]+",");
			 $('div.content-sub-title').each(function(k){
				 $(this).text(ct[k+1]);
			 });
			 
			 ct = data.facilities[key].content.split('#');
			 $('div.content').each(function(k){
				 $(this).text(ct[k]);
			 });
			 
			 var li = data.facilities[key].content_list.split(',');
			 var str = '';
			 $(li).each(function(k, v){
				 str += '<li>'+v+'</li>';
			 });

			 $('ul.content_list').html(str);
			 
			
		 } else{ //index
			 if ( data.index[key] == undefined ){ key = 1; }
			 
			 $('title').text(data.index[key].title);
			 $('div.content-title').text(data.index[key].content_title);
			 $('div.content').html(data.index[key].content.split("|").join("<br/><br/>"));
			 
		 }

		 
		 if ( data.general[key] == undefined ){ key = 1; }
		 
		 //header
		 var header = data.general[key].header.split(',');
		 $('div.header-hover a').each(function(k, v){
			 $(this).text(header[k]);
		 }); 
		 
		 //footer
		 var footer = data.general[key].footer.split('#');
		 $('.footer-item').each(function(k, v){
			 $(this).html(footer[k]);
		 });
		 
		 //modals
		 var modal = data.general[key].modal.split(',');
		 $('.modal-title').each(function(k, v){
			 $(this).text(modal[k]);
		 });
		 
		 //modal-map-title
		 var m = data.general[key].modal_map_title.split(',');
		 $('#map-directions').text(m[0]);
		 $('.modal-map-title').each(function(k, v){
			 $(this).text(m[k+1]);
		 });
		 
		 //modal-map-content
		 m = data.general[key].modal_map_content.split('#');
		 $('.modal-map-content').each(function(k, v){
			 //if ( k == 1 ) return false;
			 var mk = m[k].split("|").join("<br/><br/>");
			 $(this).html('<li>'+mk+'</li>');
		 });
		 
		 //contact-details
		 var cd = data.general[key].contact_details.split('#');
		 $('.cd').each(function(k, v){
			 $(this).text(cd[k]);
		 });

		 //reservation items
		 var ri = data.general[key].reservation_item.split(',');
		 $('div.reservation-item').each(function(k, v){
			 $(this).text(ri[k]); 
		 }); 
		 $('#check-availability').val(ri[ri.length-1]);
		 
		 
		 $('body').show();

	 });

}


function geolocation(type, zoomLevel){
	
	var myLatlng = new google.maps.LatLng(37.985298,23.719681);
	
    var mapOptions = {
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoom: zoomLevel
    };
    
    if ( type == 1 && $('#googleMap').length ){
    	map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
    }
    
    if ( type == 2 && $('#googleMap-2').length ){
    	map2 = new google.maps.Map(document.getElementById("googleMap-2"), mapOptions);
    } 
    if ( type == 3 && $('#googleMap-3').length ){
    	map3 = new google.maps.Map(document.getElementById("googleMap-3"), mapOptions);
    }
    
    if ( type == 2){
    	var marker2 = createMarker(map2, myLatlng);
    	markerInfo(2, map2, marker2);
    	
    	google.maps.event.addListener(marker2, 'click', function() {
    		markerInfo(2, map2, marker2);
    	});
    	
    } else if ( type == 3 ){
    	var marker3 = createMarker(map3, myLatlng);
    	markerInfo(2, map3, marker3);
    	
    	google.maps.event.addListener(marker3, 'click', function() {
    		markerInfo(2, map3, marker3);
    	});
    } else {
    	var marker = createMarker(map, myLatlng);
    	markerInfo(1, map, marker);
    }

}


function createMarker(mymap, Latlng){
	var marker = new google.maps.Marker({
		map: mymap,
		title:'Hotel Rio Athens',
        position: Latlng,
    });
	return marker;
}


function markerInfo(type, mymap, marker){
   var info = '';
   if ( type == 2 ){
	   //var address = $('span.modal-map-title.address:first').html() + ",<br/>" + $('span.modal-map-title.address:last').html();
	   var address = '13 - 17 Odysseos street, <br/> Karaiskaki sq.';
	   info = '<div id="map-2-info"><img id="map-image" src="images/map-image.jpg" /></div>';
	   info += '<div id="map-3-info"><b>Hotel Rio Athens</b><br/>'+address+'</div>';
   } else{
	   info = '<div id="map-1-info">Hotel Rio Athens</div>';
   }
   var infowindow = new google.maps.InfoWindow({ content: info });
   infowindow.open(mymap, marker);
}


function getDate(plus){
	var today = new Date();
	var dd = today.getDate() + plus;
	var mm = today.getMonth() + 1;
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

