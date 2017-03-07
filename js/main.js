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
		positionX: 'center'
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
		$('html,body').animate({scrollTop:$(this.hash).offset().top - 80},1000);
	});
	
	$().UItoTop({ easingType: 'easeOutQuart' });
});