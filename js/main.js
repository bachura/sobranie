$(document).ready(function() {

	//Fixed header 
	var $menu = $("#menu"); 
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 10 && $menu.hasClass("default") ){
			$menu.fadeOut('fast',function(){
				$(this).removeClass("default")
				.addClass("fixed main-head")
				.fadeIn('slow');
			});
		} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
			$menu.fadeOut('fast',function(){
				$(this).removeClass("fixed main-head")
				.addClass("default main-head")
				.fadeIn('fast');
			});
		}
	});

	// Main carousel
	$('.owl-carousel.banner').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplaySpeed: 1000,
		nav: true,
		navText: ['','']
	})

	// Resize bg_image
	function heightDetect() {
		$(".block_main").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

}); 