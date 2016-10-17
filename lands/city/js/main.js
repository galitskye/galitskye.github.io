jQuery(window).on('load', function(){
     jQuery('.slider1').bxSlider({
      mode:'fade',
      speed: 1000,
      auto: true,
      pause: 3000,
      nextSelector: '.next_cast',
      prevSelector: '.prev_cast'
    });
     jQuery('.slider2').bxSlider({
      mode:'horizontal',
      speed: 1000,
      auto: true,
      pause: 5000,
      nextSelector: '.sl2-next',
      pagerSelector: '.sl2-pager',
      prevSelector: '.sl2-prev'
    });
         $('.animated').each(function(){
    $(this).addClass('fadeInLeft anim');
    });
     $('.animated1').each(function(){
        $(this).addClass('fadeInRight anim');
    });
     $('.animated2').each(function(){
        $(this).addClass('fadeInUp anim');
    });
     $('.animated3').each(function(){
        $(this).addClass('fadeInDown anim');
    });
    $(window).scroll(function() {
    $('.left, .prev, .left4').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+800) {
        $(this).addClass('fadeInLeft anim');
      }
    });
    $('.right, .next, .right4').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+800) {
        $(this).addClass('fadeInRight anim');
      }
    });
    $('.top').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+700) {
        $(this).addClass('fadeInDown anim');
      }
    });
    $('.bottom').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+900) {
        $(this).addClass('fadeInUp anim');
      }
    });
    $('.sl1').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+600) {
        $(this).addClass('zoomIn anim');
      }
    });
    $('.sl2').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+800) {
        $(this).addClass('fadeIn anim');
      }
    });
    $('.right1').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+800) {
        $(this).addClass('fadeInRight anim');
      }
    });
    $('.s1, .s2, .s3, .s4, .pager').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+700) {
        $(this).addClass('fadeInUp anim');
      }
    });
     $('.sh1, .sh2, .sh3, .sh4').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+700) {
        $(this).addClass('fadeInRight anim');
      }
    });
    $('.pager').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+900) {
        $(this).addClass('fadeInUp anim');
      }
    });
    $('.animated4').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+1300) {
        $(this).addClass('fadeInUp anim');
      }
    });
});

$(document).ready(function() {
  try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {
    };
        $('.parallax-window1').parallax({imageSrc: '../images/paral1.jpg'});
        $('.parallax-window2').parallax({imageSrc: '../images/paral2.jpg'});
        $('.parallax-window3').parallax({imageSrc: '../images/paral3.jpg'});
        $('.parallax-window4').parallax({imageSrc: '../images/paral4.jpg'});
    });
    $('.first').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#download').offset().top }, 1400);
    e.preventDefault();
  });
  $('.second').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#download').offset().top }, 1000);
    e.preventDefault();
  });
});

$('form.order').ajaxForm({
      beforeSubmit: function(arr, $form, options){
      
        if($form.find('input[name=name]').val().length < 2) {
          alert('Вы должны заполнить поле - "Имя"!');
          return false;
        }

        if($form.find('input[name=email]').val().length < 5) {
          alert('Вы должны заполнить поле - "Email"!');
          return false;
        }
      
      },
      success: function(responseText, statusText, xhr, $form) { 
        if(responseText != 'ok') {
        alert(responseText);
      } else {
        alert('Письмо успешно отправлено!');
        $('form.order').trigger("reset");
        if($dialog_order.css('display') == 'block'){
          $dialog_order.dialog('close');
        }
        $form.find('input[placeholder]').val('');
      }
      }
    });