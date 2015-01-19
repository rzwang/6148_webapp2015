$(document).ready(function(){

    if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
        skrollr.init({
            forceHeight: false
        });
    }

    $("a").hover(function(){
        $("hr.line").css("width","50%");
        },function(){
        $("hr.line").css("width","30%");
    });

    $("button").hover(function(){
        $("hr.line").css("width","50%");
        },function(){
        $("hr.line").css("width","30%");
    });

    $("#phone").mask("(000) 000-0000");
    $("#time").mask("00/00/0000 00:00");
});

$(function(){
    $(".typed").typed({
        strings: ["<h3>the airport.", "<h3>work.", "<h3>a concert.", "<h3>anywhere."],
        typeSpeed: 40,
        backSpeed: 20,
        startDelay: 500,
        backDelay: 1500,
        showCursor: false,
    });
});

window.setTimeout(function() {
    $("#alert").fadeTo(1000, 0, function() {
        $(this).remove();
    });
}, 3000);

// var $email = $("#email"); // refers to the jQuery object representation of the dom object
// var email_field = $("#email").get(0); // refers to the dom object itself