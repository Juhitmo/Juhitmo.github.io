$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $(".top");
    var offset = startchange.height();

    $(document).scroll(function () {
        scroll_start = $(this).scrollTop();
        if (scroll_start > offset) {
            $(".nav-menu").css('color', '#660000');
        } else {
            $('.nav-menu').css('color', 'white');
        }
    });
});

$(".links .nav-menu").on("click", function(e) {
  e.preventDefault();
  $(this).parent().toggleClass("nav-open");

});