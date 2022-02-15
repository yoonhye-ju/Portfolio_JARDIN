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
    $(".menu img").attr("src", "img/icon_menu_white.png");
  } else {
    $("header").removeClass("fixed");
    $("header a").removeClass("txtCh");
    $(".menu img").attr("src", "img/icon_menu.png");
  }
}