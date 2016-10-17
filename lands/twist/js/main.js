jQuery(window).on('load', function(){
  	 jQuery('.rev_slider').bxSlider({
  		mode:'horizontal',
  		speed: 300,
  		auto: true,
  		pause: 5000,
      nextSelector:'.next-cust',
      prevSelector:'.prev-cust'
    });
     jQuery('.rev2_slider').bxSlider({
      mode:'horizontal',
      speed: 300,
      auto: true,
      pause: 5000,
      nextSelector:'.next-cust2',
      prevSelector:'.prev-cust2'
    });
     $('.animate, .animate1, .animate2, .animate3').each(function(){
    $(this).addClass('fadeInLeft anim');
    });
    $(window).scroll(function() {
    $('.title1').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+900) {
        $(this).addClass('zoomIn anim');
      }
      });
    $('.slide').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+900) {
        $(this).addClass('fadeIn anim');
      }
      });
      $('.right_img').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+1000) {
        $(this).addClass('fadeInRight anim');
      }
    });
      $('.left_img').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+1000) {
        $(this).addClass('fadeInLeft anim');
      }
    });
      $('.animated, .animate1d, .animate2d').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+900) {
        $(this).addClass('fadeInLeft anim');
      }
    });
  });
});

$(document).ready(function() {
  $('a[rel*=facebox]').facebox({
  loading_image : 'loading.gif',
  close_image   : 'closelabel.gif'
  });
  $('input[name=phone1]').mask('8 (999) 999 99 99');
  $('input[name=phone2]').mask('8 (999) 999 99 99');
  try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {
    };

  // ymaps.ready(init);
  
  // function init () {
  //   var myMap;
      
  //   var geocoder = new ymaps.geocode(
  //     'Новосибирск, ул. Каменская, 84в', { results: 1 }
  //   );

  //   geocoder.then(
  //     function (res) {
        
  //       var coord = res.geoObjects.get(0).geometry.getCoordinates();
        
  //       myMap = new ymaps.Map('map', {
  //         center: coord,
  //         zoom: 17
  //       });
        
  //       var myPlacemark = new ymaps.Placemark(
  //         coord , {
  //           balloonContent: '<div class="ballon"><div class="map_cont"><div class="up_map">тел. 8 800 333 17 50</div><div class="down_map"><p>г. Новосибирск,<br>ул. Гоголя 15, оф. 602</p></div></div></div>'
  //         }, {
  //           iconImageHref: '',
  //                 iconImageSize: [0, 0],
  //                 iconImageShadow: false,
  //           //balloonContentSize: [359, 112],
  //           balloonLayout: 'default#imageWithContent',
  //           balloonImageHref: 'i/balloon.png',
  //           balloonImageOffset: [-170, -150],
  //           balloonImageSize: [300, 220],
  //           balloonShadow: false,
  //           balloonAutoPan: true
  //         }
  //       );
        
  //       myMap.geoObjects.add(myPlacemark);

  //       myPlacemark.balloon.open();
        
  //       /*myMap.controls
  //             .add('zoomControl', { left: 5, top: 5 })
  //             .add('typeSelector')
  //             .add('mapTools', { left: 35, top: 5 });*/
  //     }
  //   );
  // }
});

      var scene = document.getElementById('scene');
      var parallax = new Parallax(scene);

      var scene = document.getElementById('scene2');
      var parallax = new Parallax(scene);

      var scene = document.getElementById('scene3');
      var parallax = new Parallax(scene);

$(function() {
     $('.quest_window').hide();
    $('#hide-layout').css({opacity: .6});
    $('.quest_btn').click(function() {
    $('#hide-layout, .quest_window').fadeIn(300);  // плавно показываем окно/фон
    });
    $('#hide-layout, .close1').click(function() {
    $('#hide-layout, .quest_window').fadeOut(300); // плавно скрываем окно/фон
    });
    $('.recal_window').hide();
    $('#hide-layout').css({opacity: .6});
    $('.rec_click').click(function() {
    $('#hide-layout, .recal_window').fadeIn(300);  // плавно показываем окно/фон
    });
    $('#hide-layout, .close2').click(function() {
    $('#hide-layout, .recal_window').fadeOut(300); // плавно скрываем окно/фон
    });
  });

  $('form.question').ajaxForm({
      beforeSubmit: function(arr, $form, options){
      
        if($form.find('input[name=name1]').val().length < 2) {
          alert('Вы должны заполнить поле - "Имя"!');
          return false;
        }

        if($form.find('input[name=phone1]').val().replace(/\D+/g,'').length != 11) {
          alert('Вы должны заполнить поле - "Телефон"!');
          return false;
        }
        
        if($form.find('input[name=email1]').val().length < 5) {
          alert('Вы должны заполнить поле - "Email"!');
          return false;
        }

        if($form.find('textarea[name=question]').val().length < 5) {
          alert('Вы должны заполнить поле - "Вопрос"!');
          return false;
        }
      },
      success: function(responseText, statusText, xhr, $form) { 
        if(responseText != 'ok') {
        alert(responseText);
      } else {
        alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.question').trigger("reset");
        $('#hide-layout, .quest_window').fadeOut(300);
      }
      }
    });

  $('form.recal').ajaxForm({
      beforeSubmit: function(arr, $form, options){
      
        if($form.find('input[name=name2]').val().length < 2) {
          alert('Вы должны заполнить поле - "Имя"!');
          return false;
        }

        if($form.find('input[name=phone2]').val().replace(/\D+/g,'').length != 11) {
          alert('Вы должны заполнить поле - "Телефон"!');
          return false;
        }
      },
      success: function(responseText, statusText, xhr, $form) { 
        if(responseText != 'ok') {
        alert(responseText);
      } else {
        alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.recal').trigger("reset");
        $('#hide-layout, .recal_window').fadeOut(300);
        $form.find('input[placeholder]').val('');
      }
      }
    });