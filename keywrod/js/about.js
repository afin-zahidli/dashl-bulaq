$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 40,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    nav: true,
    dots: false,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})