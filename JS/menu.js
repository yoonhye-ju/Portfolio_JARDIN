function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$(window).resize(function () {
  if (window.innerWidth >= 599) {
    $(".menu").show();
  }
});