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

	var messageDelay = 2000;
	$(init);

	function init() {
	    $('#contactForm').show().submit(submitForm).addClass('positioned');
	    $('a[href="#contactForm"]').click(function() {
	        $('#contactForm').fadeTo('slow', .2);
	        $('#contactForm').fadeIn('slow', function() {
	            $('#senderName').focus();
	        })
	        return false;
	    });
	}

	function submitForm() {
	    var contactForm = $(this);
	    if (!$('#senderName').val() || !$('#senderEmail').val() || !$('#message').val()) {
	        $('#incompleteMessage').fadeIn().delay(messageDelay).fadeOut();
	        contactForm.fadeOut().delay(messageDelay).fadeIn();
	    } else {
	        $('#sendingMessage').fadeIn();
	        contactForm.fadeOut();
	        $.ajax({
	            url: contactForm.attr('action') + "?ajax=true",
	            type: contactForm.attr('method'),
	            data: contactForm.serialize(),
	            success: submitFinished
	        });
	    }
	    return false;
	}

	function submitFinished(response) {
	    response = $.trim(response);
	    $('#sendingMessage').fadeOut();
	    if (response == "success") {
	        $('#successMessage').fadeIn().delay(messageDelay).fadeOut();
	        $('#senderName').val("");
	        $('#senderEmail').val("");
	        $('#message').val("");
	        $('#contactForm').delay(messageDelay + 500).fadeIn();
	    } else {
	        $('#failureMessage').fadeIn().delay(messageDelay).fadeOut();
	        $('#contactForm').delay(messageDelay + 500).fadeIn();
	    }
	}

	(function($) {
	    $.fn.appear = function(fn, options) {
	        var settings = $.extend({
	            data: undefined,
	            one: true,
	            accX: 0,
	            accY: 0
	        }, options);
	        return this.each(function() {
	            var t = $(this);
	            t.appeared = false;
	            if (!fn) {
	                t.trigger('appear', settings.data);
	                return;
	            }
	            var w = $(window);
	            var check = function() {
	                if (!t.is(':visible')) {
	                    t.appeared = false;
	                    return;
	                }
	                var a = w.scrollLeft();
	                var b = w.scrollTop();
	                var o = t.offset();
	                var x = o.left;
	                var y = o.top;
	                var ax = settings.accX;
	                var ay = settings.accY;
	                var th = t.height();
	                var wh = w.height();
	                var tw = t.width();
	                var ww = w.width();
	                if (y + th + ay >= b && y <= b + wh + ay && x + tw + ax >= a && x <= a + ww + ax) {
	                    if (!t.appeared) t.trigger('appear', settings.data);
	                } else {
	                    t.appeared = false;
	                }
	            };
	            var modifiedFn = function() {
	                t.appeared = true;
	                if (settings.one) {
	                    w.unbind('scroll', check);
	                    var i = $.inArray(check, $.fn.appear.checks);
	                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
	                }
	                fn.apply(this, arguments);
	            };
	            if (settings.one) t.one('appear', settings.data, modifiedFn);
	            else t.bind('appear', settings.data, modifiedFn);
	            w.scroll(check);
	            $.fn.appear.checks.push(check);
	            (check)();
	        });
	    };
	    $.extend($.fn.appear, {
	        checks: [],
	        timeout: null,
	        checkAll: function() {
	            var length = $.fn.appear.checks.length;
	            if (length > 0)
	                while (length--)($.fn.appear.checks[length])();
	        },
	        run: function() {
	            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
	            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
	        }
	    });
	    $.each(['append', 'prepend', 'after', 'before', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'remove', 'css', 'show', 'hide'], function(i, n) {
	        var old = $.fn[n];
	        if (old) {
	            $.fn[n] = function() {
	                var r = old.apply(this, arguments);
	                $.fn.appear.run();
	                return r;
	            }
	        }
	    });
	})(jQuery);

	jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});
	;(function($){$.flexslider=function(el,options){var slider=$(el);slider.vars=$.extend({},$.flexslider.defaults,options);var namespace=slider.vars.namespace,msGesture=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,touch=(("ontouchstart"in window)||msGesture||window.DocumentTouch&&document instanceof DocumentTouch)&&slider.vars.touch,eventType="click touchend MSPointerUp",watchedEvent="",watchedEventClearTimer,vertical=slider.vars.direction==="vertical",reverse=slider.vars.reverse,carousel=(slider.vars.itemWidth>0),fade=slider.vars.animation==="fade",asNav=slider.vars.asNavFor!=="",methods={},focused=true;$.data(el,"flexslider",slider);methods={init:function(){slider.animating=false;slider.currentSlide=parseInt((slider.vars.startAt?slider.vars.startAt:0));if(isNaN(slider.currentSlide))slider.currentSlide=0;slider.animatingTo=slider.currentSlide;slider.atEnd=(slider.currentSlide===0||slider.currentSlide===slider.last);slider.containerSelector=slider.vars.selector.substr(0,slider.vars.selector.search(' '));slider.slides=$(slider.vars.selector,slider);slider.container=$(slider.containerSelector,slider);slider.count=slider.slides.length;slider.syncExists=$(slider.vars.sync).length>0;if(slider.vars.animation==="slide")slider.vars.animation="swing";slider.prop=(vertical)?"top":"marginLeft";slider.args={};slider.manualPause=false;slider.stopped=false;slider.started=false;slider.startTimeout=null;slider.transitions=!slider.vars.video&&!fade&&slider.vars.useCSS&&(function(){var obj=document.createElement('div'),props=['perspectiveProperty','WebkitPerspective','MozPerspective','OPerspective','msPerspective'];for(var i in props){if(obj.style[props[i]]!==undefined){slider.pfx=props[i].replace('Perspective','').toLowerCase();slider.prop="-"+slider.pfx+"-transform";return true;}}return false;}());if(slider.vars.controlsContainer!=="")slider.controlsContainer=$(slider.vars.controlsContainer).length>0&&$(slider.vars.controlsContainer);if(slider.vars.manualControls!=="")slider.manualControls=$(slider.vars.manualControls).length>0&&$(slider.vars.manualControls);if(slider.vars.randomize){slider.slides.sort(function(){return(Math.round(Math.random())-0.5);});slider.container.empty().append(slider.slides);}slider.doMath();slider.setup("init");if(slider.vars.controlNav)methods.controlNav.setup();if(slider.vars.directionNav)methods.directionNav.setup();if(slider.vars.keyboard&&($(slider.containerSelector).length===1||slider.vars.multipleKeyboard)){$(document).bind('keyup',function(event){var keycode=event.keyCode;if(!slider.animating&&(keycode===39||keycode===37)){var target=(keycode===39)?slider.getTarget('next'):(keycode===37)?slider.getTarget('prev'):false;slider.flexAnimate(target,slider.vars.pauseOnAction);}});}if(slider.vars.mousewheel){slider.bind('mousewheel',function(event,delta,deltaX,deltaY){event.preventDefault();var target=(delta<0)?slider.getTarget('next'):slider.getTarget('prev');slider.flexAnimate(target,slider.vars.pauseOnAction);});}if(slider.vars.pausePlay)methods.pausePlay.setup();if(slider.vars.slideshow&&slider.vars.pauseInvisible)methods.pauseInvisible.init();if(slider.vars.slideshow){if(slider.vars.pauseOnHover){slider.hover(function(){if(!slider.manualPlay&&!slider.manualPause)slider.pause();},function(){if(!slider.manualPause&&!slider.manualPlay&&!slider.stopped)slider.play();});}if(!slider.vars.pauseInvisible||!methods.pauseInvisible.isHidden()){(slider.vars.initDelay>0)?slider.startTimeout=setTimeout(slider.play,slider.vars.initDelay):slider.play();}}if(asNav)methods.asNav.setup();if(touch&&slider.vars.touch)methods.touch();if(!fade||(fade&&slider.vars.smoothHeight))$(window).bind("resize orientationchange focus",methods.resize);slider.find("img").attr("draggable","false");setTimeout(function(){slider.vars.start(slider);},200);},asNav:{setup:function(){slider.asNav=true;slider.animatingTo=Math.floor(slider.currentSlide/slider.move);slider.currentItem=slider.currentSlide;slider.slides.removeClass(namespace+"active-slide").eq(slider.currentItem).addClass(namespace+"active-slide");if(!msGesture){slider.slides.click(function(e){e.preventDefault();var $slide=$(this),target=$slide.index();var posFromLeft=$slide.offset().left-$(slider).scrollLeft();if(posFromLeft<=0&&$slide.hasClass(namespace+'active-slide')){slider.flexAnimate(slider.getTarget("prev"),true);}else if(!$(slider.vars.asNavFor).data('flexslider').animating&&!$slide.hasClass(namespace+"active-slide")){slider.direction=(slider.currentItem<target)?"":"prev";slider.flexAnimate(target,slider.vars.pauseOnAction,false,true,true);}});}else{el._slider=slider;slider.slides.each(function(){var that=this;that._gesture=new MSGesture();that._gesture.target=that;that.addEventListener("MSPointerDown",function(e){e.preventDefault();if(e.currentTarget._gesture)e.currentTarget._gesture.addPointer(e.pointerId);},false);that.addEventListener("MSGestureTap",function(e){e.preventDefault();var $slide=$(this),target=$slide.index();if(!$(slider.vars.asNavFor).data('flexslider').animating&&!$slide.hasClass('active')){slider.direction=(slider.currentItem<target)?"next":"prev";slider.flexAnimate(target,slider.vars.pauseOnAction,false,true,true);}});});}}},controlNav:{setup:function(){if(!slider.manualControls){methods.controlNav.setupPaging();}else{methods.controlNav.setupManual();}},setupPaging:function(){var type=(slider.vars.controlNav==="thumbnails")?'control-thumbs':'control-paging',j=1,item,slide;slider.controlNavScaffold=$('<ol class="'+namespace+'control-nav '+namespace+type+'"></ol>');if(slider.pagingCount>1){for(var i=0;i<slider.pagingCount;i++){slide=slider.slides.eq(i);item=(slider.vars.controlNav==="thumbnails")?'<img src="'+slide.attr('data-thumb')+'"/>':'<a>'+j+'</a>';if('thumbnails'===slider.vars.controlNav&&true===slider.vars.thumbCaptions){var captn=slide.attr('data-thumbcaption');if(''!=captn&&undefined!=captn)item+='<span class="'+namespace+'caption">'+captn+'</span>';}slider.controlNavScaffold.append('<li>'+item+'</li>');j++;}}(slider.controlsContainer)?$(slider.controlsContainer).append(slider.controlNavScaffold):slider.append(slider.controlNavScaffold);methods.controlNav.set();methods.controlNav.active();slider.controlNavScaffold.delegate('a, img',eventType,function(event){event.preventDefault();if(watchedEvent===""||watchedEvent===event.type){var $this=$(this),target=slider.controlNav.index($this);if(!$this.hasClass(namespace+'active')){slider.direction=(target>slider.currentSlide)?"next":"prev";slider.flexAnimate(target,slider.vars.pauseOnAction);}}if(watchedEvent===""){watchedEvent=event.type;}methods.setToClearWatchedEvent();});},setupManual:function(){slider.controlNav=slider.manualControls;methods.controlNav.active();slider.controlNav.bind(eventType,function(event){event.preventDefault();if(watchedEvent===""||watchedEvent===event.type){var $this=$(this),target=slider.controlNav.index($this);if(!$this.hasClass(namespace+'active')){(target>slider.currentSlide)?slider.direction="next":slider.direction="prev";slider.flexAnimate(target,slider.vars.pauseOnAction);}}if(watchedEvent===""){watchedEvent=event.type;}methods.setToClearWatchedEvent();});},set:function(){var selector=(slider.vars.controlNav==="thumbnails")?'img':'a';slider.controlNav=$('.'+namespace+'control-nav li '+selector,(slider.controlsContainer)?slider.controlsContainer:slider);},active:function(){slider.controlNav.removeClass(namespace+"active").eq(slider.animatingTo).addClass(namespace+"active");},update:function(action,pos){if(slider.pagingCount>1&&action==="add"){slider.controlNavScaffold.append($('<li><a>'+slider.count+'</a></li>'));}else if(slider.pagingCount===1){slider.controlNavScaffold.find('li').remove();}else{slider.controlNav.eq(pos).closest('li').remove();}methods.controlNav.set();(slider.pagingCount>1&&slider.pagingCount!==slider.controlNav.length)?slider.update(pos,action):methods.controlNav.active();}},directionNav:{setup:function(){var directionNavScaffold=$('<ul class="'+namespace+'direction-nav"><li><a class="'+namespace+'prev" href="#">'+slider.vars.prevText+'</a></li><li><a class="'+namespace+'next" href="#">'+slider.vars.nextText+'</a></li></ul>');if(slider.controlsContainer){$(slider.controlsContainer).append(directionNavScaffold);slider.directionNav=$('.'+namespace+'direction-nav li a',slider.controlsContainer);}else{slider.append(directionNavScaffold);slider.directionNav=$('.'+namespace+'direction-nav li a',slider);}methods.directionNav.update();slider.directionNav.bind(eventType,function(event){event.preventDefault();var target;if(watchedEvent===""||watchedEvent===event.type){target=($(this).hasClass(namespace+'next'))?slider.getTarget('next'):slider.getTarget('prev');slider.flexAnimate(target,slider.vars.pauseOnAction);}if(watchedEvent===""){watchedEvent=event.type;}methods.setToClearWatchedEvent();});},update:function(){var disabledClass=namespace+'disabled';if(slider.pagingCount===1){slider.directionNav.addClass(disabledClass).attr('tabindex','-1');}else if(!slider.vars.animationLoop){if(slider.animatingTo===0){slider.directionNav.removeClass(disabledClass).filter('.'+namespace+"prev").addClass(disabledClass).attr('tabindex','-1');}else if(slider.animatingTo===slider.last){slider.directionNav.removeClass(disabledClass).filter('.'+namespace+"next").addClass(disabledClass).attr('tabindex','-1');}else{slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');}}else{slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');}}},pausePlay:{setup:function(){var pausePlayScaffold=$('<div class="'+namespace+'pauseplay"><a></a></div>');if(slider.controlsContainer){slider.controlsContainer.append(pausePlayScaffold);slider.pausePlay=$('.'+namespace+'pauseplay a',slider.controlsContainer);}else{slider.append(pausePlayScaffold);slider.pausePlay=$('.'+namespace+'pauseplay a',slider);}methods.pausePlay.update((slider.vars.slideshow)?namespace+'pause':namespace+'play');slider.pausePlay.bind(eventType,function(event){event.preventDefault();if(watchedEvent===""||watchedEvent===event.type){if($(this).hasClass(namespace+'pause')){slider.manualPause=true;slider.manualPlay=false;slider.pause();}else{slider.manualPause=false;slider.manualPlay=true;slider.play();}}if(watchedEvent===""){watchedEvent=event.type;}methods.setToClearWatchedEvent();});},update:function(state){(state==="play")?slider.pausePlay.removeClass(namespace+'pause').addClass(namespace+'play').html(slider.vars.playText):slider.pausePlay.removeClass(namespace+'play').addClass(namespace+'pause').html(slider.vars.pauseText);}},touch:function(){var startX,startY,offset,cwidth,dx,startT,scrolling=false,localX=0,localY=0,accDx=0;if(!msGesture){el.addEventListener('touchstart',onTouchStart,false);function onTouchStart(e){if(slider.animating){e.preventDefault();}else if((window.navigator.msPointerEnabled)||e.touches.length===1){slider.pause();cwidth=(vertical)?slider.h:slider.w;startT=Number(new Date());localX=e.touches[0].pageX;localY=e.touches[0].pageY;offset=(carousel&&reverse&&slider.animatingTo===slider.last)?0:(carousel&&reverse)?slider.limit-(((slider.itemW+slider.vars.itemMargin)*slider.move)*slider.animatingTo):(carousel&&slider.currentSlide===slider.last)?slider.limit:(carousel)?((slider.itemW+slider.vars.itemMargin)*slider.move)*slider.currentSlide:(reverse)?(slider.last-slider.currentSlide+slider.cloneOffset)*cwidth:(slider.currentSlide+slider.cloneOffset)*cwidth;startX=(vertical)?localY:localX;startY=(vertical)?localX:localY;el.addEventListener('touchmove',onTouchMove,false);el.addEventListener('touchend',onTouchEnd,false);}}function onTouchMove(e){localX=e.touches[0].pageX;localY=e.touches[0].pageY;dx=(vertical)?startX-localY:startX-localX;scrolling=(vertical)?(Math.abs(dx)<Math.abs(localX-startY)):(Math.abs(dx)<Math.abs(localY-startY));var fxms=500;if(!scrolling||Number(new Date())-startT>fxms){e.preventDefault();if(!fade&&slider.transitions){if(!slider.vars.animationLoop){dx=dx/((slider.currentSlide===0&&dx<0||slider.currentSlide===slider.last&&dx>0)?(Math.abs(dx)/cwidth+2):1);}slider.setProps(offset+dx,"setTouch");}}}function onTouchEnd(e){el.removeEventListener('touchmove',onTouchMove,false);if(slider.animatingTo===slider.currentSlide&&!scrolling&&!(dx===null)){var updateDx=(reverse)?-dx:dx,target=(updateDx>0)?slider.getTarget('next'):slider.getTarget('prev');if(slider.canAdvance(target)&&(Number(new Date())-startT<550&&Math.abs(updateDx)>50||Math.abs(updateDx)>cwidth/2)){slider.flexAnimate(target,slider.vars.pauseOnAction);}else{if(!fade)slider.flexAnimate(slider.currentSlide,slider.vars.pauseOnAction,true);}}el.removeEventListener('touchend',onTouchEnd,false);startX=null;startY=null;dx=null;offset=null;}}else{el.style.msTouchAction="none";el._gesture=new MSGesture();el._gesture.target=el;el.addEventListener("MSPointerDown",onMSPointerDown,false);el._slider=slider;el.addEventListener("MSGestureChange",onMSGestureChange,false);el.addEventListener("MSGestureEnd",onMSGestureEnd,false);function onMSPointerDown(e){e.stopPropagation();if(slider.animating){e.preventDefault();}else{slider.pause();el._gesture.addPointer(e.pointerId);accDx=0;cwidth=(vertical)?slider.h:slider.w;startT=Number(new Date());offset=(carousel&&reverse&&slider.animatingTo===slider.last)?0:(carousel&&reverse)?slider.limit-(((slider.itemW+slider.vars.itemMargin)*slider.move)*slider.animatingTo):(carousel&&slider.currentSlide===slider.last)?slider.limit:(carousel)?((slider.itemW+slider.vars.itemMargin)*slider.move)*slider.currentSlide:(reverse)?(slider.last-slider.currentSlide+slider.cloneOffset)*cwidth:(slider.currentSlide+slider.cloneOffset)*cwidth;}}function onMSGestureChange(e){e.stopPropagation();var slider=e.target._slider;if(!slider){return;}var transX=-e.translationX,transY=-e.translationY;accDx=accDx+((vertical)?transY:transX);dx=accDx;scrolling=(vertical)?(Math.abs(accDx)<Math.abs(-transX)):(Math.abs(accDx)<Math.abs(-transY));if(e.detail===e.MSGESTURE_FLAG_INERTIA){setImmediate(function(){el._gesture.stop();});return;}if(!scrolling||Number(new Date())-startT>500){e.preventDefault();if(!fade&&slider.transitions){if(!slider.vars.animationLoop){dx=accDx/((slider.currentSlide===0&&accDx<0||slider.currentSlide===slider.last&&accDx>0)?(Math.abs(accDx)/cwidth+2):1);}slider.setProps(offset+dx,"setTouch");}}}function onMSGestureEnd(e){e.stopPropagation();var slider=e.target._slider;if(!slider){return;}if(slider.animatingTo===slider.currentSlide&&!scrolling&&!(dx===null)){var updateDx=(reverse)?-dx:dx,target=(updateDx>0)?slider.getTarget('next'):slider.getTarget('prev');if(slider.canAdvance(target)&&(Number(new Date())-startT<550&&Math.abs(updateDx)>50||Math.abs(updateDx)>cwidth/2)){slider.flexAnimate(target,slider.vars.pauseOnAction);}else{if(!fade)slider.flexAnimate(slider.currentSlide,slider.vars.pauseOnAction,true);}}startX=null;startY=null;dx=null;offset=null;accDx=0;}}},resize:function(){if(!slider.animating&&slider.is(':visible')){if(!carousel)slider.doMath();if(fade){methods.smoothHeight();}else if(carousel){slider.slides.width(slider.computedW);slider.update(slider.pagingCount);slider.setProps();}else if(vertical){slider.viewport.height(slider.h);slider.setProps(slider.h,"setTotal");}else{if(slider.vars.smoothHeight)methods.smoothHeight();slider.newSlides.width(slider.computedW);slider.setProps(slider.computedW,"setTotal");}}},smoothHeight:function(dur){if(!vertical||fade){var $obj=(fade)?slider:slider.viewport;(dur)?$obj.animate({"height":slider.slides.eq(slider.animatingTo).height()},dur):$obj.height(slider.slides.eq(slider.animatingTo).height());}},sync:function(action){var $obj=$(slider.vars.sync).data("flexslider"),target=slider.animatingTo;switch(action){case"animate":$obj.flexAnimate(target,slider.vars.pauseOnAction,false,true);break;case"play":if(!$obj.playing&&!$obj.asNav){$obj.play();}break;case"pause":$obj.pause();break;}},pauseInvisible:{visProp:null,init:function(){var prefixes=['webkit','moz','ms','o'];if('hidden'in document)return'hidden';for(var i=0;i<prefixes.length;i++){if((prefixes[i]+'Hidden')in document)methods.pauseInvisible.visProp=prefixes[i]+'Hidden';}if(methods.pauseInvisible.visProp){var evtname=methods.pauseInvisible.visProp.replace(/[H|h]idden/,'')+'visibilitychange';document.addEventListener(evtname,function(){if(methods.pauseInvisible.isHidden()){if(slider.startTimeout)clearTimeout(slider.startTimeout);else slider.pause();}else{if(slider.started)slider.play();else(slider.vars.initDelay>0)?setTimeout(slider.play,slider.vars.initDelay):slider.play();}});}},isHidden:function(){return document[methods.pauseInvisible.visProp]||false;}},setToClearWatchedEvent:function(){clearTimeout(watchedEventClearTimer);watchedEventClearTimer=setTimeout(function(){watchedEvent="";},3000);}}
	slider.flexAnimate=function(target,pause,override,withSync,fromNav){if(!slider.vars.animationLoop&&target!==slider.currentSlide){slider.direction=(target>slider.currentSlide)?"next":"prev";}if(asNav&&slider.pagingCount===1)slider.direction=(slider.currentItem<target)?"next":"prev";if(!slider.animating&&(slider.canAdvance(target,fromNav)||override)&&slider.is(":visible")){if(asNav&&withSync){var master=$(slider.vars.asNavFor).data('flexslider');slider.atEnd=target===0||target===slider.count-1;master.flexAnimate(target,true,false,true,fromNav);slider.direction=(slider.currentItem<target)?"next":"prev";master.direction=slider.direction;if(Math.ceil((target+1)/slider.visible)-1!==slider.currentSlide&&target!==0){slider.currentItem=target;slider.slides.removeClass(namespace+"active-slide").eq(target).addClass(namespace+"active-slide");target=Math.floor(target/slider.visible);}else{slider.currentItem=target;slider.slides.removeClass(namespace+"active-slide").eq(target).addClass(namespace+"active-slide");return false;}}slider.animating=true;slider.animatingTo=target;if(pause)slider.pause();slider.vars.before(slider);if(slider.syncExists&&!fromNav)methods.sync("animate");if(slider.vars.controlNav)methods.controlNav.active();if(!carousel)slider.slides.removeClass(namespace+'active-slide').eq(target).addClass(namespace+'active-slide');slider.atEnd=target===0||target===slider.last;if(slider.vars.directionNav)methods.directionNav.update();if(target===slider.last){slider.vars.end(slider);if(!slider.vars.animationLoop)slider.pause();}if(!fade){var dimension=(vertical)?slider.slides.filter(':first').height():slider.computedW,margin,slideString,calcNext;if(carousel){margin=slider.vars.itemMargin;calcNext=((slider.itemW+margin)*slider.move)*slider.animatingTo;slideString=(calcNext>slider.limit&&slider.visible!==1)?slider.limit:calcNext;}else if(slider.currentSlide===0&&target===slider.count-1&&slider.vars.animationLoop&&slider.direction!=="next"){slideString=(reverse)?(slider.count+slider.cloneOffset)*dimension:0;}else if(slider.currentSlide===slider.last&&target===0&&slider.vars.animationLoop&&slider.direction!=="prev"){slideString=(reverse)?0:(slider.count+1)*dimension;}else{slideString=(reverse)?((slider.count-1)-target+slider.cloneOffset)*dimension:(target+slider.cloneOffset)*dimension;}slider.setProps(slideString,"",slider.vars.animationSpeed);if(slider.transitions){if(!slider.vars.animationLoop||!slider.atEnd){slider.animating=false;slider.currentSlide=slider.animatingTo;}slider.container.unbind("webkitTransitionEnd transitionend");slider.container.bind("webkitTransitionEnd transitionend",function(){slider.wrapup(dimension);});}else{slider.container.animate(slider.args,slider.vars.animationSpeed,slider.vars.easing,function(){slider.wrapup(dimension);});}}else{if(!touch){slider.slides.eq(slider.currentSlide).css({"zIndex":1}).animate({"opacity":0},slider.vars.animationSpeed,slider.vars.easing);slider.slides.eq(target).css({"zIndex":2}).animate({"opacity":1},slider.vars.animationSpeed,slider.vars.easing,slider.wrapup);}else{slider.slides.eq(slider.currentSlide).css({"opacity":0,"zIndex":1});slider.slides.eq(target).css({"opacity":1,"zIndex":2});slider.wrapup(dimension);}}if(slider.vars.smoothHeight)methods.smoothHeight(slider.vars.animationSpeed);}}
	slider.wrapup=function(dimension){if(!fade&&!carousel){if(slider.currentSlide===0&&slider.animatingTo===slider.last&&slider.vars.animationLoop){slider.setProps(dimension,"jumpEnd");}else if(slider.currentSlide===slider.last&&slider.animatingTo===0&&slider.vars.animationLoop){slider.setProps(dimension,"jumpStart");}}slider.animating=false;slider.currentSlide=slider.animatingTo;slider.vars.after(slider);}
	slider.animateSlides=function(){if(!slider.animating&&focused)slider.flexAnimate(slider.getTarget("next"));}
	slider.pause=function(){clearInterval(slider.animatedSlides);slider.animatedSlides=null;slider.playing=false;if(slider.vars.pausePlay)methods.pausePlay.update("play");if(slider.syncExists)methods.sync("pause");}
	slider.play=function(){if(slider.playing)clearInterval(slider.animatedSlides);slider.animatedSlides=slider.animatedSlides||setInterval(slider.animateSlides,slider.vars.slideshowSpeed);slider.started=slider.playing=true;if(slider.vars.pausePlay)methods.pausePlay.update("pause");if(slider.syncExists)methods.sync("play");}
	slider.stop=function(){slider.pause();slider.stopped=true;}
	slider.canAdvance=function(target,fromNav){var last=(asNav)?slider.pagingCount-1:slider.last;return(fromNav)?true:(asNav&&slider.currentItem===slider.count-1&&target===0&&slider.direction==="prev")?true:(asNav&&slider.currentItem===0&&target===slider.pagingCount-1&&slider.direction!=="next")?false:(target===slider.currentSlide&&!asNav)?false:(slider.vars.animationLoop)?true:(slider.atEnd&&slider.currentSlide===0&&target===last&&slider.direction!=="next")?false:(slider.atEnd&&slider.currentSlide===last&&target===0&&slider.direction==="next")?false:true;}
	slider.getTarget=function(dir){slider.direction=dir;if(dir==="next"){return(slider.currentSlide===slider.last)?0:slider.currentSlide+1;}else{return(slider.currentSlide===0)?slider.last:slider.currentSlide-1;}}
	slider.setProps=function(pos,special,dur){var target=(function(){var posCheck=(pos)?pos:((slider.itemW+slider.vars.itemMargin)*slider.move)*slider.animatingTo,posCalc=(function(){if(carousel){return(special==="setTouch")?pos:(reverse&&slider.animatingTo===slider.last)?0:(reverse)?slider.limit-(((slider.itemW+slider.vars.itemMargin)*slider.move)*slider.animatingTo):(slider.animatingTo===slider.last)?slider.limit:posCheck;}else{switch(special){case"setTotal":return(reverse)?((slider.count-1)-slider.currentSlide+slider.cloneOffset)*pos:(slider.currentSlide+slider.cloneOffset)*pos;case"setTouch":return(reverse)?pos:pos;case"jumpEnd":return(reverse)?pos:slider.count*pos;case"jumpStart":return(reverse)?slider.count*pos:pos;default:return pos;}}}());return(posCalc*-1)+"px";}());if(slider.transitions){target=(vertical)?"translate3d(0,"+target+",0)":"translate3d("+target+",0,0)";dur=(dur!==undefined)?(dur/1000)+"s":"0s";slider.container.css("-"+slider.pfx+"-transition-duration",dur);}slider.args[slider.prop]=target;if(slider.transitions||dur===undefined)slider.container.css(slider.args);}
	slider.setup=function(type){if(!fade){var sliderOffset,arr;if(type==="init"){slider.viewport=$('<div class="'+namespace+'viewport"></div>').css({"overflow":"hidden","position":"relative"}).appendTo(slider).append(slider.container);slider.cloneCount=0;slider.cloneOffset=0;if(reverse){arr=$.makeArray(slider.slides).reverse();slider.slides=$(arr);slider.container.empty().append(slider.slides);}}if(slider.vars.animationLoop&&!carousel){slider.cloneCount=2;slider.cloneOffset=1;if(type!=="init")slider.container.find('.clone').remove();slider.container.append(slider.slides.first().clone().addClass('clone').attr('aria-hidden','true')).prepend(slider.slides.last().clone().addClass('clone').attr('aria-hidden','true'));}slider.newSlides=$(slider.vars.selector,slider);sliderOffset=(reverse)?slider.count-1-slider.currentSlide+slider.cloneOffset:slider.currentSlide+slider.cloneOffset;if(vertical&&!carousel){slider.container.height((slider.count+slider.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){slider.newSlides.css({"display":"block"});slider.doMath();slider.viewport.height(slider.h);slider.setProps(sliderOffset*slider.h,"init");},(type==="init")?100:0);}else{slider.container.width((slider.count+slider.cloneCount)*200+"%");slider.setProps(sliderOffset*slider.computedW,"init");setTimeout(function(){slider.doMath();slider.newSlides.css({"width":slider.computedW,"float":"left","display":"block"});if(slider.vars.smoothHeight)methods.smoothHeight();},(type==="init")?100:0);}}else{slider.slides.css({"width":"100%","float":"left","marginRight":"-100%","position":"relative"});if(type==="init"){if(!touch){slider.slides.css({"opacity":0,"display":"block","zIndex":1}).eq(slider.currentSlide).css({"zIndex":2}).animate({"opacity":1},slider.vars.animationSpeed,slider.vars.easing);}else{slider.slides.css({"opacity":0,"display":"block","webkitTransition":"opacity "+slider.vars.animationSpeed/1000+"s ease","zIndex":1}).eq(slider.currentSlide).css({"opacity":1,"zIndex":2});}}if(slider.vars.smoothHeight)methods.smoothHeight();}if(!carousel)slider.slides.removeClass(namespace+"active-slide").eq(slider.currentSlide).addClass(namespace+"active-slide");}
	slider.doMath=function(){var slide=slider.slides.first(),slideMargin=slider.vars.itemMargin,minItems=slider.vars.minItems,maxItems=slider.vars.maxItems;slider.w=(slider.viewport===undefined)?slider.width():slider.viewport.width();slider.h=slide.height();slider.boxPadding=slide.outerWidth()-slide.width();if(carousel){slider.itemT=slider.vars.itemWidth+slideMargin;slider.minW=(minItems)?minItems*slider.itemT:slider.w;slider.maxW=(maxItems)?(maxItems*slider.itemT)-slideMargin:slider.w;slider.itemW=(slider.minW>slider.w)?(slider.w-(slideMargin*(minItems-1)))/minItems:(slider.maxW<slider.w)?(slider.w-(slideMargin*(maxItems-1)))/maxItems:(slider.vars.itemWidth>slider.w)?slider.w:slider.vars.itemWidth;slider.visible=Math.floor(slider.w/(slider.itemW));slider.move=(slider.vars.move>0&&slider.vars.move<slider.visible)?slider.vars.move:slider.visible;slider.pagingCount=Math.ceil(((slider.count-slider.visible)/slider.move)+1);slider.last=slider.pagingCount-1;slider.limit=(slider.pagingCount===1)?0:(slider.vars.itemWidth>slider.w)?(slider.itemW*(slider.count-1))+(slideMargin*(slider.count-1)):((slider.itemW+slideMargin)*slider.count)-slider.w-slideMargin;}else{slider.itemW=slider.w;slider.pagingCount=slider.count;slider.last=slider.count-1;}slider.computedW=slider.itemW-slider.boxPadding;}
	slider.update=function(pos,action){slider.doMath();if(!carousel){if(pos<slider.currentSlide){slider.currentSlide+=1;}else if(pos<=slider.currentSlide&&pos!==0){slider.currentSlide-=1;}slider.animatingTo=slider.currentSlide;}if(slider.vars.controlNav&&!slider.manualControls){if((action==="add"&&!carousel)||slider.pagingCount>slider.controlNav.length){methods.controlNav.update("add");}else if((action==="remove"&&!carousel)||slider.pagingCount<slider.controlNav.length){if(carousel&&slider.currentSlide>slider.last){slider.currentSlide-=1;slider.animatingTo-=1;}methods.controlNav.update("remove",slider.last);}}if(slider.vars.directionNav)methods.directionNav.update();}
	slider.addSlide=function(obj,pos){var $obj=$(obj);slider.count+=1;slider.last=slider.count-1;if(vertical&&reverse){(pos!==undefined)?slider.slides.eq(slider.count-pos).after($obj):slider.container.prepend($obj);}else{(pos!==undefined)?slider.slides.eq(pos).before($obj):slider.container.append($obj);}slider.update(pos,"add");slider.slides=$(slider.vars.selector+':not(.clone)',slider);slider.setup();slider.vars.added(slider);}
	slider.removeSlide=function(obj){var pos=(isNaN(obj))?slider.slides.index($(obj)):obj;slider.count-=1;slider.last=slider.count-1;if(isNaN(obj)){$(obj,slider.slides).remove();}else{(vertical&&reverse)?slider.slides.eq(slider.last).remove():slider.slides.eq(obj).remove();}slider.doMath();slider.update(pos,"remove");slider.slides=$(slider.vars.selector+':not(.clone)',slider);slider.setup();slider.vars.removed(slider);}
	methods.init();}
	$(window).blur(function(e){focused=false;}).focus(function(e){focused=true;});$.flexslider.defaults={namespace:"flex-",selector:".slides > section",animation:"fade",easing:"swing",direction:"horizontal",reverse:false,animationLoop:true,smoothHeight:true,startAt:0,slideshow:false,slideshowSpeed:7000,animationSpeed:600,initDelay:0,randomize:false,thumbCaptions:false,pauseOnAction:true,pauseOnHover:false,pauseInvisible:true,useCSS:true,touch:false,video:false,controlNav:true,directionNav:false,prevText:"Previous",nextText:"Next",keyboard:false,multipleKeyboard:false,mousewheel:false,pausePlay:false,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:".navigation li",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:true,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}}
	$.fn.flexslider=function(options){if(options===undefined)options={};if(typeof options==="object"){return this.each(function(){var $this=$(this),selector=(options.selector)?options.selector:".slides > section",$slides=$this.find(selector);if(($slides.length===1&&options.allowOneSlide===true)||$slides.length===0){$slides.fadeIn(400);if(options.start)options.start($this);}else if($this.data('flexslider')===undefined){new $.flexslider(this,options);}});}else{var $slider=$(this).data('flexslider');switch(options){case"play":$slider.play();break;case"pause":$slider.pause();break;case"stop":$slider.stop();break;case"next":$slider.flexAnimate($slider.getTarget("next"),true);break;case"prev":case"previous":$slider.flexAnimate($slider.getTarget("prev"),true);break;default:if(typeof options==="number")$slider.flexAnimate(options,true);}}}})(jQuery);
	(function($){function getViewportHeight(){var height=window.innerHeight;var mode=document.compatMode;if((mode||!$.support.boxModel)){height=(mode=='CSS1Compat')?document.documentElement.clientHeight:document.body.clientHeight;}return height;}$(window).scroll(function(){var vpH=getViewportHeight(),scrolltop=(document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop),elems=[];$.each($.cache,function(){if(this.events&&this.events.inview){elems.push(this.handle.elem);}});if(elems.length){$(elems).each(function(){var $el=$(this),top=$el.offset().top,height=$el.height(),inview=$el.data('inview')||false;if(scrolltop>(top+height)||scrolltop+vpH<top){if(inview){$el.data('inview',false);$el.trigger('inview',[false]);}}else if(scrolltop<(top+height)){if(!inview){$el.data('inview',true);$el.trigger('inview',[true]);}}});}});$(function(){$(window).scroll();});})(jQuery);
	/*
	* MIXITUP - A CSS3 and JQuery Filter & Sort Plugin
	* Version: 1.5.5
	* License: Creative Commons Attribution-NoDerivs 3.0 Unported - CC BY-ND 3.0
	* http://creativecommons.org/licenses/by-nd/3.0/
	* This software may be used freely on commercial and non-commercial projects with attribution to the author/copyright holder.
	* Author: Patrick Kunka
	* Copyright 2012-2013 Patrick Kunka, Barrel LLC, All Rights Reserved
	*
	* http://mixitup.io
	*/

	(function(d){function r(e,c,l,b,a){function f(){n.unbind("webkitTransitionEnd transitionend otransitionend oTransitionEnd");c&&x(c,l,b,a);a.startOrder=[];a.newOrder=[];a.origSort=[];a.checkSort=[];v.removeStyle(a.prefix+"filter, filter, "+a.prefix+"transform, transform, opacity, display").css(a.clean).removeAttr("data-checksum");window.atob||v.css({display:"none",opacity:"0"});n.removeStyle(a.prefix+"transition, transition, "+a.prefix+"perspective, perspective, "+a.prefix+"perspective-origin, perspective-origin, "+
	(a.resizeContainer?"height":""));"list"==a.layoutMode?(p.css({display:a.targetDisplayList,opacity:"1"}),a.origDisplay=a.targetDisplayList):(p.css({display:a.targetDisplayGrid,opacity:"1"}),a.origDisplay=a.targetDisplayGrid);a.origLayout=a.layoutMode;setTimeout(function(){v.removeStyle(a.prefix+"transition, transition");a.mixing=!1;if("function"==typeof a.onMixEnd){var b=a.onMixEnd.call(this,a);a=b?b:a}})}clearInterval(a.failsafe);a.mixing=!0;a.filter=e;if("function"==typeof a.onMixStart){var g=a.onMixStart.call(this,
	a);a=g?g:a}for(var k=a.transitionSpeed,g=0;2>g;g++){var h=0==g?h=a.prefix:"";a.transition[h+"transition"]="all "+k+"ms linear";a.transition[h+"transform"]=h+"translate3d(0,0,0)";a.perspective[h+"perspective"]=a.perspectiveDistance+"px";a.perspective[h+"perspective-origin"]=a.perspectiveOrigin}var w=a.targetSelector,v=b.find(w);v.each(function(){this.data={}});var n=v.parent();n.css(a.perspective);a.easingFallback="ease-in-out";"smooth"==a.easing&&(a.easing="cubic-bezier(0.25, 0.46, 0.45, 0.94)");
	"snap"==a.easing&&(a.easing="cubic-bezier(0.77, 0, 0.175, 1)");"windback"==a.easing&&(a.easing="cubic-bezier(0.175, 0.885, 0.320, 1.275)",a.easingFallback="cubic-bezier(0.175, 0.885, 0.320, 1)");"windup"==a.easing&&(a.easing="cubic-bezier(0.6, -0.28, 0.735, 0.045)",a.easingFallback="cubic-bezier(0.6, 0.28, 0.735, 0.045)");g="list"==a.layoutMode&&null!=a.listEffects?a.listEffects:a.effects;Array.prototype.indexOf&&(a.fade=-1<g.indexOf("fade")?"0":"",a.scale=-1<g.indexOf("scale")?"scale(.01)":"",a.rotateZ=
	-1<g.indexOf("rotateZ")?"rotate(180deg)":"",a.rotateY=-1<g.indexOf("rotateY")?"rotateY(90deg)":"",a.rotateX=-1<g.indexOf("rotateX")?"rotateX(90deg)":"",a.blur=-1<g.indexOf("blur")?"blur(8px)":"",a.grayscale=-1<g.indexOf("grayscale")?"grayscale(100%)":"");var p=d(),s=d(),t=[],r=!1;"string"===typeof e?t=z(e):(r=!0,d.each(e,function(a){t[a]=z(this)}));"or"==a.filterLogic?(""==t[0]&&t.shift(),1>t.length?s=s.add(b.find(w+":visible")):v.each(function(){var a=d(this);if(r){var b=0;d.each(t,function(d){this.length?
	a.is("."+this.join(", ."))&&b++:0<b&&b++});b==t.length?p=p.add(a):s=s.add(a)}else a.is("."+t.join(", ."))?p=p.add(a):s=s.add(a)})):(p=p.add(n.find(w+"."+t.join("."))),s=s.add(n.find(w+":not(."+t.join(".")+"):visible")));e=p.length;var u=d(),q=d(),m=d();s.each(function(){var a=d(this);"none"!=a.css("display")&&(u=u.add(a),m=m.add(a))});if(p.filter(":visible").length==e&&!u.length&&!c){if(a.origLayout==a.layoutMode)return f(),!1;if(1==p.length)return"list"==a.layoutMode?(b.addClass(a.listClass),b.removeClass(a.gridClass),
	m.css("display",a.targetDisplayList)):(b.addClass(a.gridClass),b.removeClass(a.listClass),m.css("display",a.targetDisplayGrid)),f(),!1}a.origHeight=n.height();if(p.length){b.removeClass(a.failClass);p.each(function(){var a=d(this);"none"==a.css("display")?q=q.add(a):m=m.add(a)});if(a.origLayout!=a.layoutMode&&!1==a.animateGridList)return"list"==a.layoutMode?(b.addClass(a.listClass),b.removeClass(a.gridClass),m.css("display",a.targetDisplayList)):(b.addClass(a.gridClass),b.removeClass(a.listClass),
	m.css("display",a.targetDisplayGrid)),f(),!1;if(!window.atob)return f(),!1;v.css(a.clean);m.each(function(){this.data.origPos=d(this).offset()});"list"==a.layoutMode?(b.addClass(a.listClass),b.removeClass(a.gridClass),q.css("display",a.targetDisplayList)):(b.addClass(a.gridClass),b.removeClass(a.listClass),q.css("display",a.targetDisplayGrid));q.each(function(){this.data.showInterPos=d(this).offset()});u.each(function(){this.data.hideInterPos=d(this).offset()});m.each(function(){this.data.preInterPos=
	d(this).offset()});"list"==a.layoutMode?m.css("display",a.targetDisplayList):m.css("display",a.targetDisplayGrid);c&&x(c,l,b,a);if(c&&A(a.origSort,a.checkSort))return f(),!1;u.hide();q.each(function(a){this.data.finalPos=d(this).offset()});m.each(function(){this.data.finalPrePos=d(this).offset()});a.newHeight=n.height();c&&x("reset",null,b,a);q.hide();m.css("display",a.origDisplay);"block"==a.origDisplay?(b.addClass(a.listClass),q.css("display",a.targetDisplayList)):(b.removeClass(a.listClass),q.css("display",
	a.targetDisplayGrid));a.resizeContainer&&n.css("height",a.origHeight+"px");e={};for(g=0;2>g;g++)h=0==g?h=a.prefix:"",e[h+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ,e[h+"filter"]=a.blur+" "+a.grayscale;q.css(e);m.each(function(){var b=this.data,c=d(this);c.hasClass("mix_tohide")?(b.preTX=b.origPos.left-b.hideInterPos.left,b.preTY=b.origPos.top-b.hideInterPos.top):(b.preTX=b.origPos.left-b.preInterPos.left,b.preTY=b.origPos.top-b.preInterPos.top);for(var e={},k=0;2>k;k++){var h=
	0==k?h=a.prefix:"";e[h+"transform"]="translate("+b.preTX+"px,"+b.preTY+"px)"}c.css(e)});"list"==a.layoutMode?(b.addClass(a.listClass),b.removeClass(a.gridClass)):(b.addClass(a.gridClass),b.removeClass(a.listClass));setTimeout(function(){if(a.resizeContainer){for(var b={},c=0;2>c;c++){var e=0==c?e=a.prefix:"";b[e+"transition"]="all "+k+"ms ease-in-out";b.height=a.newHeight+"px"}n.css(b)}u.css("opacity",a.fade);q.css("opacity",1);q.each(function(){var b=this.data;b.tX=b.finalPos.left-b.showInterPos.left;
	b.tY=b.finalPos.top-b.showInterPos.top;for(var c={},e=0;2>e;e++){var h=0==e?h=a.prefix:"";c[h+"transition-property"]=h+"transform, "+h+"filter, opacity";c[h+"transition-timing-function"]=a.easing+", linear, linear";c[h+"transition-duration"]=k+"ms";c[h+"transition-delay"]="0";c[h+"transform"]="translate("+b.tX+"px,"+b.tY+"px)";c[h+"filter"]="none"}d(this).css("-webkit-transition","all "+k+"ms "+a.easingFallback).css(c)});m.each(function(){var b=this.data;b.tX=0!=b.finalPrePos.left?b.finalPrePos.left-
	b.preInterPos.left:0;b.tY=0!=b.finalPrePos.left?b.finalPrePos.top-b.preInterPos.top:0;for(var c={},e=0;2>e;e++){var h=0==e?h=a.prefix:"";c[h+"transition"]="all "+k+"ms "+a.easing;c[h+"transform"]="translate("+b.tX+"px,"+b.tY+"px)"}d(this).css("-webkit-transition","all "+k+"ms "+a.easingFallback).css(c)});b={};for(c=0;2>c;c++)e=0==c?e=a.prefix:"",b[e+"transition"]="all "+k+"ms "+a.easing+", "+e+"filter "+k+"ms linear, opacity "+k+"ms linear",b[e+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+
	a.rotateZ,b[e+"filter"]=a.blur+" "+a.grayscale,b.opacity=a.fade;u.css(b);n.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(a){if(-1<a.originalEvent.propertyName.indexOf("transform")||-1<a.originalEvent.propertyName.indexOf("opacity"))-1<w.indexOf(".")?d(a.target).hasClass(w.replace(".",""))&&f():d(a.target).is(w)&&f()})},10);a.failsafe=setTimeout(function(){a.mixing&&f()},k+400)}else{a.resizeContainer&&n.css("height",a.origHeight+"px");if(!window.atob)return f(),!1;
	u=s;setTimeout(function(){n.css(a.perspective);if(a.resizeContainer){for(var c={},e=0;2>e;e++){var d=0==e?d=a.prefix:"";c[d+"transition"]="height "+k+"ms ease-in-out";c.height=a.minHeight+"px"}n.css(c)}v.css(a.transition);if(s.length){c={};for(e=0;2>e;e++)d=0==e?d=a.prefix:"",c[d+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ,c[d+"filter"]=a.blur+" "+a.grayscale,c.opacity=a.fade;u.css(c);n.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(c){if(-1<c.originalEvent.propertyName.indexOf("transform")||
	-1<c.originalEvent.propertyName.indexOf("opacity"))b.addClass(a.failClass),f()})}else a.mixing=!1},10)}}function x(e,c,l,b){function a(a,b){var c=isNaN(1*a.attr(e))?a.attr(e).toLowerCase():1*a.attr(e),d=isNaN(1*b.attr(e))?b.attr(e).toLowerCase():1*b.attr(e);return c<d?-1:c>d?1:0}function f(a){"asc"==c?k.prepend(a).prepend(" "):k.append(a).append(" ")}function g(a){a=a.slice();for(var b=a.length,c=b;c--;){var e=parseInt(Math.random()*b),d=a[c];a[c]=a[e];a[e]=d}return a}l.find(b.targetSelector).wrapAll('<div class="mix_sorter"/>');
	var k=l.find(".mix_sorter");b.origSort.length||k.find(b.targetSelector+":visible").each(function(){d(this).wrap("<s/>");b.origSort.push(d(this).parent().html().replace(/\s+/g,""));d(this).unwrap()});k.empty();if("reset"==e)d.each(b.startOrder,function(){k.append(this).append(" ")});else if("default"==e)d.each(b.origOrder,function(){f(this)});else if("random"==e)b.newOrder.length||(b.newOrder=g(b.startOrder)),d.each(b.newOrder,function(){k.append(this).append(" ")});else if("custom"==e)d.each(c,function(){f(this)});
	else{if("undefined"===typeof b.origOrder[0].attr(e))return console.log("No such attribute found. Terminating"),!1;b.newOrder.length||(d.each(b.origOrder,function(){b.newOrder.push(d(this))}),b.newOrder.sort(a));d.each(b.newOrder,function(){f(this)})}b.checkSort=[];k.find(b.targetSelector+":visible").each(function(a){var c=d(this);0==a&&c.attr("data-checksum","1");c.wrap("<s/>");b.checkSort.push(c.parent().html().replace(/\s+/g,""));c.unwrap()});l.find(b.targetSelector).unwrap()}function B(e){for(var c=
	["Webkit","Moz","O","ms"],d=0;d<c.length;d++)if(c[d]+"Transition"in e.style)return c[d];return"transition"in e.style?"":!1}function A(e,c){if(e.length!=c.length)return!1;for(var d=0;d<c.length;d++)if(e[d].compare&&!e[d].compare(c[d])||e[d]!==c[d])return!1;return!0}function z(e){e=e.replace(/\s{2,}/g," ");var c=e.split(" ");d.each(c,function(d){"all"==this&&(c[d]="mix_all")});""==c[0]&&c.shift();return c}var y={init:function(e){return this.each(function(){var c=window.navigator.appVersion.match(/Chrome\/(\d+)\./),
	c=c?parseInt(c[1],10):!1,l=function(a){a=document.getElementById(a);var b=a.parentElement,c=document.createElement("div"),d=document.createDocumentFragment();b.insertBefore(c,a);d.appendChild(a);b.replaceChild(a,c)};(c&&31==c||32==c)&&l(this.id);var b={targetSelector:".mix",filterSelector:".filter",sortSelector:".sort",buttonEvent:"click",effects:["fade","scale"],listEffects:null,easing:"smooth",layoutMode:"grid",targetDisplayGrid:"inline-block",targetDisplayList:"block",listClass:"",gridClass:"",
	transitionSpeed:600,showOnLoad:"all",sortOnLoad:!1,multiFilter:!1,filterLogic:"or",resizeContainer:!0,minHeight:0,failClass:"fail",perspectiveDistance:"3000",perspectiveOrigin:"50% 50%",animateGridList:!0,onMixLoad:null,onMixStart:null,onMixEnd:null,container:null,origOrder:[],startOrder:[],newOrder:[],origSort:[],checkSort:[],filter:"",mixing:!1,origDisplay:"",origLayout:"",origHeight:0,newHeight:0,isTouch:!1,resetDelay:0,failsafe:null,prefix:"",easingFallback:"ease-in-out",transition:{},perspective:{},
	clean:{},fade:"1",scale:"",rotateX:"",rotateY:"",rotateZ:"",blur:"",grayscale:""};e&&d.extend(b,e);this.config=b;d.support.touch="ontouchend"in document;d.support.touch&&(b.isTouch=!0,b.resetDelay=350);b.container=d(this);var a=b.container;b.prefix=B(a[0]);b.prefix=b.prefix?"-"+b.prefix.toLowerCase()+"-":"";a.find(b.targetSelector).each(function(){b.origOrder.push(d(this))});if(b.sortOnLoad){var f;d.isArray(b.sortOnLoad)?(c=b.sortOnLoad[0],f=b.sortOnLoad[1],d(b.sortSelector+"[data-sort="+b.sortOnLoad[0]+
	"][data-order="+b.sortOnLoad[1]+"]").addClass("active")):(d(b.sortSelector+"[data-sort="+b.sortOnLoad+"]").addClass("active"),c=b.sortOnLoad,b.sortOnLoad="desc");x(c,f,a,b)}for(f=0;2>f;f++)c=0==f?c=b.prefix:"",b.transition[c+"transition"]="all "+b.transitionSpeed+"ms ease-in-out",b.perspective[c+"perspective"]=b.perspectiveDistance+"px",b.perspective[c+"perspective-origin"]=b.perspectiveOrigin;for(f=0;2>f;f++)c=0==f?c=b.prefix:"",b.clean[c+"transition"]="none";"list"==b.layoutMode?(a.addClass(b.listClass),
	b.origDisplay=b.targetDisplayList):(a.addClass(b.gridClass),b.origDisplay=b.targetDisplayGrid);b.origLayout=b.layoutMode;f=b.showOnLoad.split(" ");d.each(f,function(){d(b.filterSelector+'[data-filter="'+this+'"]').addClass("active")});a.find(b.targetSelector).addClass("mix_all");"all"==f[0]&&(f[0]="mix_all",b.showOnLoad="mix_all");var g=d();d.each(f,function(){g=g.add(d("."+this))});g.each(function(){var a=d(this);"list"==b.layoutMode?a.css("display",b.targetDisplayList):a.css("display",b.targetDisplayGrid);
	a.css(b.transition)});setTimeout(function(){b.mixing=!0;g.css("opacity","1");setTimeout(function(){"list"==b.layoutMode?g.removeStyle(b.prefix+"transition, transition").css({display:b.targetDisplayList,opacity:1}):g.removeStyle(b.prefix+"transition, transition").css({display:b.targetDisplayGrid,opacity:1});b.mixing=!1;if("function"==typeof b.onMixLoad){var a=b.onMixLoad.call(this,b);b=a?a:b}},b.transitionSpeed)},10);b.filter=b.showOnLoad;d(b.sortSelector).bind(b.buttonEvent,function(){if(!b.mixing){var c=
	d(this),e=c.attr("data-sort"),f=c.attr("data-order");if(!c.hasClass("active"))d(b.sortSelector).removeClass("active"),c.addClass("active");else if("random"!=e)return!1;a.find(b.targetSelector).each(function(){b.startOrder.push(d(this))});r(b.filter,e,f,a,b)}});d(b.filterSelector).bind(b.buttonEvent,function(){if(!b.mixing){var c=d(this);if(!1==b.multiFilter)d(b.filterSelector).removeClass("active"),c.addClass("active"),b.filter=c.attr("data-filter"),d(b.filterSelector+'[data-filter="'+b.filter+'"]').addClass("active");
	else{var e=c.attr("data-filter");c.hasClass("active")?(c.removeClass("active"),b.filter=b.filter.replace(RegExp("(\\s|^)"+e),"")):(c.addClass("active"),b.filter=b.filter+" "+e)}r(b.filter,null,null,a,b)}})})},toGrid:function(){return this.each(function(){var e=this.config;"grid"!=e.layoutMode&&(e.layoutMode="grid",r(e.filter,null,null,d(this),e))})},toList:function(){return this.each(function(){var e=this.config;"list"!=e.layoutMode&&(e.layoutMode="list",r(e.filter,null,null,d(this),e))})},filter:function(e){return this.each(function(){var c=
	this.config;c.mixing||(d(c.filterSelector).removeClass("active"),d(c.filterSelector+'[data-filter="'+e+'"]').addClass("active"),r(e,null,null,d(this),c))})},sort:function(e){return this.each(function(){var c=this.config,l=d(this);if(!c.mixing){d(c.sortSelector).removeClass("active");if(d.isArray(e)){var b=e[0],a=e[1];d(c.sortSelector+'[data-sort="'+e[0]+'"][data-order="'+e[1]+'"]').addClass("active")}else d(c.sortSelector+'[data-sort="'+e+'"]').addClass("active"),b=e,a="desc";l.find(c.targetSelector).each(function(){c.startOrder.push(d(this))});
	r(c.filter,b,a,l,c)}})},multimix:function(e){return this.each(function(){var c=this.config,l=d(this);multiOut={filter:c.filter,sort:null,order:"desc",layoutMode:c.layoutMode};d.extend(multiOut,e);c.mixing||(d(c.filterSelector).add(c.sortSelector).removeClass("active"),d(c.filterSelector+'[data-filter="'+multiOut.filter+'"]').addClass("active"),"undefined"!==typeof multiOut.sort&&(d(c.sortSelector+'[data-sort="'+multiOut.sort+'"][data-order="'+multiOut.order+'"]').addClass("active"),l.find(c.targetSelector).each(function(){c.startOrder.push(d(this))})),
	c.layoutMode=multiOut.layoutMode,r(multiOut.filter,multiOut.sort,multiOut.order,l,c))})},remix:function(e){return this.each(function(){var c=this.config,l=d(this);c.origOrder=[];l.find(c.targetSelector).each(function(){var b=d(this);b.addClass("mix_all");c.origOrder.push(b)});c.mixing||"undefined"===typeof e||(d(c.filterSelector).removeClass("active"),d(c.filterSelector+'[data-filter="'+e+'"]').addClass("active"),r(e,null,null,l,c))})}};d.fn.mixitup=function(d,c){if(y[d])return y[d].apply(this,Array.prototype.slice.call(arguments,
	1));if("object"===typeof d||!d)return y.init.apply(this,arguments)};d.fn.removeStyle=function(e){return this.each(function(){var c=d(this);e=e.replace(/\s+/g,"");var l=e.split(",");d.each(l,function(){var b=RegExp(this.toString()+"[^;]+;?","g");c.attr("style",function(a,c){if(c)return c.replace(b,"")})})})}})(jQuery);
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


	/*
	* Nivo Lightbox v1.2.0
	* http://dev7studios.com/nivo-lightbox
	*
	* Copyright 2013, Dev7studios
	* Free to use and abuse under the MIT license.
	* http://www.opensource.org/licenses/mit-license.php
	*/
	(function(e,t,n,r){function o(t,n){this.el=t;this.$el=e(this.el);this.options=e.extend({},s,n);this._defaults=s;this._name=i;this.init()}var i="nivoLightbox",s={effect:"fade",theme:"default",keyboardNav:true,clickOverlayToClose:true,onInit:function(){},beforeShowLightbox:function(){},afterShowLightbox:function(e){},beforeHideLightbox:function(){},afterHideLightbox:function(){},onPrev:function(e){},onNext:function(e){},errorMessage:"The requested content cannot be loaded. Please try again later."};o.prototype={init:function(){var t=this;if(!e("html").hasClass("nivo-lightbox-notouch"))e("html").addClass("nivo-lightbox-notouch");if("ontouchstart"in n)e("html").removeClass("nivo-lightbox-notouch");this.$el.on("click",function(e){t.showLightbox(e)});if(this.options.keyboardNav){e("body").off("keyup").on("keyup",function(n){var r=n.keyCode?n.keyCode:n.which;if(r==27)t.destructLightbox();if(r==37)e(".nivo-lightbox-prev").trigger("click");if(r==39)e(".nivo-lightbox-next").trigger("click")})}this.options.onInit.call(this)},showLightbox:function(t){var n=this,r=this.$el;var i=this.checkContent(r);if(!i)return;t.preventDefault();this.options.beforeShowLightbox.call(this);var s=this.constructLightbox();if(!s)return;var o=s.find(".nivo-lightbox-content");if(!o)return;e("body").addClass("nivo-lightbox-body-effect-"+this.options.effect);this.processContent(o,r);if(this.$el.attr("data-lightbox-gallery")){var u=e('[data-lightbox-gallery="'+this.$el.attr("data-lightbox-gallery")+'"]');e(".nivo-lightbox-nav").show();e(".nivo-lightbox-prev").off("click").on("click",function(t){t.preventDefault();var i=u.index(r);r=u.eq(i-1);if(!e(r).length)r=u.last();n.processContent(o,r);n.options.onPrev.call(this,[r])});e(".nivo-lightbox-next").off("click").on("click",function(t){t.preventDefault();var i=u.index(r);r=u.eq(i+1);if(!e(r).length)r=u.first();n.processContent(o,r);n.options.onNext.call(this,[r])})}setTimeout(function(){s.addClass("nivo-lightbox-open");n.options.afterShowLightbox.call(this,[s])},1)},checkContent:function(e){var t=this,n=e.attr("href"),r=n.match(/(youtube|youtu|vimeo)\.(com|be)\/(watch\?v=([\w-]+)|([\w-]+))/);if(n.match(/\.(jpeg|jpg|gif|png)$/i)!==null){return true}else if(r){return true}else if(e.attr("data-lightbox-type")=="ajax"){return true}else if(n.substring(0,1)=="#"&&e.attr("data-lightbox-type")=="inline"){return true}else if(e.attr("data-lightbox-type")=="iframe"){return true}return false},processContent:function(n,r){var i=this,s=r.attr("href"),o=s.match(/(youtube|youtu|vimeo)\.(com|be)\/(watch\?v=([\w-]+)|([\w-]+))/);n.html("").addClass("nivo-lightbox-loading");if(this.isHidpi()&&r.attr("data-lightbox-hidpi")){s=r.attr("data-lightbox-hidpi")}if(s.match(/\.(jpeg|jpg|gif|png)$/i)!==null){var u=e("<img>",{src:s});u.one("load",function(){var r=e('<div class="nivo-lightbox-image" />');r.append(u);n.html(r).removeClass("nivo-lightbox-loading");r.css({"line-height":e(".nivo-lightbox-content").height()+"px",height:e(".nivo-lightbox-content").height()+"px"});e(t).resize(function(){r.css({"line-height":e(".nivo-lightbox-content").height()+"px",height:e(".nivo-lightbox-content").height()+"px"})})}).each(function(){if(this.complete)e(this).load()});u.error(function(){var t=e('<div class="nivo-lightbox-error"><p>'+i.options.errorMessage+"</p></div>");n.html(t).removeClass("nivo-lightbox-loading")})}else if(o){var a="",f="nivo-lightbox-video";if(o[1]=="youtube"){a="http://www.youtube.com/embed/"+o[4];f="nivo-lightbox-youtube"}if(o[1]=="youtu"){a="http://www.youtube.com/embed/"+o[3];f="nivo-lightbox-youtube"}if(o[1]=="vimeo"){a="http://player.vimeo.com/video/"+o[3];f="nivo-lightbox-vimeo"}if(a){var l=e("<iframe>",{src:a,"class":f,frameborder:0,vspace:0,hspace:0,scrolling:"auto"});n.html(l);l.load(function(){n.removeClass("nivo-lightbox-loading")})}}else if(r.attr("data-lightbox-type")=="ajax"){e.ajax({url:s,cache:false,success:function(r){var i=e('<div class="nivo-lightbox-ajax" />');i.append(r);n.html(i).removeClass("nivo-lightbox-loading");if(i.outerHeight()<n.height()){i.css({position:"relative",top:"50%","margin-top":-(i.outerHeight()/2)+"px"})}e(t).resize(function(){if(i.outerHeight()<n.height()){i.css({position:"relative",top:"50%","margin-top":-(i.outerHeight()/2)+"px"})}})},error:function(){var t=e('<div class="nivo-lightbox-error"><p>'+i.options.errorMessage+"</p></div>");n.html(t).removeClass("nivo-lightbox-loading")}})}else if(s.substring(0,1)=="#"&&r.attr("data-lightbox-type")=="inline"){if(e(s).length){var c=e('<div class="nivo-lightbox-inline" />');c.append(e(s).clone().show());n.html(c).removeClass("nivo-lightbox-loading");if(c.outerHeight()<n.height()){c.css({position:"relative",top:"50%","margin-top":-(c.outerHeight()/2)+"px"})}e(t).resize(function(){if(c.outerHeight()<n.height()){c.css({position:"relative",top:"50%","margin-top":-(c.outerHeight()/2)+"px"})}})}else{var h=e('<div class="nivo-lightbox-error"><p>'+i.options.errorMessage+"</p></div>");n.html(h).removeClass("nivo-lightbox-loading")}}else if(r.attr("data-lightbox-type")=="iframe"){var p=e("<iframe>",{src:s,"class":"nivo-lightbox-item",frameborder:0,vspace:0,hspace:0,scrolling:"auto"});n.html(p);p.load(function(){n.removeClass("nivo-lightbox-loading")})}else{return false}if(r.attr("title")){var d=e("<span>",{"class":"nivo-lightbox-title"});d.text(r.attr("title"));e(".nivo-lightbox-title-wrap").html(d)}else{e(".nivo-lightbox-title-wrap").html("")}},constructLightbox:function(){if(e(".nivo-lightbox-overlay").length)return e(".nivo-lightbox-overlay");var t=e("<div>",{"class":"nivo-lightbox-overlay nivo-lightbox-theme-"+this.options.theme+" nivo-lightbox-effect-"+this.options.effect});var n=e("<div>",{"class":"nivo-lightbox-wrap"});var r=e("<div>",{"class":"nivo-lightbox-content"});var i=e('<a href="#" class="nivo-lightbox-nav nivo-lightbox-prev">Previous</a><a href="#" class="nivo-lightbox-nav nivo-lightbox-next">Next</a>');var s=e('<a href="#" class="nivo-lightbox-close" title="Close">Close</a>');var o=e("<div>",{"class":"nivo-lightbox-title-wrap"});var u=0;if(u)t.addClass("nivo-lightbox-ie");n.append(r);n.append(o);t.append(n);t.append(i);t.append(s);e("body").append(t);var a=this;if(a.options.clickOverlayToClose){t.on("click",function(t){if(t.target===this||e(t.target).hasClass("nivo-lightbox-content")||e(t.target).hasClass("nivo-lightbox-image")){a.destructLightbox()}})}s.on("click",function(e){e.preventDefault();a.destructLightbox()});return t},destructLightbox:function(){var t=this;this.options.beforeHideLightbox.call(this);e(".nivo-lightbox-overlay").removeClass("nivo-lightbox-open");e(".nivo-lightbox-nav").hide();e("body").removeClass("nivo-lightbox-body-effect-"+t.options.effect);var n=0;if(n){e(".nivo-lightbox-overlay iframe").attr("src"," ");e(".nivo-lightbox-overlay iframe").remove()}e(".nivo-lightbox-prev").off("click");e(".nivo-lightbox-next").off("click");e(".nivo-lightbox-content").empty();this.options.afterHideLightbox.call(this)},isHidpi:function(){var e="(-webkit-min-device-pixel-ratio: 1.5),                              (min--moz-device-pixel-ratio: 1.5),                              (-o-min-device-pixel-ratio: 3/2),                              (min-resolution: 1.5dppx)";if(t.devicePixelRatio>1)return true;if(t.matchMedia&&t.matchMedia(e).matches)return true;return false}};e.fn[i]=function(t){return this.each(function(){if(!e.data(this,i)){e.data(this,i,new o(this,t))}})}})(jQuery,window,document)
