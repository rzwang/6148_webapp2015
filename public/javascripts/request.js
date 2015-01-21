$(document).ready(function(){    

    $('#date').pickadate({
        format: 'm/d/yy',
        formatSubmit: 'ddmmyyyy',
        hiddenName: true,
        min: true
    });
    $('#time').pickatime({
        format: 'h:i A',
        formatSubmit: 'HHi',
        hiddenName: true,
        interval: 15
    });
});
