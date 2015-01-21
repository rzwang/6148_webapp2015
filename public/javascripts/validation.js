// $.webshims.polyfill();

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

//EMAIL VALIDATION
// var email = $("#username");
// email.blur(function() {
//     if ($.trim(email.val()){
//         if (email !== /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) {
//             alert('Input valid email.');
//         }
//     })
// });


// PREVENT SUBMISSION
$("form").submit(function() {
    var isFormFilled = false;
    $("input").each(function() {
        if ($.trim($(this).val()).length === 0) {
            $(this).addClass("error");
        } else {
            $(this).removeClass("error");
            isFormFilled = true;
        }
    });
    return isFormFilled;
});

// Change underlinings
$("input").keydown(function () {
    if ($.trim($(this).val()).length !== 0) {
        $(this).removeClass("error");
    };
}
//===============================================================================
// VALIDATING PASSWORDS

var password = $("#password");
var password2 = $("#password2");

password.blur(function() {
    if (password.val() !== "" && password2.val() !== "") {
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
    if (password.val() !== "" && password2.val() !== "") {
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
    if (password.val() != "" && password2.val() != "") {
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
    if (password.val() != "" && password2.val() != "") {
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