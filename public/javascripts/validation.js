$(function(){

    var phoneformat = /\(\d{3}\) \d{3}-\d{4}/;
    var phone = $('#phone');
    var password = $('#password');
    var password2 = $('#password2');
    var pickup = $('#pickup');
    var pickup_loc = $('#pickup_loc');
    var dropoff = $('#dropoff');
    var dropoff_loc = $('#dropoff_loc');

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
        
        if (password.length && password2.length) {
            if (password.val() !== password2.val()) {
                password2.addClass('error');
                isFormFilled = false;
            };
        };

        // FIX SMALL ERRORS!!!!!!!!!!!!!!!!!!!!!!!!
        if (pickup_loc.hasClass('error')) {
            pickup.addClass('error');
        };

        if (dropoff_loc.hasClass('error')) {
            dropoff.addClass('error');
        };

        return isFormFilled;
    });

    $('input').keyup(function() {
        $(this).removeClass('error');
    });

    $('input').mousedown(function() {
        $(this).removeClass('error');
    });

    password2.keyup(function() {
        if (password2.val() !== '') {
            if (password2.val() !== password.val()) {
                password2.removeClass('success').addClass('error');
            } else {
                password2.removeClass('error').addClass('success');
            };
        };
    });

    password2.blur(function() {
        password2.removeClass('success');
    });

});
