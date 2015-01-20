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

    $('#phone').mask('(000) 000-0000');
    $('#time').mask('00/00/00 00:00');
});

window.setTimeout(function() {
    $('#alert').fadeTo(1000, 0, function() {
        $(this).remove();
    });
}, 3000);
