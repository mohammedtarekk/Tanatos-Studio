$(function(){

    // adjust header to take the height of the viewer window
    $('.header').innerHeight($(window).height());

    //scroll up button
    $(window).scroll(function(){
        if($(this).scrollTop() > 100)
            $('.scroll-up').fadeIn();
        else
            $('.scroll-up').fadeOut();
    });

    $('.scroll-up').click(function(){
        $('body, html').animate({scrollTop: 0},1000);
    });
});

// button in the header to go down to the next section
$('.down-arrow i').click(function(){
    $('html, body').animate({
        scrollTop: $('.features').offset().top
    },1000);
});

// our works section
$('.our-works .gallery .box').hover(function(){
    $(this).find('.details').fadeIn(400);
});

$('.our-works .gallery .box').mouseleave(function(){
    $(this).find('.details').fadeOut(400);
});

/// show more/less
$('.show-more').click(function(){
    $('.box').each(function(){
        if($(this).hasClass('hide'))
            $(this).slideToggle(600);
    });

    if($(this).html() == "SHOW MORE")
        $(this).html("SHOW LESS");
    else
        $(this).html("SHOW MORE");
});

// Testimonials slider
let right = $('.rightBT'),
    left = $('.leftBT');

function controlArrows(){
    $('.testimonials .content .member:first').hasClass('active') ? left.fadeOut() : left.fadeIn(); 
    $('.testimonials .content .member:last').hasClass('active') ? right.fadeOut() : right.fadeIn(); 
};
controlArrows();

$('.testimonials .slider-controls i').click(function(){

    if($(this).hasClass('rightBT')){
        $('.content .active').fadeOut(100,function(){
            $(this).removeClass('active').next().addClass('active').fadeIn();
            controlArrows();
        });
    }
    else{
        $('.content .active').fadeOut(100,function(){
            $(this).removeClass('active').prev().addClass('active').fadeIn();
            controlArrows();
        });
    }
});