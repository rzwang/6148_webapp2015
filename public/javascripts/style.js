$(document).ready(function(){

    if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
        skrollr.init({
            forceHeight: false
        });
    }

    $("button").hover(function(){
        $("hr.sep").css("width","50%");
        },function(){
        $("hr.sep").css("width","30%");
    });
});

$(function(){
    $(".typed").typed({
        strings: ["<h3>the airport.", "<h3> work.", "<h3>a concert.", "<h3>anywhere."],
        typeSpeed: 40,
        backSpeed: 20,
        startDelay: 500,
        backDelay: 1500,
        showCursor: false,
    });
});
