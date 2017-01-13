$(window).scroll(function() {
	$('.profile h1').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated fadeInDown");
		}
	});
});

$(window).scroll(function() {
	$('.profile p').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated fadeInDown");
		}
	});
});

$(window).scroll(function() {
	$('.personal-info').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated flipInX");
		}
	});
});

$(window).scroll(function() {
	$('#portfolio .item').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated swing");
		}
	});
});

$(window).scroll(function() {
	$('.skillimg').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated rubberBand");
		}
	});
});

$(window).scroll(function() {
	$('.page-head').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated fadeInDown");
		}
	});
});

$(window).scroll(function() {
	$('.contact-form').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated fadeInUp");
		}
	});
});

$(window).scroll(function() {
	$('.contact li').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+500) {
			$(this).addClass("animated slideInLeft");
		}
	});
});

	$.fn.jQuerySimpleCounter = function(options) {
		var settings = $.extend({
			start: 0,
			end: 100,
			easing: 'swing',
			duration: 400,
			complete: ''
		}, options);

		var thisElement = $(this);

		$({
			count: settings.start
		}).animate({
			count: settings.end
		}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};


	$('#number1').jQuerySimpleCounter({
		end: 88,
		duration: 5000
	});
	$('#number2').jQuerySimpleCounter({
		end: 124,
		duration: 5000
	});
	$('#number3').jQuerySimpleCounter({
		end: 1938,
		duration: 4000
	});
	$('#number4').jQuerySimpleCounter({
		end: 97531,
		duration: 4500
	});

	$(document).ready(function() {

		var i = 1;
		var interval = setInterval(increment, 4000);
		var headertext = "Web Designer"

		function increment() {
			i = i + 1;
			if (i > 4) {
				i = 1;
			}

			if (i == 1) {
				headertext = "Web Designer"
			}
			if (i == 2) {
				headertext = "Front End Designer"
			}
			if (i == 3) {
				headertext = "UI/UX Designer"
			}
			if (i == 4) {
				headertext = "Web Developer"
			}

			$('.tochange').animate({
				'opacity': 0
			}, 1000, function() {
				$('.tochange').text(headertext);
			}).animate({
				'opacity': 1
			}, 1000);

		}
	});
