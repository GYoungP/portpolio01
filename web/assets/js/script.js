$(document).ready(function() {


    /**
     *  UI 스크립트
     */
    Portfolio.init();


});

var Portfolio = {
    init: function () {
        Portfolio.header();
        Portfolio.main();
        Portfolio.TopBtn();


    },



    header: function () {
        const gnb = $('.nav li a');
        const menuSection = $('#menu-section');
        const header = $('header');
        const doc = $('html,body');
        const mGnbBtn = $('.m-gnb-btn');

        $(window).on('scroll',function () {
            var sct = $(window).scrollTop();

            if(sct > 500) {
                header.addClass('is-active' );
            }else {
                header.removeClass('is-active');
            }
        });

        gnb.click(function () {
            doc.stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1500, 'easeOutExpo');
            return false;
        });

        mGnbBtn.on('click',function () {
            doc.toggleClass('is-m_gnb-open');
        });

        $('.main').on('click', function () {
            doc.removeClass('is-m_gnb-open');
        });


    },

    main: function () {
        const mainSection = $('.main-section');
        const portfolioMenu = $('.portfolio-btn');
        const portfolioContent = $('.portfolio-work-items');
        const doc = $('html,body');

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

        TweenMax.from('.top-text', 1, {y:-300, opacity:0})
        TweenMax.from('.main-text', 2, {scale:4, rotationX:360, opacity:0})
        TweenMax.from('.en', 2.5, {y:300, opacity:0})


        // $('.main-visual-section').on('mousewheel', function (event,delta) {
        //     if (delta > 0) {
        //         var prev = $(this).prev().offset().top;
        //
        //         $('html,body').stop().animate({'scrollTop': prev}, 1000, 'easeInQuart');
        //     } else if (delta < 0) {
        //         var next = $(this).next().offset().top;
        //         $('html,body').stop().animate({'scrollTop': next - 80}, 1000, 'easeInQuart');
        //     }
        // });

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

        $('.mouse').click(function () {
            doc.stop().animate({scrollTop: $('#about-me').offset().top}, 1500, 'easeOutExpo');
            return false;
        })

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
