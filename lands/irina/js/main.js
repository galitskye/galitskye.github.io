jQuery(document).ready(function($) {
    $("#fullpage").fullpage({
        anchors:['main','music','file','poster','photo','video','contact'],
        menu:'#menu',
        scrollBar:false,
        navigation:true,
        navigationPosition:'right',
        navigationTooltips:["Main","Music","Bio","Writing","Photo","Video","Contact"],
        responsiveWidth:1000,
        responsiveHeight:600,
        easing:"easeInOutCubic",
        easingcss3:"ease",
        scrollingSpeed:700
    });
});
jQuery(function(){
jQuery('.brg_btn').on('click', function(){
    if(!jQuery(this).hasClass('active')){
      jQuery(this).next().slideDown('fast');
      jQuery(this).addClass('active');
    } else {
      jQuery(this).next().slideUp('fast');
      jQuery(this).removeClass('active');
    }
  });
});