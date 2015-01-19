$.webshims.polyfill();

// $("mobile-number").intlTelInput();

var telInput = $("#phone"),
  errorMsg = $("#error-msg"),
  validMsg = $("#valid-msg");

// initialise plugin
telInput.intlTelInput({
  utilsScript: "../../lib/libphonenumber/build/utils.js"
});

// on blur: validate
telInput.blur(function() {
  if ($.trim(telInput.val())) {
    if (telInput.intlTelInput("isValidNumber")) {
      validMsg.removeClass("hide");
    } else {
      telInput.addClass("error");
      errorMsg.removeClass("hide");
      validMsg.addClass("hide");
    }
  }
});

// on keydown: reset
telInput.keydown(function() {
  telInput.removeClass("error");
  errorMsg.addClass("hide");
  validMsg.addClass("hide");
});

// var form = document.getElementById("signupform");
// form.noValidate = true;

// // set handler to validate the form
// // onsubmti used for easier cross-browser compatibility
// form.onsubmit = validateForm;

// function validateForm(event) {
//     // fetch cross-browser event object and form node
//     event = (event ? event : window.event);
//     var
//         form = (event.target ? event.target : event.srcElement),
//         f, field, formvalid = true;

//     // loop all fields
//     for (f = 0; f < form.elements; f++) {
//         // get field
//         field = form.elements[f];

//         // ignore buttons, fieldsets, etc.
//         if (field.nodeName !== "INPUT" && field.nodeName !== "TEXTAREA" && field.nodeName !== "SELECT") 
//             continue;

//         // is native browser validation available?
//         if (typeof field.willValidate !== "undefined"){
//             // native validation available
//             if (field.nodeName === "INPUT" && field.type !== field.getAttribute("type")){
//                 // input type not supported - use legacy JS validation
//                 field.setCustomVaildity(LegacyValidation(field)) ? "" : "error");
//             }
//             field.checkValidity();
//         }
//         else {
//             // native validation not available
//             field.validity = field.valitidy || {};
//             field.validity.valid = LegacyValidation(field);
//         }

//         if (field.validity.valid) {
//             // remove error styles and messages
//         }
//     }
// }

// $("#signupform").validate({
//     showErrors: function(errorMap, errorList) {
//         $.each(this.validElements(), function(index, element) {
//             var $element = $(element);

//             $element.data("title", "")
//             .removeClass("error")
//             .tooltip("destroy");
//         });

//         $.each(errorList, function(index, error) {
//             var $element = $(error.element);
//             $element.tooltip("destroy")
//             .data("title", error.message)
//             .addClass("error")
//             .tooltip();
//         });
//     },

//     submitHandler: function(form) {
//         alert("This is a valid form!");
//     }
// });


// =================
// Check that passwords match
// var password = document.getElementById('password');
// var password2 = document.getElementById('password2');
// var email = document.getElementById('email');
// var phone = document.getElementById('phone');
// var form = document.getElementById("signupform");

// function validatePassword() {
//     if (password.value !== password2.value) {
//         password2.setCustomValidity("Passwords must match.");
//         updateErrorMessage();
//     }
//     else {
//         password2.setCustomValidity('');
//     }
// };

// var updateErrorMessage = function() {
//     form.getElementsByClassName('error')[0].innerHTML = password2.validationMessage;
// };

// password.addEventListener('change', validatePassword, false);
// password2.addEventListener('change', validatePassword, false);

// form.addEventListener('submit', function(event) {
//     if (form.classList) form.classList.add('submitted');
//     validatePassword();
//     if (!this.checkValidity()){
//         event.preventDefault();
//         //Display error message
//         updateErrorMessage();
//         password2.focus();
//     }
// }, false);

// window.onload = function() {
//     password.onchange = validatePassword;
//     password2.onchange = validatePassword;
// }