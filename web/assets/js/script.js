$(document).ready(function() {


    /**
     *  UI 스크립트
     */
 myApp.init();


});

var myApp = {
    init: function () {
        myApp.header();
        myApp.main();
        myApp.TopBtn();
    },
    header: function () {
        var gnb = $('.nav li');
        var rMenu = $('.r-menu-item');
        var header = $('header');
        var item = $('.item');

        $(window).on('scroll',function () {
            var sct = $(window).scrollTop();

            if(sct > 100) {
                header.addClass('is-active');
            }else {
                header.removeClass('is-active');
            }
        });

        gnb.hover(function () {
            $(this).find('.dropdown').stop().slideDown(600);
        },function () {
            $(this).find('.dropdown').stop().hide();
        });

        rMenu.hover(function () {
            $(this).find('.drop-menu').stop().slideDown(600);
        },function () {
            $(this).find('.drop-menu').stop().slideUp(300);
        });

        item.hover(function () {
            header.addClass('is-active');
        })


    },

    main: function () {

        $('.news-list').slick({
            autoplay: true,
            infinite: true,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1
        });

        $('.section').on('mousewheel', function (event,delta) {
            if (delta > 0) {
                var prev = $(this).prev().offset().top;

                $('html,body').stop().animate({'scrollTop': prev}, 1000, 'easeInQuart');
            } else if (delta < 0) {
                var next = $(this).next().offset().top;
                $('html,body').stop().animate({'scrollTop': next}, 1000, 'easeInQuart');
            }
        });

    },

    TopBtn : function () {
        $(window).on('scroll', function () {
            var sct =$(window).scrollTop();

            if (sct > 100) {
                $('.top-btn').addClass('is-active');
            } else {
                $('.top-btn').removeClass('is-active');
            }
        })
    }


}
