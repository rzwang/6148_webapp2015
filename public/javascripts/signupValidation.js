// VALIDATING PHONE NUMBER
var telInput = $("#phone");

// initialise plugin
telInput.intlTelInput({
  utilsScript: "../../lib/libphonenumber/build/utils.js"
});

// on blur: validate
telInput.blur(function() {
  if ($.trim(telInput.val()).length !== 0) {
    if (telInput.intlTelInput("isValidNumber")) {
        telInput.removeClass("error").addClass("correct");
    } else {
        telInput.removeClass("correct").addClass("error");
    }
  }
});

telInput.keyup(function() {
  if ($.trim(telInput.val()).length !== 0) {
    if (telInput.intlTelInput("isValidNumber")) {
        telInput.removeClass("error").addClass("correct");
    } else {
        telInput.removeClass("correct").addClass("error");
    }
  }
});

// VALIDATING PASSWORDS   
var password = $("#password");
var password2 = $("#password2");

password.keyup(function() {
    if (password2.val() === "" || password2.val() !== password.val()) {
        password.removeClass("correct").addClass("error");
        password2.removeClass("correct").addClass("error");
    } else {
        password.removeClass("error").addClass("correct");
        password2.removeClass("error").addClass("correct");
    }
});

password2.keyup(function() {
    if (password2.val() === "" || password2.val() !== password.val()) {
        password.removeClass("correct").addClass("error");
        password2.removeClass("correct").addClass("error");
    } else {
        password.removeClass("error").addClass("correct");
        password2.removeClass("error").addClass("correct");
    }
});

password.blur(function() {
    if (password2.val() === "" || password2.val() !== password.val()) {
        password.removeClass("correct").addClass("error");
        password2.removeClass("correct").addClass("error");
    } else {
        password.removeClass("correct").removeClass("error");
        password2.removeClass("correct").removeClass("error");
    }
});

password2.blur(function() {
    if (password2.val() === "" || password2.val() !== password.val()) {
        password.removeClass("correct").addClass("error");
        password2.removeClass("correct").addClass("error");
    } else {
        password.removeClass("correct").removeClass("error");
        password2.removeClass("correct").removeClass("error");
    }
});