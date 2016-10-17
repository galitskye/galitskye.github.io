jQuery(window).on('load', function(){
  	 jQuery('.bxslider1').bxSlider({
  		mode:'fade',
  		speed: 2000,
  		auto: true,
  		pause: 6000,
  		pagerSelector:'.sl1_pager'
  	});
  	 jQuery('.rew_sl').bxSlider({
  		mode:'horizontal',
  		speed: 1500,
  		auto: false,
  		pause: 15000,
  		nextSelector:'.next_rew',
  		prevSelector:'.prev_rew'
  	});
     jQuery('.main_names').bxSlider({
      mode:'vertical',
      speed: 500,
      auto: true,
      pause: 3000,
      useCSS: true,
      slideMargin: 50
    });
  	 $('.logAnim').each(function(){
        $(this).addClass('wobble anim');
    });
  	 $('.logAnimB').each(function(){
        $(this).addClass('bounceInRight anim');
    });
     try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {
    };
});

jQuery(function($){
   $(".user-num").mask("+9 (999) 999-99-99");
   $(".recall-num").mask("+9 (999) 999-99-99");
   $(".time").mask("99.99")
   });

$(window).scroll(function() {
    $('.animated').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+750) {
        $(this).addClass('bounceInLeft anim');
      }
    });
    $('.animated1').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+700) {
        $(this).addClass('bounceInRight anim');
      }
    });
    $('.animated2').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+700) {
        $(this).addClass('bounceInRight anim');
      }
    });
     $('.animated3').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+600) {
        $(this).addClass('bounceInLeft anim');
      }
    });
      $('.fade1').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+700) {
        $(this).addClass('fadeInLeft anim');
      }
    });
       $('.fade2').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+700) {
        $(this).addClass('fadeInDown anim');
      }
    });
        $('.fade3').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+700) {
        $(this).addClass('fadeInRight anim');
      }
    });
        $('.fade4').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+900) {
        $(this).addClass('fadeInLeft anim');
      }
    });
        $('.fade5').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+900) {
        $(this).addClass('fadeInRight anim');
      }
    });
        $('.fade41').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+700) {
        $(this).addClass('fadeInLeft anim');
      }
    });
        $('.fade51').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+700) {
        $(this).addClass('fadeInRight anim');
      }
    });
        $('.fade6').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+900) {
        $(this).addClass('fadeInUp anim');
      }
    });
        $('.year1').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+900) {
        $(this).addClass('bounceInRight anim');
      }
    });
        $('.year2').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+800) {
        $(this).addClass('bounceInRight anim');
      }
    });
        $('.year3').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+700) {
        $(this).addClass('bounceInRight anim');
      }
    });
        $('.year4').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+700) {
        $(this).addClass('tada anim');
      }
    });
        $('.slAnim1').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+700) {
        $(this).addClass('fadeInUp anim');
      }
    });
        $('.zoom').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+750) {
        $(this).addClass('zoomIn anim');
      }
    });
        $('.zoom2').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+600) {
        $(this).addClass('zoomIn anim');
      }
    });
         $('.logAnimC').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+700) {
        $(this).addClass('pulse anim');
      }
    });
         $('.logAnimD').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+800) {
        $(this).addClass('pulse anim');
      }
    });
        $('.logAnimE').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+750) {
        $(this).addClass('pulse anim');
      }
    });
  });

$(document).ready(function() {
  $("#delivery").submit(function() {
    $.ajax({
      type: "POST",
      url: "delivery.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("оплатить и получить дизайн макета");
      alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
      $("#delivery").trigger("reset");
  });
    return false;
  });
});

$(document).ready(function() {
$(".fancybox").fancybox({
	openEffect: 'none',
	closeEffect: 'none',
	helpers: {
	title:  null,
	thumbs: {width: 50,height: 50}
	}
  });
});

$(function(){
	$('.first').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#head').offset().top }, 1800);
	  e.preventDefault();
	});
	$('.second').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#service').offset().top }, 1400);
	  e.preventDefault();
	});
	$('.third').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#algorithm').offset().top }, 1400);
	  e.preventDefault();
	});
	$('.fourth').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#rates').offset().top }, 1400);
	  e.preventDefault();
	});
	$('.fifth').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#examples').offset().top }, 1800);
	  e.preventDefault();
	});
	$('.sixth').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#review').offset().top }, 1400);
	  e.preventDefault();
	});
	$('.seventh').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#contacts').offset().top }, 1800);
	  e.preventDefault();
	});
	$('.eight').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#form').offset().top }, 1800);
	  e.preventDefault();
	});
});