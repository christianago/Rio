var map = null, map2 = null, map3 = null;
var currentLanguage = localStorage.getItem('language');
var reviewLock = [false, false, false, false, false];
var startDate = '', endDate = '';
var happyHourTimer = null;


jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +  $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +  $(window).scrollLeft()) + "px");
    return this;
}

jQuery.fn.centerHappyClose = function () {
	this.css('top', ($('#happy-hour').position().top-10));
    this.css('left', ($('#happy-hour').position().left+270));
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



document.addEventListener('mousemove', function(e){ 
	if ( $('#happy-hour').length ){
		$('#happy-hour').center();
		$('.close-happy-hour').centerHappyClose();
	}
}, false);



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
	 
	 if ( myURL == 'bar-restaurant.php' ){
		 $('#happy-hour, .close-happy-hour').fadeIn(500, function(){
			 happyHourTimer = setTimeout(function(){ $('#happy-hour, .close-happy-hour').effect('blind', null, 2000); }, 10000);
		 });
		 
	 }
	 
});


$(document).ready(function(){

	//$("img").lazyload();
	
	
	//FORM COSMORES
	$("#frmSearchCosmoresBooking").cosmoresbooking({
		"hotelUrl":"https://riohotel.cosmores.com","numberOfMonths":1,"siteId":1095,"firstDay":1,"dateFormat":"dd-mm-yy","showToday":true,"checkInDateFailureMessage":"Check-in date field is required","checkInDateName":"check_in_date_cosmores","checkOutDateFailureMessage":"Check-out date field is required","checkOutDateName":"check_out_date_cosmores","checkOutMinDate":1,"adultsName":"adults_cosmores","roomsName":"rooms_cosmores","childrenName":"children_cosmores","buttonName":"button_cosmores","childrenCancelText":"Cancel","childrenOKText":"OK" ,"childrenText":"Child","childrenHeaderText":"Age(s) of children.","openNewWindow":0,"enableDays":[]
	});	
	
	
	$(this).on('mouseenter mousedown click', '#gotoCosmores', function(e){
		var temp = $('input.datepicker:first').val().split("/");
		var d1 = temp[2] +'-'+ temp[1] +'-'+ temp[0];
		temp = $('input.datepicker:last').val().split("/");
		var d2 = temp[2] +'-'+ temp[1] +'-'+ temp[0];
		var val = 'https://riohotel.cosmores.com/?SITE=1095&CHECK_IN_DATE='+d1+'&CHECK_OUT_DATE='+d2+'&lan=' + currentLanguage.toLowerCase();
		$('#gotoCosmores').attr('href', val);
		//console.log(d1, d2);
	});
	//<-FORM COSMORES
	
	
	var pages = ['index.php', 'accomodation.php', 'booking-info.php', 'photo-gallery.php', 'bar-restaurant.php', 'travel-services.php', 'contact.php', 'reviews.php', 'map.php', 'policy.php'];
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
	 $(this).on('click', '#backtotop', function(){
		 $('html, body').animate({scrollTop : 0}, 500);
	 });
	//<-BACKTOTOP
	 
	 
	 //HAPPY HOUR
	 $(this).on('mouseenter', '#happy-hour', function(e){
		 clearTimeout(happyHourTimer);
	 }).on('mouseleave', '#happy-hour', function(e){
		 happyHourTimer = setTimeout(function(){ $('#happy-hour').effect('blind', null, 2000); }, 10000);
	 });
	 $(this).on('click', '.close-happy-hour', function(e){
		 clearTimeout(happyHourTimer);
		 $(this).hide();
		 $('#happy-hour').hide();
	 })
	 //<-HAPPY HOUR
	
	 
	 if ( myURL == 'reviews.php' ){
		 $('#lezanta, .stand, #nav-container').hide();
		 $('#lezanta-2').show();
	 } else if ( myURL == 'map.php' ){
		 $('div.book-slide, div.footer-flash, div.footer-social, div.footer-2, div.divider:last').hide();
	 } else if ( myURL == 'photo-gallery.php' ){
		 $('#nav-container, .gallery-container img:first, div.last-minute-container').hide();
	 }
	 
	 if ( myURL != 'bar-restaurant.php' ){
		 $('#happy-hour').hide();
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
			 if ( audio.currentTime ) {
				 audio.currentTime = parseFloat(audioCurrentTime);
			 }
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
	$('.cycle-slideshow').cycle({fx: 'fade'});
	//<-SLIDESHOW//

	
	//DATEPICKER//
	$('input.datepicker').datepicker({
		autoclose: true,
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
		 $('#check_out_date_cosmores').datepicker('remove');
		 var startDay = Date.parse($('#check_in_date_cosmores').val());
		 var sd = '+1d';
		 if ( startDay != null ){
			 sd = startDay.add(1).days();
		 }
		 $('#check_out_date_cosmores').datepicker({
			 autoclose: true,
			 startDate: sd,
			 orientation: 'top',
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
	 
	 $('#check_in_date_cosmores').val(getDate(0));
	 $('#check_out_date_cosmores').val(getDate(1));
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
	 //key = 0;
	 
	 //ALTER LINKS ON LANGUAGE SWITCH
	 if ( key == 0 ){ //GREEK
		 
		$('a.footer-item[href*=aia]').attr('href', $('a.footer-item[href*=aia]').attr('href').replace('/en/', '/el/'));
		$('a.footer-item[href*=xo]').attr('href', $('a.footer-item[href*=xo]').attr('href').replace('greece-ferry-routes', 'dromologia-ploion'));
		$('a.footer-item[href*=nbg]').attr('href', $('a.footer-item[href*=nbg]').attr('href').replace('/en/', '/el/'));
		$('a.footer-item[href*=theacropolismuseum]').attr('href', $('a.footer-item[href*=theacropolismuseum]').attr('href').replace('en', 'el'));
		$('a.footer-item[href*=cycladic]').attr('href', $('a.footer-item[href*=cycladic]').attr('href').replace('clang=1', 'clang=0'));
		$('a.footer-item[href*=nma]').attr('href', $('a.footer-item[href*=nma]').attr('href').replace('index_en.htm', 'index.htm'));
		$('a.footer-item[href*=wiki]').attr('href', $('a.footer-item[href*=wiki]').attr('href').replace('http://en.wikipedia.org/wiki/Arch_of_Hadrian_(Athens)', 'http://el.wikipedia.org/wiki/%CE%A0%CF%8D%CE%BB%CE%B7_%CF%84%CE%BF%CF%85_%CE%91%CE%B4%CF%81%CE%B9%CE%B1%CE%BD%CE%BF%CF%8D'));
		$('a.footer-item[href*=gnhm]').attr('href', $('a.footer-item[href*=gnhm]').attr('href').replace('/en', ''));
		
		$('a.footer-item.national-theater').attr('href', 'http://n-t.gr/');
		$('a.footer-item[href*=visitgreece]').attr('href', 'http://www.visitgreece.gr/el');
	
		
		 $("a.footer-item").each(function(k, v){
			if ( $(this).attr('href').indexOf('gnhm') == -1 && $(this).attr('href').indexOf('n-t.gr') == -1 )
			$(this).attr('href', $(this).attr('href').replace('/en/', '/gr/'));
		 });
		 
		 
		 $('a.footer-item[href*=athensauthenticmarathon]').attr('href', $('a.footer-item[href*=athensauthenticmarathon]').attr('href').replace('=en', '=gr'));
		 $('a.footer-item[href*=panathenaicstadium]').attr('href', $('a.footer-item[href*=panathenaicstadium]').attr('href').replace('en-US', 'el-GR'));
		 $('a.footer-item[href*=namuseum]').attr('href', $('a.footer-item[href*=namuseum]').attr('href').replace('index-en', 'index'));
		 $('a.footer-item[href*=benaki]').attr('href', $('a.footer-item[href*=benaki]').attr('href').replace('=en', '=gr'));
		
		 
		 $("a.footer-item[href*=odysseus]").each(function(k, v){
			$(this).attr('href', $(this).attr('href').replace('/eh', '/gh'));
		 });
		 
	 } else{
		 
		 $('a.footer-item[href*=aia]').attr('href', $('a.footer-item[href*=aia]').attr('href').replace('/el/', '/en/'));
		 $('a.footer-item[href*=xo]').attr('href', $('a.footer-item[href*=xo]').attr('href').replace('dromologia-ploion', 'greece-ferry-routes'));
		 $('a.footer-item[href*=nbg]').attr('href', $('a.footer-item[href*=nbg]').attr('href').replace('/el/', '/en/'));
		 $('a.footer-item[href*=athensauthenticmarathon]').attr('href', $('a.footer-item[href*=athensauthenticmarathon]').attr('href').replace('=gr', '=en'));
		 $('a.footer-item[href*=panathenaicstadium]').attr('href', $('a.footer-item[href*=panathenaicstadium]').attr('href').replace('el-GR', 'en-US'));
		 $('a.footer-item[href*=theacropolismuseum]').attr('href', $('a.footer-item[href*=theacropolismuseum]').attr('href').replace('el', 'en'));
		 $('a.footer-item[href*=namuseum]').attr('href', $('a.footer-item[href*=namuseum]').attr('href').replace('index', 'index-en'));
		 $('a.footer-item[href*=cycladic]').attr('href', $('a.footer-item[href*=cycladic]').attr('href').replace('clang=0', 'clang=1'));
		 $('a.footer-item[href*=benaki]').attr('href', $('a.footer-item[href*=benaki]').attr('href').replace('=gr', '=en'));
		 $('a.footer-item[href*=gnhm]').attr('href', $('a.footer-item[href*=gnhm]').attr('href').replace('gnhm.gr', 'gnhm.gr/en'));
		 $('a.footer-item[href*=nma]').attr('href', $('a.footer-item[href*=nma]').attr('href').replace('index.htm', 'index_en.htm'));
		 $('a.footer-item[href*=wiki]').attr('href', $('a.footer-item[href*=wiki]').attr('href').replace('http://el.wikipedia.org/wiki/%CE%A0%CF%8D%CE%BB%CE%B7_%CF%84%CE%BF%CF%85_%CE%91%CE%B4%CF%81%CE%B9%CE%B1%CE%BD%CE%BF%CF%8D', 'http://en.wikipedia.org/wiki/Arch_of_Hadrian_(Athens)'));
		 
		 $('a.footer-item[href*=visitgreece]').attr('href', 'http://www.visitgreece.gr/en');
		 $('a.footer-item.national-theater').attr('href', 'http://n-t.gr/en');

		 
		 $("a.footer-item").each(function(k, v){
			if ( $(this).attr('href').indexOf('gnhm') == -1 && $(this).attr('href').indexOf('n-t.gr') == -1 )
			$(this).attr('href', $(this).attr('href').replace('/gr/', '/en/'));
		 });
		 
		 
		 $("a.footer-item[href*=odysseus]").each(function(k, v){
			$(this).attr('href', $(this).attr('href').replace('/gh', '/eh'));
		 });
		 
	 }
	 

	 console.info('KEY '+key);
	 
	 $.getJSON('languages.json', function(data){
		 
		 if ( p == 'accomodation.php' ){ //accomodation
			 //if ( data.accomodation[key] == undefined ){ key = 1; }
				 
			 var li = data.accomodation[key].content_list.split(',');
			 var list = '', list2 = '';
			 var divide = 10;
			 
			 if ( key == 0 ){ divide = 12; }
			 
			 $(li).each(function(k, v){
				 if ( k < divide ){
					 list += '<li>'+v+'</li>';
				 } else{
					 list2 += '<li>'+v+'</li>';
				 }
			 });

			 $('ul.content_list:first').html(list);
			 $('ul.content_list:last').html(list2);
			 
			 $('title').text(data.accomodation[key].title);
			 $('div.content-title').text(data.accomodation[key].content_title);
			 $('div.content').html(data.accomodation[key].content.replace(/\s/g,' '));
			 
			 //content-sub-title
			 var ct = data.accomodation[key].content_sub_title.split(',');
			 $('div.content-sub-title').each(function(k, v){
				 $(this).html(ct[k]);
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
			 
			 
			 $('ul.sub-content-2 li').each(function(){
				if ( !$(this).text().trim().length ){
					 $(this).css('visibility', 'hidden');
				 }
			 });
			 
			 
		 } else if ( p == 'booking-info.php' ){ //booking-info
			 //if ( data.booking_info[key] == undefined ){ key = 1; }
			 
			 $('title').text(data.booking_info[key].title);
			 
			 //content-title
			 var ct = data.booking_info[key].content_title.split(',');
			 $('div.content-title').each(function(k){
				 if ( k == 0 )
				 $(this).html(ct[k]+",");
				 else $(this).html(ct[k]);
			 }); 
			 
			 //content
			 $('.content:eq(0)').html(data.booking_info[key].content_0.split("|").join("<br/>").replace('(', '<b>').replace(')', '</b>'));
			 $('.content:eq(1)').html(data.booking_info[key].content_1.split("|").join("<br/>"));
			 $('.content:eq(2)').html(data.booking_info[key].content_2.split("|").join("<br/>"));
			 $('.content:eq(3)').html(data.booking_info[key].content_3.split("|").join("<br/>"));

			 var extra_services = '';
			 var temp = data.booking_info[key].content_4.split("|");
			 $(temp).each(function(k, v){
				 extra_services += '<li>'+v+'</li>';
			 });
			 
			 $('.content:eq(4)').html(extra_services);
			 
		 } else if ( p == 'photo-gallery.php' ){ //photo-gallery
			 //if ( data.photo_gallery[key] == undefined ){ key = 1; }
			 
			 $('title').text(data.photo_gallery[key].title);
			 $('div.content-title').text(data.photo_gallery[key].content_title);
			 
		 } else if ( p == 'travel-services.php' ){ //travel-services
			 //if ( data.travel_services[key] == undefined ){ key = 1; }
			 
			 $('title').text(data.travel_services[key].title);
			 $('div.content-title').text(data.travel_services[key].content_title);
			 $('div.content').html(data.travel_services[key].content.split("|").join("<br/><br/>").replace(/\s/g,' '));
			 
			//content-image-title
			 var ct = data.travel_services[key].content_image_title.split(',');
			 $('div.content-image-title').each(function(k, v){
				 $(this).text(ct[k]);
			 }); 
			 
		 } else if ( p == 'policy.php' ){ //policy
			 //if ( data.policy[key] == undefined ){ key = 1; }
			 
			 $('title').text(data.policy[key].title);
			 
			 var ct = data.policy[key].content_title.split(',');
			 $('div.content-title').each(function(k){
				$(this).text(ct[k]);
			 });
			 
			 $('div.content:eq(0)').html(data.policy[key].content_1.split("|").join("<br/><br/>"));
			 $('div.content:eq(1)').html(data.policy[key].content_2.split("|").join("<br/><br/>").replace('(', '<b>').replace(')', '</b>'));
			 $('div.content:eq(2)').html(data.policy[key].content_3.split("|").join("<br/><br/>"));
			 $('div.content:eq(3)').html(data.policy[key].content_4.split("|").join("<br/><br/>"));
			 
		 } else if ( p == 'contact.php' ){ //contact
			 //if ( data.contact[key] == undefined ){ key = 1; }
			 
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
			 
			 $('input.content:last').val(c[c.length-2]);
			 
			 //$('input.content:last').val(c[c.length-1]);
			 
		 } else if ( p == 'reviews.php' ){ //reviews
			 //if ( data.reviews[key] == undefined ){ key = 1; }
			 
			 $('title').text(data.reviews[key].title);
			 
			 var c = data.reviews[key].content.split(',');
			 $('.content').each(function(k, v){
				 $(this).text(c[k]);
			 }); 
			 
			 $('input.content').val(c[c.length-2]);
			 $('.content:last').text(c[c.length-1]);
			 
		 } else if ( p == 'bar-restaurant.php' ){ //bar-restaurant
			 //if ( data.facilities[key] == undefined ){ key = 1; }
				 
			 $('title').text(data.facilities[key].title);
			 $('div.content-title').text(data.facilities[key].content_title);
			 
			 var ct = data.facilities[key].content_title.split(',');
			 
			 $('div.content-title:first').text(ct[0]+",");
			 $('div.content-sub-title').each(function(k){
				 $(this).html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+ct[k+1]);
			 });
			 
			 ct = data.facilities[key].content.split('#');
			 $('div.content').each(function(k){
				 //console.info(ct[k]);
				 $(this).html(ct[k].replace(/\s/g,' ').split("|").join("<br/>"));
			 });
			 
			
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
		 $('#they-recommend-us').text(m[0]);
		 $('#map-directions').text(m[1]);
		 $('.modal-map-title').each(function(k){
			 $(this).text(m[k+2]);
		 });
		 
		 //modal-map-content
		 var m = data.general[key].modal_map_content.split('#');
		 $('.modal-map-content').each(function(k){
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
		 $('div.reservation-item').each(function(k){
			 $(this).text(ri[k]); 
		 }); 
		 $('#check-availability').val(ri[ri.length-1]);
		 
		 
		 //stuff
		 var st = data.general[key].stuff.split('#');
		 $('#join-social-media-literal').text(st[0]);
		 $('#call-now-literal').text(st[1]);
		 $('#lezanta-2').text(st[2]);
		 
		 
		 //CHINESE TOP MENU -> MORE PADDING
		 if ( key == 7 ){
			 $('div.header-hover').css('padding-left', '15px').css('padding-right', '15px');
		 } else{
			 $('div.header-hover').css('padding-left', '5px').css('padding-right', '5px');
		 }
		 
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
	if( dd < 10 ) {
	    dd = '0'+dd;
	} 
	if( mm < 10 ) {
	    mm = '0'+mm;
	} 
	//today = dd+'-'+mm+'-'+yyyy;
	today = dd+'/'+mm+'/'+yyyy;
	return today;
}

