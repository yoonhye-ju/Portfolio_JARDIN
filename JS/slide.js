var w=window.innerWidth;
function prev() {
  $('.slide li:last').prependTo('.slide');
  $('.slide').css('margin-left', -w);
  $('.slide').stop().animate({ marginLeft: 0 }, 500);
  $('.dot').toggleClass('active');
}
function next() {
  $('.slide').stop().animate({ marginLeft: -w }, function () {
    $('.slide li:first').appendTo('.slide');
    $('.slide').css({ marginLeft: 0 });
    $('.dot').toggleClass('active');
    // $('.dot:last').addClass('.active');
    // $('.dot:first').removeClass('.active');
  });
}
function slide() {
  $('.slide').stop().animate({ marginLeft: -w }, function () {
    $('.slide li:first').appendTo('.slide');
    $('.slide').css({ marginLeft: 0 });
    $('.dot').toggleClass('active');
    // $('.dot').addClass('.active');
  });
}
setInterval(slide, 5000);

$(function(){
  $('.prev').click(function () {
    prev();
  });
  $('.next').click(function () {
    next();
  });
});

