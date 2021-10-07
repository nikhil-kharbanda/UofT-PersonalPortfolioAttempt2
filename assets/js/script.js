$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    //Toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
    });

    $('.carousel').owlCarousel({
        loop: false,
        margin: 20,
        autoplayTimeOut: 2000,
        autoPlayHoverPause: true,
        responsive:{
            0:{
                items: 1,
                nav: false
            },
            
            600:{
                items: 2,
                nav: false
            },

            1000:{
                items: 3,
                nav: false
            },
        }

    });

});