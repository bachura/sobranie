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
	$(function() {
		var $slides = $('#slides');

		Hammer($slides[0]).on("swipeleft", function(e) {
			$slides.data('superslides').animate('next');
		});

		Hammer($slides[0]).on("swiperight", function(e) {
			$slides.data('superslides').animate('prev');
		});

		$slides.superslides({
			hashchange: true
		});
	});

	$('#slides').superslides({
		hashchange: true,
		play: 3500,
		animation_speed: 800,
		animation: "fade",
		pagination: false,

	});


}); 