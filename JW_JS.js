$(".links .nav-menu").on("click", function(e) {
  e.preventDefault();
  $(this).parent().toggleClass("nav-open");
});