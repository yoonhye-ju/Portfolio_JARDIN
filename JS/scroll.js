$(window).scroll(function () {
  let wb = $(this).scrollTop();
  if (wb > 1900) {
    $('#ourmilk_Box').css("transform", "translateX(0px)").css("opacity", "1");
  }
  if (wb > 2300) {
    $('#lineBox').css("transform", "translateX(0px)").css("opacity", "1");
  }
  if (wb > 3900) {
    $('#brandBox').css("transform", "translateX(0px)").css("opacity", "1");
  }
});

window.onload = function(){
  $('.slogan').css("transform", "translateY(0px)").css("opacity", "1");
  $('.coffee').css("transform", "translateX(0px)").css("opacity", "1");
  $('.coffee_glass').css("transform", "translateX(0px)").css("opacity", "1");
}