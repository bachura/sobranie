$(document).ready(function() {

	// Preloader
	$(window).load(function () {
		setTimeout(function(){
			$('#preloader').fadeOut('slow', function () {
			});
		},10000);
	});

	// var prel = "#preloader";
	// if (prel = true) 
	// {
	// 	$('html, body').css("overflow", "hidden");	
	// } else
	// {
	// 	$('html, body').css("overflow", "hidden");
	// }

	// Header phone slider
	(function phs() {
		var op = $('#phone_slider > div.v');
		op.removeClass('v').fadeOut(300);
		if (op.next().length) {
			op.next().addClass('v').fadeIn(300);
		} else {
			op.parent().children().first().addClass('v').fadeIn(300);
		}
		setTimeout(phs, 1600);
	}());	

	// Main carousel
	$('.main-carousel').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		autoplay: true,
		autoplaySpeed: 1800,
		speed: 1200,
		fade: true,
		cssEase: 'linear'
	});

});