lightgallery.init({
  enableZoom: false,
  duration: 680,
  fadeImage: false
});

jQuery(window).on('load', function(){
  	 jQuery('.main_slider').bxSlider({
  		mode:'horizontal',
  		speed: 450,
  		auto: false,
  		pause: 5000,
      nextSelector:'.next-cust',
      prevSelector:'.prev-cust'
    });
     $(".form1_phone").mask("8 (999) 999-99-99");
     $(".form2_phone").mask("8 (999) 999-99-99");
  	 $(".form3_phone").mask("8 (999) 999-99-99");
  	 $(".form4_phone").mask("8 (999) 999-99-99");
  	 $(".form5_phone").mask("8 (999) 999-99-99");
  	 $(".form6_phone").mask("8 (999) 999-99-99");
  	 $("#zoom_01").elevateZoom();
  	 $("#zoom_02").elevateZoom({
  	 	zoomWindowPosition: 11
  	 });
  	 $("#zoom_03").elevateZoom();
  	 $("#zoom_04").elevateZoom({
  	 	zoomWindowPosition: 11
  	 });
  	 $("#zoom_05").elevateZoom();
  	 $("#zoom_06").elevateZoom({
  	 	zoomWindowPosition: 11
  	 });
  	 $("#zoom_07").elevateZoom();
  	 $("#zoom_08").elevateZoom({
  	 	zoomWindowPosition: 11
  	 });
  	 $("#zoom_09").elevateZoom();
  	 $("#zoom_10").elevateZoom({
  	 	zoomWindowPosition: 11
  	 });
  	 $("#zoom_11").elevateZoom();
  	 $("#zoom_12").elevateZoom({
  	 	zoomWindowPosition: 11
  	 });

  	var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
  	map.setCenter(new YMaps.GeoPoint(92.655921, 56.015292), 11);
  	map.addControl(new YMaps.Zoom());

  	var placemark = new YMaps.Placemark(new YMaps.GeoPoint(92.890704, 56.043905), {style: "default#greenPoint"});
  	placemark.name = "Красноярск, \"Планета детства\"";
	placemark.description = "ул.Шахтеров 61/1, 2 этаж<br />тел. 256-72-04<br";
    map.addOverlay(placemark);

    var placemark1 = new YMaps.Placemark(new YMaps.GeoPoint(92.934873, 56.037155), {style: "default#greenPoint"});
  	placemark1.name = "Красноярск, \"ТЦ Июнь\"";
	placemark1.description = "ул.Партизана Железняка 23, 3 этаж<br />тел. 256-72-05";
    map.addOverlay(placemark1);

    var placemark2 = new YMaps.Placemark(new YMaps.GeoPoint(92.795609, 56.021929), {style: "default#greenPoint"});
  	placemark2.name = "Красноярск";
	placemark2.description = "ул.Телевизорная 1 стр 8, 2 этаж<br />тел. 258-31-05";
    map.addOverlay(placemark2);

    var placemark3 = new YMaps.Placemark(new YMaps.GeoPoint(92.856451, 55.984842), {style: "default#greenPoint"});
  	placemark3.name = "Красноярск";
	placemark3.description = "ул.Судостроительная 90<br />тел.215-47-34";
    map.addOverlay(placemark3);

    $('.menu_up').each(function(){
    $(this).addClass('anim5');
    });
    $(window).scroll(function() {
    $('.sl1,.sl2,.sl3,.sl4').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+800) {
        $(this).addClass('fadeInLeft anim');
      }
      });
    });
    $(window).scroll(function() {
    $('.sl1b,.sl2b').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+800) {
        $(this).addClass('fadeInRight anim');
      }
      });
    });
});

$(document).ready(function() {
	jQuery('#countdown').countdown({
		date: '12/31/2015 23:59:59',
		offset: +10
		}, function () {
		  alert('Акция окончена!');
	});
	try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {
    };
});

$(function() {
    $('.recal_window').hide();
    $('#hide-layout').css({opacity: .6});
    $('.callback_btn').click(function() {
    $('#hide-layout, .recal_window').fadeIn(300);  // плавно показываем окно/фон
    });
    $('.close, #hide-layout').click(function() {
    $('#hide-layout, .recal_window').fadeOut(300); // плавно скрываем окно/фон
    });
  });

$('form.first_form').ajaxForm({
      beforeSubmit: function(arr, $form, options){
      
        if($form.find('input[name=name1]').val().length < 2) {
          alert('Вы должны заполнить поле - "Имя"!');
          return false;
        }

         if($form.find('input[name=phone1]').val().length < 5) {
          alert('Вы должны заполнить поле - "Телефон"!');
          return false;
        }
	else{
	document.location.href = 'thanks1.html';
        $('form.first_form').trigger("reset");
	}
      },
      success: function(responseText, statusText, xhr, $form) { 
        if(responseText != 'ok') {
        alert(responseText);
      } else {
        //alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.first_form').trigger("reset");
      }
      }
    });

$('form.second_form').ajaxForm({
      beforeSubmit: function(arr, $form, options){
      
        if($form.find('input[name=name2]').val().length < 2) {
          alert('Вы должны заполнить поле - "Имя"!');
          return false;
        }
        
        if($form.find('input[name=phone2]').val().length < 2) {
          alert('Вы должны заполнить поле - "Телефон"!');
          return false;
        }
	else{
	document.location.href = 'thanks2.html';
        $('form.second_form').trigger("reset");
	}
      },
      success: function(responseText, statusText, xhr, $form) { 
        if(responseText != 'ok') {
        alert(responseText);
      } else {
        //alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.second_form').trigger("reset");
      }
      }
    });

$('form.third_form').ajaxForm({
      beforeSubmit: function(arr, $form, options){
      
        if($form.find('input[name=name3]').val().length < 2) {
          alert('Вы должны заполнить поле - "Имя"!');
          return false;
        }

        if($form.find('input[name=phone3]').val().replace(/\D+/g,'').length != 11) {
          alert('Вы должны заполнить поле - "Телефон"!');
          return false;
        }
	else{
	document.location.href = 'thanks3.html';
        $('form.third_form').trigger("reset");
	}
      },
      success: function(responseText, statusText, xhr, $form) { 
        if(responseText != 'ok') {
        alert(responseText);
      } else {
        //alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.third_form').trigger("reset");
      }
      }
    });

$('form.fourth_form').ajaxForm({
      beforeSubmit: function(arr, $form, options){
      
        if($form.find('input[name=name4]').val().length < 2) {
          alert('Вы должны заполнить поле - "Имя"!');
          return false;
        }

        if($form.find('input[name=phone4]').val().replace(/\D+/g,'').length != 11) {
          alert('Вы должны заполнить поле - "Телефон"!');
          return false;
        }
	else{
	document.location.href = 'thanks4.html';
        $('form.fourth_form').trigger("reset");
	}
      },
      success: function(responseText, statusText, xhr, $form) { 
        if(responseText != 'ok') {
        alert(responseText);
      } else {
        //alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.fourth_form').trigger("reset");
      }
      }
    });

$('form.fifth_form').ajaxForm({
      beforeSubmit: function(arr, $form, options){
      
        if($form.find('input[name=name5]').val().length < 2) {
          alert('Вы должны заполнить поле - "Имя"!');
          return false;
        }

        if($form.find('input[name=phone5]').val().replace(/\D+/g,'').length != 11) {
          alert('Вы должны заполнить поле - "Телефон"!');
          return false;
        }
	else{
	document.location.href = 'thanks5.html';
        $('form.fifth_form').trigger("reset");
	}
      },
      success: function(responseText, statusText, xhr, $form) { 
        if(responseText != 'ok') {
        alert(responseText);
      } else {
        //alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.fifth_form').trigger("reset");
      }
      }
    });

$('form.form_six').ajaxForm({
      beforeSubmit: function(arr, $form, options){
      
        if($form.find('input[name=name6]').val().length < 2) {
          alert('Вы должны заполнить поле - "Имя"!');
          return false;
        }

        if($form.find('input[name=phone6]').val().replace(/\D+/g,'').length != 11) {
          alert('Вы должны заполнить поле - "Телефон"!');
          return false;
        }
	else{
	document.location.href = 'thanks6.html';
        $('form.form_six').trigger("reset");
	}
      },
      success: function(responseText, statusText, xhr, $form) { 
        if(responseText != 'ok') {
        alert(responseText);
      } else {
        //alert('Спасибо!\nНаш менеджер свяжется с Вами в ближайшеее время!');
        $('form.form_six').trigger("reset");
      }
      }
    });