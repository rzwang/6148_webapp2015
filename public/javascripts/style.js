$(document).ready(function(){

    if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
        skrollr.init({
            forceHeight: false
        });
    }

    $('a').hover(function(){
        $('hr.line').css('width','50%');
        },function(){
        $('hr.line').css('width','30%');
    });

    $('button').hover(function(){
        $('hr.line').css('width','50%');
        },function(){
        $('hr.line').css('width','30%');
    });

});

$(function(){
    
    $('.typed').typed({
        strings: ['<h3>the airport.', '<h3>work.', '<h3>a concert.', '<h3>anywhere.'],
        typeSpeed: 40,
        backSpeed: 20,
        startDelay: 500,
        backDelay: 1500,
        showCursor: false,
    });

    // MASKS
    $('#phone').mask('(000) 000-0000');
    $('#time').mask('00/00/00 00:00');

    // FORM VALIDATION
    var phoneformat = /\(\d{3}\) \d{3}-\d{4}/;
    var timeformat = /(0[1-9]|1[0-2])\/(0[1-9]|[1-2]\d|3[0-1])\/\d{2} (0[1-9]|1[0-2]):([0-5]\d)/;
    var time = $('#time');
    var phone = $('#phone');

    $('form').submit(function() {
        var isFormFilled = true;
        $('input').each(function() {
            if ($.trim($(this).val()).length == 0) {
                $(this).addClass('error');
                $(this).blur();
                isFormFilled = false;
            } else {
                $(this).removeClass('error');
                $(this).blur();
            };
        });
        if (phone.length && !phoneformat.test(phone.val())) {
            phone.addClass('error');
            phone.blur();
            isFormFilled = false;
        };
        if (time.length && !timeformat.test(time.val())) {
            time.addClass('error');
            time.blur();
            isFormFilled = false;
        };
        return isFormFilled;
    });

    $('input').each(function() {
        $(this).keyup(function() {
            if ($(this).hasClass('error')) {
                $(this).removeClass('error');
            };
        });
    });
});

window.setTimeout(function() {
    $('#alert').fadeTo(1000, 0, function() {
        $(this).remove();
    });
}, 3000);
