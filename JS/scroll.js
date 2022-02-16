$(window).scroll(function () {
  let wb = $(this).scrollTop();

  /*focus 커피 배경*/
  if (wb > 400) {
    $('.focusBox').css("transform", "translateY(0px)").css("opacity", "1");
  } else {
    $('.focusBox').css("transform", "translateY(0px)").css("opacity", "0");
  }
  /*focus 커피 슬로건*/
  if (wb > 500) {
    $('.slogan').css("transform", "translateY(0px)").css("opacity", "1");
    /*focus 커피*/
    $('.coffee').css("transform", "translateY(0px)").css("opacity", "1");
    $('.coffee_glass').css("transform", "translateY(0px)").css("opacity", "1");
  } else {
    $('.slogan').css("transform", "translateY(100px)").css("opacity", "0");
    $('.coffee').css("transform", "translateY(200px)").css("opacity", "0");
    $('.coffee_glass').css("transform", "translateY(200px)").css("opacity", "0");
  }
  /*아워 밀크*/
  if (wb > 1900) {
    $('#ourmilk_Box').css("transform", "translateX(0px)").css("opacity", "1");
  }
  /*아워 티*/
  if (wb > 2300) {
    $('#lineBox').css("transform", "translateX(0px)").css("opacity", "1");
  }
  /*아워 티*/
  if (wb > 2700) {
    $('#decaffeinBox').css("transform", "translateX(0px)").css("opacity", "1");
  }
  /*브랜드 박스*/
  if (wb > 3900) {
    $('#brandBox').css("transform", "translateX(0px)").css("opacity", "1");
  }
});

// window.onload = function(){
//   $('.slogan').css("transform", "translateY(0px)").css("opacity", "1");
//   $('.coffee').css("transform", "translateX(0px)").css("opacity", "1");
//   $('.coffee_glass').css("transform", "translateX(0px)").css("opacity", "1");
// }