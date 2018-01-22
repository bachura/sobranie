$(document).ready(function() {

	// Preloader
	$(window).load(function () {
		setTimeout(function(){
			$('#preloader').fadeOut('slow', function () {
			});
			$('html, body').css("overflow", "visible");
		},1000);
	});

	if($("#preloader").css("display") == "block")
	{
		$('html, body').css("overflow", "hidden");
	};

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
		cssEase: 'linear',
		arrows: true,
		dots: true
	});

	// About us video
	$('.video').parent().click(function () {
		if($(this).children(".video").get(0).paused){
			$(this).children(".video").get(0).play();
			$(this).children(".playpause").fadeOut();
			// $(this).children(".video").css("border", "none")
		}else{
			$(this).children(".video").get(0).pause();
			$(this).children(".playpause").fadeIn();
		}
	});

	// Если включить видео, то которое играет сейчас должно приостановится
	// if($(".video").get(0).play){
	// 	$(this).siblings(".video").get(0).pause();
	// };
	


});