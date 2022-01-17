(function($) {
    "use strict";


	//onepage Page scrolling
    var menuheigt = $(".for-sticky").height();
    $('.home-section .menu-box .navigation').onePageNav({
        filter: ':not(.external)',
        scrollThreshold: 0.25,
        scrollOffset: menuheigt
    });


})(jQuery);