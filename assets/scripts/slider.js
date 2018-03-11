$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
		loop:true, 
		margin:10, 
		nav:true, 
		navText : ["<img src = 'assets/img/prev.png'>","<img src = 'assets/img/next.png'>"],
		autoplay:true, 
		smartSpeed:1000, 
		autoplayTimeout:5000,
		mouseDrag: false,
    	responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
});