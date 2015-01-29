<<<<<<< HEAD
$('li').hover(function() {
        $(this).find('#itinerary').hide();
        $(this).find('#info').show();
    }, function() {
        $(this).find('#info').hide();
        $(this).find('#itinerary').show();
});


=======
$(function(){

    $('li').hover(function() {
        $(this).find('.result').fadeOut('100, ease, false')
        $(this).find('.contact').fadeIn('100, ease, false')
    }, function() {
        $(this).find('.contact').fadeOut('100, ease, false')
        $(this).find('.result').fadeIn('100, ease, false')
    });
});
>>>>>>> 1e6716d595a22c16fa635152d37d4dc8cd4f9f00
