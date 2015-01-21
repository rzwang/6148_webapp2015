$(document).ready(function(){    

    $('#date').pickadate({
        format: 'm/d/yy',
        formatSubmit: 'ddmmyyyy',
        hiddenName: true,
        min: true,
        // klass: {
        //     FOR FORMATTING
        // }
    });
    
    $('#time').pickatime({
        format: 'h:i A',
        formatSubmit: 'HHi',
        hiddenName: true,
        interval: 15,
        // klass: {
        //     FOR FORMATTING
        // }
    });
});
