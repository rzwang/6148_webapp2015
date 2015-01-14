$(document).ready(function(){

    function adjustWindow(){
     
        // Get window size
        winH = $window.height();
        winW = $window.width();
         
        // Keep minimum height 550
        if(winH <= 550) {
            winH = 550;
        }
         
        // Init Skrollr for 768 and up
        if(winW >= 768) {
            var s = skrollr.init({
                forceHeight: false
            });
            // Resize our slides
            $slide.height(winH);
     
            s.refresh($('.homeSlide'));
     
        } else {
            var s = skrollr.init();
            s.destroy();
        }
     
        // Check for touch
        if(Modernizr.touch) {
            var s = skrollr.init();
            s.destroy();
        }
    };

    function initAdjustWindow() {
        return {
            match : function() {
                adjustWindow();
            },
            unmatch : function() {
                adjustWindow();
            }
        };
    };

    enquire.register("screen and (min-width : 768px)", initAdjustWindow(), false);
});

$(function(){
    $(".typed").typed({
        strings: ["<h3>the airport.", "<h3>dinner.", "<h3>the movies.", "<h3>to work.", "<h3>to a concert."],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 2000,
        loop: true,
        showCursor: false,
        // contentType: 'text',
    });
});
