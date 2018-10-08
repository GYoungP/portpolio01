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
        // var gnb = $('.nav li');
        // var rMenu = $('.r-menu-item');
        var header = $('header');

        $(window).on('scroll',function () {
            var sct = $(window).scrollTop();

            if(sct > 500) {
                header.addClass('is-active');
            }else {
                header.removeClass('is-active');
            }
        });

    },

    main: function () {


        $('.main-visual').slick({
            dots: true,
            arrows:false,
            infinite: true,
            speed: 2000,
            fade: true,
            cssEase: 'linear',
            autoplay:true,
            autoplayspeed: 1000
        });

        AOS.init({
            duration: 1000,
            offset: 0,
            delay: 100,
            easing: 'easeInOutBack',
        });


        $('.main-visual-section').on('mousewheel', function (event,delta) {
            if (delta > 0) {
                var prev = $(this).prev().offset().top;

                $('html,body').stop().animate({'scrollTop': prev}, 1000, 'easeInQuart');
            } else if (delta < 0) {
                var next = $(this).next().offset().top;
                $('html,body').stop().animate({'scrollTop': next - 80}, 1000, 'easeInQuart');
            }
        });

        var mainSection = $('.main-section');


        $(window).on('scroll',function () {
            var sct =$(window).scrollTop();

            mainSection.each(function () {
                var self = $(this),
                    mainSectionOft = self.offset().top;

                if (sct > mainSectionOft - 100) {
                    self.addClass('is-active').siblings().removeClass('is-active');
                }
            });

        });

        const menu = $('.portfolio-btn');
        const content = $('.portfolio-work-items');

        menu.click(function () {
            var self = $(this);
            self.addClass('on').siblings().removeClass('on')


            var idx = self.index();
            content.eq(idx).fadeIn(600).addClass('is-active').siblings().fadeOut(600).removeClass('is-active');
        }).eq(0).trigger('click');

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
