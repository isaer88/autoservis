$(document).ready(function () {

  console.log('scripts init');

    // Slider partners

    $(".slider_top").owlCarousel({
        items:1,
        loop: true,
        nav: true,
        navText: []
    });

    $(".slider_about").owlCarousel({
        items:1,
        loop: true,
        nav: true,
        navText: []
    });

    $('.services_link').on('click', function(){
        $('.services ul').toggleClass('active');
    });

    // Menu

    $('.button').on('click', function(){
        $('.menu_block').toggleClass('active');
    });

    $('.menu ul li a').on('click', function(){
        $('.menu_block').removeClass('active');
    });

    $('.popup_button').on('click', function(){
        $(this).parent().toggleClass('active');
    });

});