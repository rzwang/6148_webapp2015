// $.webshims.polyfill();

$(document).ready(function() {
    $('#phone').mask('(000)-000-0000');
});

// VALIDATING PHONE NUMBER
// $("#phone").intlTelInput();
var telInput = $("#phone");

// initialise plugin
telInput.intlTelInput({
  utilsScript: "../../lib/libphonenumber/build/utils.js"
});

// on blur: validate
telInput.blur(function() {
  if ($.trim(telInput.val())) {
    if (telInput.intlTelInput("isValidNumber")) {
        telInput.addClass("correct");
    } else {
        telInput.addClass("error");
    }
  }
});

// on keydown: reset
telInput.keydown(function() {
  telInput.removeClass("error");
});


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


// VALIDATING PASSWORDS
var password = $("#password");
var password2 = $("#password2");

password.blur(function() {
    if (password.val() !== "" || password2.val() !== "") {
        if (password2.val() !== password.val()) {
            password.addClass("error");
            password2.addClass("error");
            password.removeClass("correct");
            password2.removeClass("correct");
        } else {
            password.addClass("correct");
            password2.addClass("correct");
            password.removeClass("error");
            password2.removeClass("error");
        }
    } else {
        password.removeClass("error");
        password2.removeClass("error");
        password.removeClass("correct");
        password2.removeClass("correct");
    }
});

password2.blur(function() {
    if (password.val() !== "" || password2.val() !== "") {
        if (password2.val() !== password.val()) {
            password.addClass("error");
            password2.addClass("error");
            password.removeClass("correct");
            password2.removeClass("correct");
        } else {
            password.addClass("correct");
            password2.addClass("correct");
            password.removeClass("error");
            password2.removeClass("error");
        }
    } else {
        password.removeClass("error");
        password2.removeClass("error");
        password.removeClass("correct");
        password2.removeClass("correct");  
    }
});

password.keyup(function() {
    if (password.val() != "" || password2.val() != "") {
        if (password2.val() != password.val()) {
            password.addClass("error");
            password2.addClass("error");
            password.removeClass("correct");
            password2.removeClass("correct");
        } else {
            password.addClass("correct");
            password2.addClass("correct");
            password.removeClass("error");
            password2.removeClass("error");
        }
    } else {
        password.removeClass("error");
        password2.removeClass("error");
        password.removeClass("correct");
        password2.removeClass("correct");
    }
});

password2.keyup(function() {
    if (password.val() != "" || password2.val() != "") {
        if (password2.val() != password.val()) {
            password.addClass("error");
            password2.addClass("error");
            password.removeClass("correct");
            password2.removeClass("correct");
        } else {
            password.addClass("correct");
            password2.addClass("correct");
            password.removeClass("error");
            password2.removeClass("error");
        }
    } else {
        password.removeClass("error");
        password2.removeClass("error");
        password.removeClass("correct");
        password2.removeClass("correct");   
    }
});

password.keydown(function() {
  password.removeClass("error");
  password2.removeClass("error");
  password.removeClass("correct");
  password2.removeClass("correct");
});

password2.keydown(function() {
  password.removeClass("error");
  password2.removeClass("error");
  password.removeClass("correct");
  password2.removeClass("correct");
});