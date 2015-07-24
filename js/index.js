// var owl = $('.container');

// owl.owlCarousel({
//     animateOut: 'slideOutDown',
//     animateIn: 'slideInDown',
//     loop: true,
//     dots: true,
//     //autoplay: true,
//     navigation: true,
//     lazyLoad:true,
//     autoHeight: true,
//     items:1,
//     margin:0,
//     stagePadding:0,
//     smartSpeed:450
// });

(function ($) {

    var $gal = $('.owlgal');
    $('body').append('<div class="owlgal-overlay"><div class="owlgal-popup"><div class="owlgal-container"></div></div></div>');



    $gal.find('.gal-item').click(function(e){
        e.preventDefault();

        var $parent = $(this).parent('.owlgal');
        var this_index = $(this).index();
        var children = $parent.children('a');
        var owl = $('.owlgal-container');

        children.each(function(i){

            var href = $(this).attr('href');
            owl.append('<img class="owl-lazy" data-src="' + href + '" alt="" />');


        });

        $('.owlgal-overlay').show();

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


        //console.log(this_index);
        //console.log($parent.children('a'));

    });

    // $gal.eq(1).trigger('click');






})(jQuery);
