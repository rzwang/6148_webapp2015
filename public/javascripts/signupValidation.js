// VALIDATING PHONE NUMBER
// $("#phone").intlTelInput();

$(document).ready(function() {
    $("#phone").mask("(000) 000-0000");
});

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


// VALIDATING PASSWORDS
$(function(){    
var password = $("#password");
var password2 = $("#password2");

password.keyup(function() {
    if (password.val() === "" || password2.val() === "" || password2.val() !== password.val()) {
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
});

password2.keyup(function() {
    if (password.val() === "" || password2.val() === "" || password2.val() !== password.val()) {
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
});

password.blur(function() {
    if (password.val() === "" || password2.val() === "" || password2.val() !== password.val()) {
        password.addClass("error");
        password2.addClass("error");
        password.removeClass("correct");
        password2.removeClass("correct");
    } else {
        password.removeClass("error");
        password2.removeClass("error");
        password.removeClass("correct");
        password2.removeClass("correct");
    }
});

password2.blur(function() {
    if (password.val() === "" || password2.val() === "" || password2.val() !== password.val()) {
        password.addClass("error");
        password2.addClass("error");
        password.removeClass("correct");
        password2.removeClass("correct");
    } else {
        password.removeClass("error");
        password2.removeClass("error");
        password.removeClass("correct");
        password2.removeClass("correct");
    }
});
});