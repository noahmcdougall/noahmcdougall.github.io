//$function(){});
$(document).ready(function() {
	//run test to see if page is in @media mode
	checkSize();

	//run test on resize of window
	$(window).resize(checkSize);
	var displaytype = $('.media-check').css('display');

	//Header scrolling
	smoothScroll(1000);
});

//Media tag checker
function checkSize() {
	if ($('.media-check').css('display') == 'block' ){
		var displaytype = $('.media-check').css('display');
		console.log(displaytype);
		$(window).on('scroll', function(){
			geoscienceScroll();
			cavingScroll();
			console.log("scroll on")
		})
	} else {
		var displaytype = $('.media-check').css('display');
		console.log(displaytype);
		$(window).off('scroll');
		console.log("scroll off");
		$('section.caving').css('background-size', '');
	}
}

// Geoscience Section
function geoscienceScroll() {

	// Defines the foreground scrolling
	var geoforeScroll = $(window).scrollTop();
	var $maxgeoScroll=590;
	if($(window).scrollTop()>$maxgeoScroll) geoforeScroll=$maxgeoScroll;
	if (geoforeScroll > 150) {
		$('.dynamicbackground').css('background-position','calc(50%) calc(50% - '+ (-240 + geoforeScroll / 1.5) +'px)');
	} else {
		$('.dynamicbackground').css('background-position','calc(50%) calc(50% + 140px)');
	}

	//Defines text column scrolling
	//var geotextScroll = $(window).scrollTop();
	//$('.geotextscroll').css('margin', 'calc(-50px - '+ (geotextScroll / 8) +'px 10px');

	//fadeout text
	if (geoforeScroll > 350) {
		$(".fadeout").css("opacity", 1 - (geoforeScroll - 350) / 200);
	}

	//fadein text
	if (geoforeScroll > 350) {
		$(".fadein").css("opacity", (geoforeScroll - 350) / 200);
	} else {
		$(".fadein").css("opacity", 0);
	}

	//Defines the background scrolling
	var geobackScroll = $(window).scrollTop();
	if($(window).scrollTop()>$maxgeoScroll) geobackScroll=$maxgeoScroll;
	if (geobackScroll > 150) {
		$('.staticbackground').css('background-position','center calc(50% - '+ (-25 + geobackScroll / 6) +'px)');
	}
}

// Caving Section
function cavingScroll() {
	var caveScroll = $(window).scrollTop();
	var $maxcaveScroll=1800;
	if($(window).scrollTop()<550) caveScroll=550;
		if($(window).scrollTop()>$maxcaveScroll) caveScroll=$maxcaveScroll;
			$('section.caving').css('background-size', 150 - parseInt( (caveScroll - 550) / 25)+ '% ');
}

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

		var target = $( $(this).attr('href') );

		if( target.length ) {
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, duration);
		}
	});
}
