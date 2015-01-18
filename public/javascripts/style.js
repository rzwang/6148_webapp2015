$(document).ready(function(){

    function adjustWindow(){
        var winH = $(window).height();
        var winW = $(window).width();

        if(winW >= 768) {
            var s = skrollr.init();
        } else {
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
        strings: ["<h3>the airport.", "<h3> work.", "<h3>a concert.", "<h3>anywhere."],
        typeSpeed: 40,
        backSpeed: 20,
        startDelay: 1000,
        backDelay: 1500,
        showCursor: false,
    });
});
