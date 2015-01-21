$(function(){    

    var dateformat = /(0[1-9]|1[0-2])\/(0[1-9]|[1-2]\d|3[0-1])\/(1[5-9]|[2-9]\d)/;
    var timeformat = /(0[1-9]|1[0-2]):([0-5]\d)/;
    var date = $('#date');
    var time = $('#time');

    $('form').submit(function() {
        var isFormFilled = true;
        if (!timeformat.test(time.val())) {
            time.addClass('error');
            time.blur();
            isFormFilled = false;
        };
        if (!dateformat.test(date.val())) {
            date.addClass('error');
            date.blur();
            isFormFilled = false;
        };
        return isFormFilled;
    });
});
