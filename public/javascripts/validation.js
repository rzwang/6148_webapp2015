<<<<<<< HEAD
$.webshims.polyfill();

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

//===============================================================================
// VALIDATING PASSWORDS

var password = $("#password");
var password2 = $("#password2");

password2.blur(function() {
    if (password.val() !== "" && password2.val() !== "") {
        if (password2.val() !== password.val()) {
            // console.log(password2.value);
            password.addClass("error");
            password2.addClass("error");
        } else {
            // console.log(password2.value);
            password.addClass("correct");
            password2.addClass("correct");
        }
    } else {
        password.removeClass("error");
        password2.removeClass("error");
        // password.removeClass("success");
        // password2.removeClass("success");
    }
});

// password2.keyup(function() {
//     if (password.val() != "" && password2.val() != "") {
//         if (password2.val() != password.val()) {
//             // console.log(password2.value);
//             password.addClass("error");
//             password2.addClass("error");
//         } else {
//             // console.log(password2.value);
//             password.addClass("success");
//             password2.addClass("success");
//         }
//     } else {
//         password.removeClass("error");
//         password2.removeClass("error");
//         // password.removeClass("success");
//         // password2.removeClass("success");
//     }
// });

password.keydown(function() {
  password.removeClass("error");
  password2.removeClass("error");
});

password2.keydown(function() {
  password.removeClass("error");
  password2.removeClass("error");
=======
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
>>>>>>> 8125bab397129dbc45b5ca953055cc5aabca72f2
});