$(document).ready(function(){

    $('#navbar .container-fluid').animate({
        top: "+=20",
        opacity: 1
    }, 1500);

    var s = skrollr.init({
        forceHeight: false,
        constants: {
            foobar: function() {
                return $(window).height() - 80;
            }
        }
    });
    $('body').css('height','auto');
});
