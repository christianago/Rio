$(document).ready(function(){

	$('input.datepicker').datepicker({
		autoclose: true,
		startDate: '+1d'
	});
	
	var pages = ['home', 'accomodation.php'];
	var myURL = document.URL.split('/');
	myURL = myURL[myURL.length-1];
	myURL = myURL.replace("#", "");
	//console.log(myURL);
	
	if ( $.inArray(myURL, pages) == -1 ){
		$('#slider1_container').css({height:190});
	} else{
		$('#slider1_container').css({height:240});
		var index = $.inArray(myURL, pages);
		$('div.active').removeClass('active');
		$('div.header-hover:eq("'+index+'")').addClass('active');
	}

	
	$(this).on('mouseenter', '.datepicker-switch', function(){
		$(this).css('background', '#DC143C');
	});

	 $(this).on('click', '.dropdown-menu *', function(e){
	     e.stopPropagation();
	 });
	 
	 $(this).on('focus', 'input', function(){
		 if ( $('.datepicker').length > 0 )
		 $('input.datepicker').datepicker('hide');
	 });
	 
	 $(this).on('click', 'div.plus-area', function(){
		 var $elem = $(this).closest('div.rooms').next('div.rooms-details:first');
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
	 
	 var options = { $AutoPlay:true, $SlideshowOptions: { $Class: $JssorSlideshowRunner$, $Transitions: [{ $Duration:700, $Fade: true, $Opacity:2 }] }};
     var jssor_slider1 = new $JssorSlider$('slider1_container', options);
     

     function ScaleSlider() {
         var parentWidth = $('#slider1_container').parent().width();
         if (parentWidth) {
             jssor_slider1.$ScaleWidth(parentWidth);
         }
         else
             window.setTimeout(ScaleSlider, 30);
     }
     ScaleSlider();
     if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
         $(window).bind('resize', ScaleSlider);
     }
     
     
     $('a.fullsizable').fullsizable();

    
});
	

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


