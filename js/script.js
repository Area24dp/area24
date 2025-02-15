(function ($) {
    "use strict";

    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(500)
        }
    }

    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var scrollLink = $('.scroll-to-top');
            if (windowpos >= 250) {
                siteHeader.addClass('fixed-header');
                scrollLink.fadeIn(300)
            } else {
                siteHeader.removeClass('fixed-header');
                scrollLink.fadeOut(300)
            }
        }
    }
    headerStyle();
    if ($('.main-header .navigation li.dropdown ul').length) {
        $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
        $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
            $(this).prev('ul').slideToggle(500)
        });
        $('.navigation li.dropdown > a').on('click', function (e) {
            e.preventDefault()
        })
    }
    if ($('.filter-list').length) {
        $('.filter-list').mixItUp({})
    }
    if ($('.count-box').length) {
        $('.count-box').appear(function () {
            var $t = $(this),
                n = $t.find(".count-text").attr("data-stop"),
                r = parseInt($t.find(".count-text").attr("data-speed"), 10);
            if (!$t.hasClass("counted")) {
                $t.addClass("counted");
                $({
                    countNum: $t.find(".count-text").text()
                }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function () {
                        $t.find(".count-text").text(Math.floor(this.countNum))
                    },
                    complete: function () {
                        $t.find(".count-text").text(this.countNum)
                    }
                })
            }
        }, {
            accY: 0
        })
    }
    if ($('.single-item-carousel').length) {
        $('.single-item-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: !0,
            dots: !1,
            smartSpeed: 700,
            autoplay: 500,
            navText: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 2
                }
            }
        })
    }
    if ($('.projects-carousel').length) {
        $('.projects-carousel').owlCarousel({
            loop: !0,
            margin: 30,
            nav: !1,
            dots: false,
            smartSpeed: 500,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        })
    }
    if ($('.sponsors-carousel').length) {
        $('.sponsors-carousel').owlCarousel({
            loop: !0,
            margin: 10,
            nav: !0,
            smartSpeed: 500,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                600: {
                    items: 3
                },
                800: {
                    items: 4
                },
                1024: {
                    items: 5
                }
            }
        })
    }
    if ($('.lightbox-image').length) {
        $('.lightbox-image').fancybox({
            openEffect: 'fade',
            closeEffect: 'fade',
            helpers: {
                media: {}
            }
        })
    }
    if ($('#contact-form').length) {
        $('#contact-form').validate({
            rules: {
                username: {
                    required: !0
                },
                email: {
                    required: !0,
                    email: !0
                },
                phone: {
                    required: !0,
                },
                subject: {
                    required: !0,
                },
                message: {
                    required: !0
                }
            }
        })
    }
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000)
        })
    }
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: !1,
            live: !0
        });
        wow.init()
    }
    $(window).on('scroll', function () {
        headerStyle()
    });
    $(window).on('load', function () {
        handlePreloader()
    })
})(window.jQuery)