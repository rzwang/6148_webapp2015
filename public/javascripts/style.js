$(document).ready(function(){
    $(this).scrollTop(0);

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

    // PREVENT SUBMISSION
    $("form").submit(function() {
        var isFormFilled = true;
        $("input").each(function() {
            if ($.trim($(this).val()).length === 0) {
                $(this).addClass("error");
                isFormFilled = false;
            }
            if ($.trim($(this).val()).length === 0 && $(this).hasClass("error")){
                isFormFilled = false;
            }
            else {
                $(this).removeClass("error");
            }
        });

        return isFormFilled;
    });

    // Change underlinings
    $("input").blur(function () {
        $(this).removeClass("error");
    }); 

    $("input").keydown(function () {
        $(this).removeClass("error");
    }); 

    $("input").mousedown(function () {
        $(this).removeClass("error");
    });
});

window.setTimeout(function() {
    $("#alert").fadeTo(1000, 0, function() {
        $(this).remove();
    });
}, 3000);
