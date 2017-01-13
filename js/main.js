/* Loading Script */
$(window).load(function() {
  "use strict";
    	$(".loader").delay(100).fadeOut();
    	$("#mask").delay(200).fadeOut("slow");
    });

/* Flexslider */
$(window).load(function() {
  "use strict";
	$('.flexslider').flexslider({
		animation: "fade",
		start: function(slider) {
			$('.np-controls a.next').click(function(event){
				event.preventDefault();
				slider.flexAnimate(slider.getTarget("next"));
			});
			$('.np-controls a.previous').click(function(event){
				event.preventDefault();
				slider.flexAnimate(slider.getTarget("previous"));
			});
		}
	});
});

/* Mixitup Portfolio */
jQuery(document).ready(function($) {
  "use strict";
	$('#portfolio').mixitup({
		targetSelector: '.item',
		transitionSpeed: 450
	});
});

/* Nivo - Lightbox */
jQuery(document).ready(function($) {
  "use strict";
    $('.nivo-lbox').nivoLightbox({ effect: 'fade' });
});

/* Skills */
jQuery(document).ready(function($) {
	"use strict";
	$('.skills-info').appear(function() {
	$('.skill95').css('width', '95%');
	$('.skill85').css('width', '85%');
	$('.skill50').css('width', '50%');
	$('.skill30').css('width', '30%');
	$('.skill45').css('width', '45%');
	$('.skill65').css('width', '65%');
	$('.skill60').css('width', '60%');
	$('.skill75').css('width', '75%');
	$('.skill90').css('width', '90%');
	},{accX: 0, accY: -150});
});

