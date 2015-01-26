$(function(){

    var phoneformat = /\(\d{3}\) \d{3}-\d{4}/;
    var firstname = $('#firstname');
    var lastname = $('#lastname');
    var phone = $('#phone');
    var password = $('#password');
    var newpassword = $('#newpassword');
    var newpassword2 = $('#newpassword2');

    $('form').submit(function() {
        var isFormFilled = true;
        $.each([firstname, lastname, phone, password], function() {
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
        
        return isFormFilled;
    });

    $('input').blur(function() {
        if ($.trim($(this).val()).length == 0) {
            $(this).addClass('error');
        };
    });

    $('input').keyup(function() {
        $(this).removeClass('error');
    });

    $('input').mousedown(function() {
        $(this).removeClass('error');
    });

    newpassword2.keyup(function() {
        if (newpassword2.val() !== '') {
            if (newpassword2.val() !== newpassword.val()) {
                newpassword2.removeClass('success').addClass('error');
            } else {
                newpassword2.removeClass('error').addClass('success');
            };
        };
    });

    newpassword2.blur(function() {
        newpassword2.removeClass('success');
    });
});
