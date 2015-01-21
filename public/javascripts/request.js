$(function(){    

    var timeformat = /(0[1-9]|1[0-2])\/(0[1-9]|[1-2]\d|3[0-1])\/\d{2} (0[1-9]|1[0-2]):([0-5]\d)/;
    var time = $('#time');

    $('form').submit(function() {
        var isFormFilled = true;
        if (time.length && !timeformat.test(time.val())) {
            time.addClass('error');
            time.blur();
            isFormFilled = false;
        };
        return isFormFilled;
    });
});
