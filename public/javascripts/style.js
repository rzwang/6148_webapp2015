$(document).ready(function(){

// FIX RESPONSIVENESS
    // function adjustWindow(){
    //     winH = $(window).height();
    //     winW = $(window).width();

    //     if(winH <= 550) {
    //         winH=550;
    //     }

    //     if(winW >= 768) {
    //         var s = skrollr.init({
    //             forceHeight: false
    //         })(jQuery);
    //         $section.height(winH);
    //         s.refresh($('.main'));
    //     } else {
 
    //     // Init Skrollr
    //     var s = skrollr.init();
    //     s.destroy();
    //     }
    // }

    // if(Modernizr.touch) {
    //     var s = skrollr.init();
    //     s.destroy();
    // }

    (function($){
        var s = skrollr.init({
        });
    })(jQuery);
});

$(function(){
    $(".typed").typed({
        strings: ["<h3>the airport.", "<h3> work.", "<h3>a concert.", "<h3>anywhere."],
        typeSpeed: 40,
        backSpeed: 20,
        startDelay: 1000,
        backDelay: 1500,
        showCursor: false,
    });
});
