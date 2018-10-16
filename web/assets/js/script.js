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
        const visual = $('.visual');
        const isActive = $('.is-active');

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



        // isActive(function () {
        //     TweenMax.from('.tit', 1, {y:100, opacity:0, scale: 3})
        // })

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
                const self = $(this);
                const mainSectionOft = self.offset().top;

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
        });


        const webWorks = [
            {
                link : "http://nnnbdnnn.dothome.co.kr/genesis/web/public/main.html",
                imgUrl : "../assets/img/page1.jpg",
                title : "genesis",
                desc :"PC \n Html / scss / jquery"
            },
            {
                link : "http://nnnbdnnn.dothome.co.kr/gbksoft/gbksoft/web/public/main.html",
                imgUrl : "../assets/img/page2-1.jpg",
                title : "gbksoft",
                desc :"PC (responsive) \n Html / scss"
            },
            {
                link : "http://nnnbdnnn.dothome.co.kr/drjart/web/public/main.html",
                imgUrl : "../assets/img/page3-1.jpg",
                title : "dr. jart",
                desc :"PC \n Html / scss / jquery"
            },
            {
                link : "http://nnnbdnnn.dothome.co.kr/before/maketer_/index.html",
                imgUrl : "../assets/img/page4-1.jpg",
                title : "maketer",
                desc :"PC \n Html / css"
            },
            {
                link : "http://nnnbdnnn.dothome.co.kr/before/matx/index.html",
                imgUrl : "../assets/img/page5-1.jpg",
                title : "matx",
                desc :"PC (responsive) \n Html / scss / jquery"
            },
            {
                link : "http://nnnbdnnn.dothome.co.kr/uddesign/uddesign.html",
                imgUrl : "../assets/img/page6-1.jpg",
                title : "united design",
                desc :"PC (responsive) \n Html / css / jquery"
            },
            {
                link : "http://nnnbdnnn.dothome.co.kr/3dukdak-studyda/3bunddukdak.html",
                imgUrl : "../assets/img/page8.jpg",
                title : "3분 뚝닭",
                desc :"PC \n Html / css / jquery"
            },
            {
                link : "http://nnnbdnnn.dothome.co.kr/dongsuh/dongsuh.html",
                imgUrl : "../assets/img/page13.jpg",
                title : "동서식품",
                desc :"PC \n Html / css"
            },
            {
                link : "http://nnnbdnnn.dothome.co.kr/ansonybebe/ansonybebe.html",
                imgUrl : "../assets/img/page12.jpg",
                title : "ansony",
                desc :"PC \n Html / css"
            },
        ];
        const renderWeb = webWorks.map(function (web, index) {
            const desc = web.desc.split('\n');
            function lineWrap(lines) {
                return lines.map(function (line, index) {
                    return index < desc.length - 1 ? line + '<br>' : line;
                }).join('');
            }
            return `
                        <li class="portfolio-work-link item2-link${index + 1}">
                            <a href="${web.link}" target="_blank"></a>
                            <div class="link-img"><img src="${web.imgUrl}" alt=""></div>
                            <div class="screen">
                                <div class="icon"><i class="material-icons">exit_to_app</i></div>
                                <span class="text-tit">${web.title}</span>
                                <p>${lineWrap(desc)}</p>
                            </div>
                        </li>
            `
        });

        const designWorks = [
            {
                link : "http://nnnbdnnn.dothome.co.kr/before/img/d-pape1.jpg",
                imgUrl : "../assets/img/d-pape1.jpg",
                title : "blade & soul",
                desc :"event popup \n design"
            },
            {
                link : "http://nnnbdnnn.dothome.co.kr/before/img/d-pape2.jpg",
                imgUrl : "../assets/img/d-pape2.jpg",
                title : "Re:NK",
                desc :"event popup \n design"
            },
            {
                link : "http://nnnbdnnn.dothome.co.kr/before/img/d-pape8.jpg",
                imgUrl : "../assets/img/d-pape8.jpg",
                title : "edunavi",
                desc :"book \n cover design"
            },
            {
                link : "http://cnptstudio.com",
                imgUrl : "../assets/img/d-pape11-1.jpg",
                title : "pt studio",
                desc :"Company Homepage \n design"
            },
            {
                link : "https://www.edunavi.kr/mobile/webzine.do",
                imgUrl : "../assets/img/d-pape9.jpg",
                title : "edunavi",
                desc :"webzine \n design"
            },
            {
                link : "http://nnnbdnnn.dothome.co.kr/before/img/d-pape4.jpg",
                imgUrl : "../assets/img/d-pape4.jpg",
                title : "Photoshop skill",
                desc :"명암 스킬 \n 포토샵으로 필터를 사용하지 않고 직접 표현"
            },
            {
                link : "http://c-gagu.com",
                imgUrl : "../assets/img/d-pape6.jpg",
                title : "choice furniture",
                desc :"cafe24 solution \n design / MD"
            },
            {
                link : "http://www.gagujs.co.kr",
                imgUrl : "../assets/img/d-pape7.jpg",
                title : "joas furniture",
                desc :"shopping mall \n design / MD"
            },
            {
                link : "http://www.bestgagu.com",
                imgUrl : "../assets/img/d-pape12.jpg",
                title : "bestgagu",
                desc :"shopping mall \n design"
            },
        ];
        const renderDesign = designWorks.map(function (design, index) {
            const desc = design.desc.split('\n');
            function lineWrap(lines) {
                return lines.map(function (line, index) {
                    return index < desc.length - 1 ? line + '<br>' : line;
                }).join('');
            }
            return `
                        <li class="portfolio-work-link item2-link${index + 1}">
                            <a href="${design.link}" target="_blank"></a>
                            <div class="link-img"><img src="${design.imgUrl}" alt=""></div>
                            <div class="screen">
                                <div class="icon"><i class="material-icons">exit_to_app</i></div>
                                <span class="text-tit">${design.title}</span>
                                <p>${lineWrap(desc)}</p>
                            </div>
                        </li>
            `
        })

        $('.portfolio-web').html(renderWeb);
        $('.portfolio-design').html(renderDesign);

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
