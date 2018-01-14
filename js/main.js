$(document).ready(function() {

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
	$('.owl-carousel').owlCarousel ({
		items: 1,
    loop: true,
    margin: 10,
    nav: false
	});

});