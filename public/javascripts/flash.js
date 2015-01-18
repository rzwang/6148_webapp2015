window.setTimeout(function() {
    $("#alert").fadeTo(1000, 0, function() {
        $(this).remove();
    });
}, 3000);

// var $email = $("#email"); // refers to the jQuery object representation of the dom object
// var email_field = $("#email").get(0); // refers to the dom object itself