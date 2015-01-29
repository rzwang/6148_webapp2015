$(function(){

    $('li').hover(function() {
        $(this).find('.result').fadeOut('100, ease, false')
        $(this).find('.contact').fadeIn('100, ease, false')
    }, function() {
        $(this).find('.contact').fadeOut('100, ease, false')
        $(this).find('.result').fadeIn('100, ease, false')
    });
});
