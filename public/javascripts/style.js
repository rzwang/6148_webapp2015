$(document).ready(function(){

    $(this).scrollTop(0);

    if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
        skrollr.init({
            forceHeight: false
        });

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
    };
});

$(function(){
    
    if ($('.typed').length) {
        $('.typed').typed({
            strings: ['<h3>the airport.', '<h3>work.', '<h3>a concert.', '<h3>anywhere.'],
            typeSpeed: 40,
            backSpeed: 20,
            startDelay: 500,
            backDelay: 1500,
            showCursor: false,
        });
    };

    if ($('#phone').length) {
        $('#phone').mask('(000) 000-0000');
    };

    $('input[readonly]').hover(function() {
        $(this).css('cursor','text');
    });
});

<<<<<<< HEAD
// window.setTimeout(function() {
//     $('#alert').fadeTo(1000, 0, function() {
//         $(this).remove();
//     });
// }, 3000);
=======
window.setTimeout(function() {
    $('#alert').fadeTo(300, 0, function() {
        $(this).remove();
    });
}, 5000);
>>>>>>> 1e6716d595a22c16fa635152d37d4dc8cd4f9f00
