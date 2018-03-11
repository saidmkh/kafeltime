	$(document).ready(function() {
 	$('.menu-trigger').click(function() {
    $('.menu ul').stop(true,false,true).slideToggle(760);
  });

  
  $(window).resize(function() {		
		if (  $(window).width() > 760 ) {			
			$('.menu ul').removeAttr('style');
		 }
	});
});