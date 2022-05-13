    //Banner
    $('#banner').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            1200: {
                items: 1,
            }
        }
    });


      $('#testimony').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>','<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        autoplayTimeout:10000,
        margin: 0,
        responsive: {
            0: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        }
    });

    $('#gallery').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>','<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        autoplayTimeout:10000,
        margin: 0,
        responsive: {
            0: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        }
    });

    //Four Slider
    $('#four').owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplay: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
                autoplay: true,
                loop: true,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });


     //Banner
        $('#two').owlCarousel({
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>','<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
            dots: false,
            autoplayHoverPause: true,
            autoplay: false,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                },
            576: {
                items: 1,
            },
            768: {
                items: 2,
            },
                1200: {
                    items: 2,
                }
            }
        });

        var windows = $(window);
        var screenSize = windows.width();
        var sticky = $('.header-area');
        var $html = $('html');
        var $body = $('body');
    
        windows.on('scroll', function () {
            var scroll = windows.scrollTop();
            var headerHeight = sticky.height();
    
            if (screenSize >= 320) {
                if (scroll < headerHeight) {
                    sticky.removeClass('is-sticky');
                } else {
                    sticky.addClass('is-sticky');
                }
            }
    
        });