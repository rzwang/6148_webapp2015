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