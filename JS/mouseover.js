$(function(){
  $('.decaffeinBox_left').mouseover(function(){
    $('.decaffeinBox_black').show();
    $('.decaffein').show();
    $('.arrow').show();
  });
  $('.decaffeinBox_left').mouseout(function(){
    $('.decaffeinBox_black').hide();
    $('.decaffein').hide();
    $('.arrow').hide();
  });
});