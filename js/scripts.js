/*global $, alert, console*/

$(function(){
    'use strict';
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    //background Image size
    var header=$(".header");
    header.height($(window).height());
    $(window).resize(function () { 
        $(".header").height($(window).height());
        
        slider.each(function() { 
            $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2);
       });
    });

    //Links active
    $(".links li").click(function() { 
        $(this).parent().addClass("active").siblings().removeClass("active");
    });

    //slider
    var slider=$(".slider");
    slider.each(function() { 
        $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2);
    });
    
    slider.bxSlider({
        pager:false,
        speed:900
    });

    //smooth scroll
    $('.navbar .links li a').click(function(){
        $('html, body').animate({
            scrollTop: $('#'+ $(this).data('value')).offset().top 
        },1000)
    })

    //mixItUp
    mixitup('.gallary');

    $('.shuffle li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    })

    //Nice Scroll
    $('body').niceScroll({
        cursorcolor: "#1abc9c",
        cursorwidth: "8px"
    });

    //Slide to top buttom
    var scrollToTop= $('.scroll_to_top');
    $(window).scroll(function(){
        if($(window).scrollTop() >=760){
            scrollToTop.fadeIn();
        }else{
            scrollToTop.fadeOut();
        }
    })
    scrollToTop.click(function(event){
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        },1000);
    });

    //own-slider
    (function autoSlider() {
        $('.own-slider .active').each(function () {
            if (!$(this).is(':last-child')){
                $(this).delay(5000).fadeOut(2000,function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn(2000);
                    autoSlider();
                })
            }else {
                $(this).delay(5000).fadeOut(2000,function () {
                    $(this).removeClass('active');
                    $('.own-slider div').eq(0).addClass('active').fadeIn(2000);
                    autoSlider();
                })
            }
        })
    }());

    

    
})