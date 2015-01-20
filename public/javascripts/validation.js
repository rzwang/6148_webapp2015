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

//EMAIL VALIDATION
// var email = $("#username");
// email.blur(function() {
//     if ($.trim(email.val()){
//         if (email !== /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) {
//             alert('Input valid email.');
//         }
//     })
// });


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
});