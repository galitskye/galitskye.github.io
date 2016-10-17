var myPlayer;
    jQuery(function () {
        var isIframe=function(){var a=!1;try{self.location.href!=top.location.href&&(a=!0)}catch(b){a=!0}return a};if(!isIframe()){var logo=$("<a href='http://pupunzi.com/#mb.components/components.html' style='position:absolute;top:0;z-index:1000'><img id='logo' border='0' src='http://pupunzi.com/images/logo.png' alt='mb.ideas.repository'></a>");$("#wrapper").prepend(logo),$("#logo").fadeIn()}
        myPlayer = jQuery("#video").YTPlayer();
    });

var myPlayer1;
	jQuery(function () {
        var isIframe=function(){var a=!1;try{self.location.href!=top.location.href&&(a=!0)}catch(b){a=!0}return a};if(!isIframe()){var logo=$("<a href='http://pupunzi.com/#mb.components/components.html' style='position:absolute;top:0;z-index:1000'><img id='logo' border='0' src='http://pupunzi.com/images/logo.png' alt='mb.ideas.repository'></a>");$("#wrapper1").prepend(logo),$("#logo1").fadeIn()}
        myPlayer1 = jQuery("#videoSec").YTPlayer();
    });
     

// $(document).ready(function(){
//         var $menu = $("#menu"); 
//         $(window).scroll(function(){
//             if ( $(this).scrollTop() > 800 && $menu.hasClass("default") ){
//                 $menu.removeClass("default").addClass("fixed, anim");
//             } else if($(this).scrollTop() <= 800 && $menu.hasClass("fixed, anim")) {
//                 $menu.removeClass("fixed, anim").addClass("default");
//             }
//         });
//     });



jQuery(window).on('load', function(){
  slider = jQuery('.prod_slider').bxSlider({
      mode:'horizontal',
      speed: 500,
      auto: false,
      pause: 5000
    });
	var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
  	map.setCenter(new YMaps.GeoPoint(27.516998, 53.904228), 13);
  	map.addControl(new YMaps.Zoom());

    var placemark = new YMaps.Placemark(new YMaps.GeoPoint(27.552932, 53.901428), {style: "default#bluePoint"});
        placemark.name = "Минск";
        placemark.description = "ул. Комсомольская 16, офис 107";
        map.addOverlay(placemark);

  	try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {
    };
    $(window).scroll(function() {
    $('.sl1, .sl2, .sl3, .sl4').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+800) {
        $(this).addClass('bounceInLeft anim');
      }
    });
    $('.prod_slider').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+800) {
        slider.startAuto();
      }
    });
    $('.mar2_fade, .bx-clone').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+800) {
        $(this).addClass('anim');
      }
    });
  });
});

$(function(){
  $('.first').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#first').offset().top -60}, 1000);
    e.preventDefault();
  });
});

$('form.upform').ajaxForm({
      beforeSubmit: function(arr, $form, options){
      
        if($form.find('input[name=name1]').val().length < 2) {
          alert('Вы должны заполнить поле - "Имя"!');
          return false;
        }
        
        if($form.find('input[name=email1]').val().length < 5) {
          alert('Вы должны заполнить поле - "Email"!');
          return false;
        } else {
        alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.upform').trigger("reset");
      	}
      },
      success: function(responseText, statusText, xhr, $form) { 
        if(responseText != 'ok') {
        alert(responseText);
      } else {
        //alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.upform').trigger("reset");
      }
      }
    });

$('form.bottomform').ajaxForm({
      beforeSubmit: function(arr, $form, options){
      
        if($form.find('input[name=name2]').val().length < 2) {
          alert('Вы должны заполнить поле - "Имя"!');
          return false;
        }
        
        if($form.find('input[name=email2]').val().length < 5) {
          alert('Вы должны заполнить поле - "Email"!');
          return false;
        } else {
        alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.bottomform').trigger("reset");
      	}
      },
      success: function(responseText, statusText, xhr, $form) { 
        if(responseText != 'ok') {
        alert(responseText);
      } else {
        //alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.bottomform').trigger("reset");
      }
      }
    });


$(function() {
    $('.express_wind').hide();
    $('#hide-layout').css({opacity: .6});
    $('.push_btn1').click(function() {
    $('#hide-layout, .express_wind').fadeIn(300);  // плавно показываем окно/фон
    });
    $('.close, #hide-layout').click(function() {
    $('#hide-layout, .express_wind').fadeOut(300); // плавно скрываем окно/фон
    });

    $('.detailed_wind').hide();
    $('#hide-layout').css({opacity: .6});
    $('.push_btn2').click(function() {
    $('#hide-layout, .detailed_wind').fadeIn(300);  // плавно показываем окно/фон
    });
    $('.close, #hide-layout').click(function() {
    $('#hide-layout, .detailed_wind').fadeOut(300); // плавно скрываем окно/фон
    });

    $('.quick_wind').hide();
    $('#hide-layout').css({opacity: .6});
    $('.push_btn3').click(function() {
    $('#hide-layout, .quick_wind').fadeIn(300);  // плавно показываем окно/фон
    });
    $('.close, #hide-layout').click(function() {
    $('#hide-layout, .quick_wind').fadeOut(300); // плавно скрываем окно/фон
    });

    $('.remote_wind').hide();
    $('#hide-layout').css({opacity: .6});
    $('.push_btn4').click(function() {
    $('#hide-layout, .remote_wind').fadeIn(300);  // плавно показываем окно/фон
    });
    $('.close, #hide-layout').click(function() {
    $('#hide-layout, .remote_wind').fadeOut(300); // плавно скрываем окно/фон
    });

    $('.recall_wind').hide();
    $('#hide-layout').css({opacity: .6});
    $('.push_btn5').click(function() {
    $('#hide-layout, .recall_wind').fadeIn(300);  // плавно показываем окно/фон
    });
    $('.close, #hide-layout').click(function() {
    $('#hide-layout, .recall_wind').fadeOut(300); // плавно скрываем окно/фон
    });

    $('.time_wind').hide();
    $('#hide-layout').css({opacity: .6});
    $('.push_btn6').click(function() {
    $('#hide-layout, .time_wind').fadeIn(300);  // плавно показываем окно/фон
    });
    $('.close, #hide-layout').click(function() {
    $('#hide-layout, .time_wind').fadeOut(300); // плавно скрываем окно/фон
    });

    $('.competition_wind').hide();
    $('#hide-layout').css({opacity: .6});
    $('.push_btn7').click(function() {
    $('#hide-layout, .competition_wind').fadeIn(300);  // плавно показываем окно/фон
    });
    $('.close, #hide-layout').click(function() {
    $('#hide-layout, .competition_wind').fadeOut(300); // плавно скрываем окно/фон
    });

    $('.forget_wind').hide();
    $('#hide-layout').css({opacity: .6});
    $('.push_btn8').click(function() {
    $('#hide-layout, .forget_wind').fadeIn(300);  // плавно показываем окно/фон
    });
    $('.close, #hide-layout').click(function() {
    $('#hide-layout, .forget_wind').fadeOut(300); // плавно скрываем окно/фон
    });

    $('.details_wind').hide();
    $('#hide-layout').css({opacity: .6});
    $('.push_btn9').click(function() {
    $('#hide-layout, .details_wind').fadeIn(300);  // плавно показываем окно/фон
    });
    $('.close, #hide-layout').click(function() {
    $('#hide-layout, .details_wind').fadeOut(300); // плавно скрываем окно/фон
    });
  });




$('form.express').ajaxForm({
      beforeSubmit: function(arr, $form, options){
      
        if($form.find('input[name=name3]').val().length < 2) {
          alert('Вы должны заполнить поле - "Имя"!');
          return false;
        }
        
        if($form.find('input[name=adress3]').val().length < 5) {
          alert('Вы должны заполнить поле - "Email или телефон"!');
          return false;
        }

        if($form.find('input[name=site3]').val().length < 5) {
          alert('Вы должны заполнить поле - "Адрес вашего сайта"!');
          return false;
        } else {
        alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.express').trigger("reset");
        }
      },
      success: function(responseText, statusText, xhr, $form) { 
        if(responseText != 'ok') {
        alert(responseText);
      } else {
        //alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.express').trigger("reset");
      }
      }
    });

$('form.detailed').ajaxForm({
      beforeSubmit: function(arr, $form, options){
      
        if($form.find('input[name=name4]').val().length < 2) {
          alert('Вы должны заполнить поле - "Имя"!');
          return false;
        }
        
        if($form.find('input[name=adress4]').val().length < 5) {
          alert('Вы должны заполнить поле - "Email или телефон"!');
          return false;
        }

        if($form.find('input[name=site4]').val().length < 5) {
          alert('Вы должны заполнить поле - "Адрес вашего сайта"!');
          return false;
        } else {
        alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.detailed').trigger("reset");
        }
      },
      success: function(responseText, statusText, xhr, $form) { 
        if(responseText != 'ok') {
        alert(responseText);
      } else {
        //alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.detailed').trigger("reset");
      }
      }
    });

$('form.quick').ajaxForm({
      beforeSubmit: function(arr, $form, options){
      
        if($form.find('input[name=name5]').val().length < 2) {
          alert('Вы должны заполнить поле - "Имя"!');
          return false;
        }
        
        if($form.find('input[name=adress5]').val().length < 5) {
          alert('Вы должны заполнить поле - "Email или телефон"!');
          return false;
        }

        if($form.find('input[name=site5]').val().length < 5) {
          alert('Вы должны заполнить поле - "Адрес вашего сайта"!');
          return false;
        } else {
        alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.quick').trigger("reset");
        }
      },
      success: function(responseText, statusText, xhr, $form) { 
        if(responseText != 'ok') {
        alert(responseText);
      } else {
        //alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.quick').trigger("reset");
      }
      }
    });

$('form.remote').ajaxForm({
      beforeSubmit: function(arr, $form, options){
      
        if($form.find('input[name=name6]').val().length < 2) {
          alert('Вы должны заполнить поле - "Имя"!');
          return false;
        }
        
        if($form.find('input[name=adress6]').val().length < 5) {
          alert('Вы должны заполнить поле - "Email или телефон"!');
          return false;
        }

        if($form.find('input[name=site6]').val().length < 5) {
          alert('Вы должны заполнить поле - "Адрес вашего сайта"!');
          return false;
        } else {
        alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.remote').trigger("reset");
        }
      },
      success: function(responseText, statusText, xhr, $form) { 
        if(responseText != 'ok') {
        alert(responseText);
      } else {
        //alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.remote').trigger("reset");
      }
      }
    });

$('form.reCall').ajaxForm({
      beforeSubmit: function(arr, $form, options){
      
        if($form.find('input[name=name7]').val().length < 2) {
          alert('Вы должны заполнить поле - "Имя"!');
          return false;
        }
        
        if($form.find('input[name=phone7]').val().length < 5) {
          alert('Вы должны заполнить поле - "Email или телефон"!');
          return false;
        } else {
        alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.reCall').trigger("reset");
        }
      },
      success: function(responseText, statusText, xhr, $form) { 
        if(responseText != 'ok') {
        alert(responseText);
      } else {
        //alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.reCall').trigger("reset");
      }
      }
    });

$('form.time').ajaxForm({
      beforeSubmit: function(arr, $form, options){
      
        if($form.find('input[name=name8]').val().length < 2) {
          alert('Вы должны заполнить поле - "Имя"!');
          return false;
        }
        
        if($form.find('input[name=adress8]').val().length < 5) {
          alert('Вы должны заполнить поле - "Email или телефон"!');
          return false;
        }

        if($form.find('input[name=site8]').val().length < 5) {
          alert('Вы должны заполнить поле - "Адрес вашего сайта"!');
          return false;
        } else {
        alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.time').trigger("reset");
        }
      },
      success: function(responseText, statusText, xhr, $form) { 
        if(responseText != 'ok') {
        alert(responseText);
      } else {
        //alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.time').trigger("reset");
      }
      }
    });

$('form.competition').ajaxForm({
      beforeSubmit: function(arr, $form, options){
      
        if($form.find('input[name=name9]').val().length < 2) {
          alert('Вы должны заполнить поле - "Имя"!');
          return false;
        }
        
        if($form.find('input[name=adress9]').val().length < 5) {
          alert('Вы должны заполнить поле - "Email или телефон"!');
          return false;
        }

        if($form.find('input[name=site9]').val().length < 5) {
          alert('Вы должны заполнить поле - "Адрес вашего сайта"!');
          return false;
        } else {
        alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.competition').trigger("reset");
        }
      },
      success: function(responseText, statusText, xhr, $form) { 
        if(responseText != 'ok') {
        alert(responseText);
      } else {
        //alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.competition').trigger("reset");
      }
      }
    });

$('form.forget').ajaxForm({
      beforeSubmit: function(arr, $form, options){
      
        if($form.find('input[name=name10]').val().length < 2) {
          alert('Вы должны заполнить поле - "Имя"!');
          return false;
        }
        
        if($form.find('input[name=adress10]').val().length < 5) {
          alert('Вы должны заполнить поле - "Email или телефон"!');
          return false;
        }

        if($form.find('input[name=site10]').val().length < 5) {
          alert('Вы должны заполнить поле - "Адрес вашего сайта"!');
          return false;
        } else {
        alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.forget').trigger("reset");
        }
      },
      success: function(responseText, statusText, xhr, $form) { 
        if(responseText != 'ok') {
        alert(responseText);
      } else {
        //alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.forget').trigger("reset");
      }
      }
    });

$('form.detail').ajaxForm({
      beforeSubmit: function(arr, $form, options){
      
        if($form.find('input[name=name11]').val().length < 2) {
          alert('Вы должны заполнить поле - "Имя"!');
          return false;
        }
        
        if($form.find('input[name=adress11]').val().length < 5) {
          alert('Вы должны заполнить поле - "Email или телефон"!');
          return false;
        }

        if($form.find('input[name=site11]').val().length < 5) {
          alert('Вы должны заполнить поле - "Адрес вашего сайта"!');
          return false;
        } else {
        alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.detail').trigger("reset");
        }
      },
      success: function(responseText, statusText, xhr, $form) { 
        if(responseText != 'ok') {
        alert(responseText);
      } else {
        //alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.detail').trigger("reset");
      }
      }
    });