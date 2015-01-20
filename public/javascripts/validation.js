$(function(){

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
            $(this).removeClass('error');
        });
    });
});