jQuery('#tabs li').click(function(){
  var target = jQuery(this).attr('target');
  if(!jQuery(this).hasClass("active"))
    {
      jQuery(this).addClass("active").siblings().removeClass("active");
      jQuery("#"+target).addClass("active").siblings().removeClass("active");
    }
});