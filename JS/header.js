var currentScrollTop = 0;
$(document).ready(function () {
  scrollController();
  $(window).scroll(function () {
    scrollController();
  });
});

function scrollController() {
  currentScrollTop = $(window).scrollTop();
  if (currentScrollTop > 50) {
    $("header").addClass("fixed");
    $("header a").addClass("txtCh");
    $(".menu li i").css("color", "white");
  } else {
    $("header").removeClass("fixed");
    $("header a").removeClass("txtCh");
    $(".menu li i").css("color", "black");
  }
}