$(function() {
	var pull 		= $('#pull');
		menu 		= $('nav ul');
		menuHeight	= menu.height();
	$(pull).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});

	$(window).resize(function(){       //   RESIZE WINDOW FUNCTION
		var w = $(window).width();
		if(w > 320 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
	$('.parallax-window').parallax({
		imageSrc: 'images/gall.jpg',
		positionY: '-120px',
		androidFix: false
	});
	try {
  $.browserSelector();
    if($("html").hasClass("sm-scroll")) {
        $.smoothScroll();
    }
  } catch(err) {
  };
});

jQuery(document).ready(function($) {
	// ANCHORS
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
	});

	/*
	var defaults = {
			containerID: 'toTop', // fading element id
		containerHoverID: 'toTopHover', // fading element hover id
		scrollSpeed: 1200,
		easingType: 'linear' 
		};
	*/
	$().UItoTop({ easingType: 'easeOutQuart' });
});