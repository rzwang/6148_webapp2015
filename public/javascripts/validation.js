$.webshims.polyfill();

// VALIDATING PHONE NUMBER
// $("mobile-number").intlTelInput();
var telInput = $("#phone"),

// // initialise plugin
telInput.intlTelInput({
  utilsScript: "../lib/libphonenumber/build/utils.js"
});

// on keydown: validate
telInput.keydown(function() {
  if ($.trim(telInput.val())) {
    if (telInput.intlTelInput("isValidNumber")) {
        telInput.addClass("success");

    } else {
        telInput.addClass("error");
    }
  }
});

// on blur: reset
// telInput.blur(function() {
//   telInput.removeClass("erorr");
// });

//===============================================================================
// VALIDATING PASSWORDS

var form = document.getElementById("signupform");
// form.noValidate = true;

// // set handler to validate the form
// // onsubmit used for easier cross-browser compatibility
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

$("#signupform").validate({
    rules: {
        firstName: "required",
        lastName: "required",
        username: {
            required: true,
            email: true
        },
        password2: {
            equalTo: "#password"
        },
    },

    messages: {
        firstName: "Please specify your first name",
        lastName: "Please specify your last name",
        username: {
            required: "We need your email address to confirm your sign up.",
            email: "Your email address must be in the form of example@example.com"
        },
        password2: {
            equalTo: "Passwords must match!!"
        }
    }



    // showErrors: function(errorMap, errorList) {
    //     $.each(this.validElements(), function(index, element) {
    //         var $element = $(element);

    //         $element.data("title", "")
    //         .removeClass("error")
    //         .tooltip("destroy");
    //     });

    //     $.each(errorList, function(index, error) {
    //         var $element = $(error.element);
    //         $element.tooltip("destroy")
    //         .data("title", error.message)
    //         .addClass("error")
    //         .tooltip();
    //     });
    // },

    // submitHandler: function(form) {
    //     alert("This is a valid form!");
    // }
});


// =================
// Check that passwords match
// var password = document.getElementById('password');
// var password2 = document.getElementById('password2');
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