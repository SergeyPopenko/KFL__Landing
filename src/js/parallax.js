$(document).ready(function() {
	
	// redrawDotNav();
	
	/* Scroll event handler */
    if ($('.animation')) {
      $(window).bind('scroll',function(e){
    	 parallaxScroll();
		    // redrawDotNav();     
      });
    }
    
	// /* Next/prev and primary nav btn click handlers */
	// $('a.manned-flight').click(function(){
 //    	$('html, body').animate({
 //    		scrollTop:0
 //    	}, 1000, function() {
	//     	parallaxScroll(); // Callback is required for iOS
	// 	});
 //    	return false;
	// });
 //    $('a.frameless-parachute').click(function(){
 //    	$('html, body').animate({
 //    		scrollTop:$('#frameless-parachute').offset().top
 //    	}, 1000, function() {
	//     	parallaxScroll(); // Callback is required for iOS
	// 	});
 //    	return false;
 //    });
 //    $('a.english-channel').click(function(){
 //    	$('html, body').animate({
 //    		scrollTop:$('#english-channel').offset().top
 //    	}, 1000, function() {
	//     	parallaxScroll(); // Callback is required for iOS
	// 	});
 //    	return false;
 //    });
	// $('a.about').click(function(){
 //    	$('html, body').animate({
 //    		scrollTop:$('#about').offset().top
 //    	}, 1000, function() {
	//     	parallaxScroll(); // Callback is required for iOS
	// 	});
 //    	return false;
 //    });
    
  //   /* Show/hide dot lav labels on hover */
  //   $('nav#primary a').hover(
  //   	function () {
		// 	$(this).prev('h1').show();
		// },
		// function () {
		// 	$(this).prev('h1').hide();
		// }
  //   );
    
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
  $('.animation-slow').css('top',(0-(scrolled*.25))+'px');
	$('.animation-slow__bottom').css('top',(210-(scrolled*.25))+'px');
	$('.animation-middle').css('top',(0-(scrolled*.5))+'px');
  $('.animation-hight').css('top',(400-(scrolled*.4))+'px');
	$('.animation-hight__bottom').css('top',(610-(scrolled*.4))+'px');
}

// /* Set navigation dots to an active state as the user scrolls */
// function redrawDotNav(){
// 	var section1Top =  0;
// 	// The top of each section is offset by half the distance to the previous section.
// 	var section2Top =  $('#frameless-parachute').offset().top - (($('#english-channel').offset().top - $('#frameless-parachute').offset().top) / 2);
// 	var section3Top =  $('#english-channel').offset().top - (($('#about').offset().top - $('#english-channel').offset().top) / 2);
// 	var section4Top =  $('#about').offset().top - (($(document).height() - $('#about').offset().top) / 2);;
// 	$('nav#primary a').removeClass('active');
// 	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
// 		$('nav#primary a.manned-flight').addClass('active');
// 	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
// 		$('nav#primary a.frameless-parachute').addClass('active');
// 	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
// 		$('nav#primary a.english-channel').addClass('active');
// 	} else if ($(document).scrollTop() >= section4Top){
// 		$('nav#primary a.about').addClass('active');
// 	}
	
// }
