// Validation for each request

// PREVENT SUBMISSION
$("form").submit(function() {
    var isFormFilled = true;
    $("input").each(function() {
        if ($(this).hasClass("error")){
            isFormFilled = false;
        } else if ($.trim($(this).val()).length === 0) {
            $(this).addClass("error");
            isFormFilled = false;
        } else {
            $(this).removeClass("error");
        }
    });

    return isFormFilled;
});

// Change underlinings
$("input").keyup(function () {
    if ($.trim($(this).val()).length !== 0) {
        $(this).removeClass("error");
    };
});

