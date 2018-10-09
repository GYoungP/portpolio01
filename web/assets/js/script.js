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
        const gnb = $('.nav li a');
        const menuSection = $('#menu-section');
        const header = $('header');
        const doc = $('html,body');

        $(window).on('scroll',function () {
            var sct = $(window).scrollTop();

            if(sct > 500) {
                header.addClass('is-active');
            }else {
                header.removeClass('is-active');
            }
        });

        gnb.click(function () {
            doc.stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1500, 'easeOutExpo');
            return false;
        })


    },

    main: function () {
        const mainSection = $('.main-section');
        const portfolioMenu = $('.portfolio-btn');
        const portfolioContent = $('.portfolio-work-items');

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

        $(window).on('scroll',function () {
            var sct =$(window).scrollTop();

            mainSection.each(function () {
                var self = $(this),
                    mainSectionOft = self.offset().top;

                if (sct > mainSectionOft - 200) {
                    self.addClass('is-active').siblings().removeClass('is-active');
                }
            });

        });

        portfolioMenu.click(function () {
            var self = $(this);
            self.addClass('on').siblings().removeClass('on');


            var idx = self.index();
            portfolioContent.eq(idx).fadeIn(600).addClass('is-active').siblings().fadeOut(600).removeClass('is-active');

        }).eq(0).trigger('click');

    },

    TopBtn : function () {
        const topBtn = $('.top-btn');
        const doc = $('html,body');

        $(window).on('scroll', function () {
            var sct =$(window).scrollTop();

            if (sct > 100) {
               topBtn.addClass('is-active');
            } else {
                topBtn.removeClass('is-active');
            }
        });

        topBtn.on('click',function () {
            doc.animate({scrollTop:0}, 1500, 'easeOutExpo' )
        })
    }


}
