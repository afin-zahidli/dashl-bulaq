$(function () {
  
  
    const nexticon  = '<img src="https://dashlibulag.az/img/right.svg"/>';
    const previcon  = '<img src="https://dashlibulag.az/img/left.svg"/>';
  
    const dotsicon = '<img />';
  

  
    $('.owl-carousel').owlCarousel({
        // stagePadding: 50,
        loop: true,
        margin: 0,
        nav: true,
        navText: [previcon , nexticon],
        items:1,
    })
})