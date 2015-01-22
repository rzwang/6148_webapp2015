$(document).ready(function(){    

    $('#date').pickadate({
        format: 'm/d/yy',
        min: true,
        // klass: {
        //     FOR FORMATTING
        // }
    });
    
    $('#time').pickatime({
        format: 'h:i A',
        formatSubmit: 'HHi',
        interval: 15,
        hiddenSuffix: '_calc'
        // klass: {
        //     FOR FORMATTING
        // }
    });
});
