//start-smoth-scrolling
jQuery(document).ready(function ($) {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
        menu = $('nav ul');
        var w = $(window).width();
        if (w < 770) {
            menu.slideToggle();
        }
    });
});
// start-smoth-scrolling

//start-top-nav-script

$(function () {
    var pull = $('#pull');
    menu = $('nav ul');
    menuHeight = menu.height();
    $(pull).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function () {
        var w = $(window).width();
        if (w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});
//End-top-nav-script


$(document).ready(function () {
    $("#pink_carousel").owlCarousel({
        items: 1,
        lazyLoad: true,
        autoPlay: true,
        navigation: false,
        navigationText: false,
        pagination: true,
    });
    $().UItoTop({ easingType: 'easeOutQuart' });
});

