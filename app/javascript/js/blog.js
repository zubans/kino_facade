(function($) {
    "use strict";



    //script for flickr in widget
    $('#flickr').jflickrfeed({
        limit: 8,
        qstrings: {
            id: '142951871@N02'
        },
        itemTemplate: '<li>' + '<a href="{{image_b}}" class="popup-flickr"><img src="{{image_q}}" alt="{{title}}" /></a>' + '</li>'
    });

    //isotope setting(blog masonry)
    var $container = $('.blog-mason');
    $container.imagesLoaded(function() {
        $container.isotope();
    });
	
	$(window).on("load", function() { // makes sure the whole site is loaded
		// script popup image
		$('.popup-flickr').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	});

	//slider for blog slider
	$('.blog-slider').slick({
        autoplay: true,
        dots: false,
        nextArrow: '<i class="fa fa-arrow-right"></i>',
        prevArrow: '<i class="fa fa-arrow-left"></i>',
        speed: 800,
        fade: true,
        pauseOnHover: false,
        pauseOnFocus: false
    });
	
	//slider for home with blog post slider
    $('.home-blog-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: '<i class="fa fa-arrow-right"></i>',
        prevArrow: '<i class="fa fa-arrow-left"></i>',
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


})(jQuery);