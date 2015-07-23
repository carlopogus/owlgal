var owl = $('.container');

owl.owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'slideInDown',
    loop: true,
    dots: true,
    //autoplay: true,
    navigation: true,
    lazyLoad:true,
    autoHeight: true,
    items:1,
    margin:0,
    stagePadding:0,
    smartSpeed:450
});
