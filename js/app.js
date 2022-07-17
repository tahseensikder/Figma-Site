
$(window).on('load',function(){
    $('.preloader').fadeOut(1000)
})
$(function(){
    //fixed Nav
    $(window).on('scroll',function(){
        if ($(window).scrollTop()>$('nav').height()){
            $('nav').addClass('menu_animate')
        }
        else {
            $('nav').removeClass('menu_animate')
        }
    })

    //backToTop
    $(window).on('scroll',function(){
        if($(this).scrollTop() > 300){
            $('.backToTop').fadeIn(1000)
        }
        else{
            $('.backToTop').fadeOut(1000)
        }
    })
    $('.backToTop').on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },1000)
    })
})
AOS.init();

