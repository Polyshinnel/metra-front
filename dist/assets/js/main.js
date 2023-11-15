$(document).ready(function(){
    $('.banner-block').owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        dots: true
    });
});

$('.menu-btn').click(function(){
    $('.header-menu').slideToggle();
})