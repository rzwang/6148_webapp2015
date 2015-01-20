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

    // MASKS
    $("#phone").mask("(000) 000-0000");
    $("#time").mask("00/00/00 00:00");

    // FORM VALIDATION
    var phoneformat = /\(\d{3}\) \d{3}-\d{4}/;
    var timeformat = /[0-1][1-9]\/[0-3][1-9]\/[0-9][0-9] [0-2][0-9]:[0-5][0-9]/;
    var time = $("#time");
    var phone = $("#phone");

    $("form").submit(function() {
        var isFormFilled = true;
        $("input").each(function() {
            if ($.trim($(this).val()).length == 0) {
                $(this).addClass("error");
                isFormFilled = false;
            } else {
                $(this).removeClass("error");
            }
        });
        if (!phoneformat.test(phone.val())) {
            phone.addClass("error");
            isFormFilled = false;
        };
        if (!timeformat.test(time.val())) {
            time.addClass("error");
            isFormFilled = false;
        };
        return isFormFilled;
    });

    $("input").each(function() {
        $(this).keyup(function() {
            if ($(this).hasClass("error")) {
                $(this).removeClass("error");
            }
        });
    });
});

window.setTimeout(function() {
    $("#alert").fadeTo(1000, 0, function() {
        $(this).remove();
    });
}, 3000);
