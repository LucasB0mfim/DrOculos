$(document).ready(function() {
    $(".carouselImagens").slick({
        autoplay: true,
    });
    $(".slick-next").hide();
    
    $(".menu").click(function() {
        $("nav").slideToggle();
    })
}) 