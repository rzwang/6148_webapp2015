// VALIDATING PASSWORDS
var password = $("#password");
var password2 = $("#password2");

// password.keyup(function() {
//     if (password2.val() === "" || password2.val() !== password.val()) {
//         password.removeClass("correct").addClass("error");
//         password2.removeClass("correct").addClass("error");
//     } else {
//         password.removeClass("error").addClass("correct");
//         password2.removeClass("error").addClass("correct");
//     }
// });

// password2.keyup(function() {
//     if (password2.val() === "" || password2.val() !== password.val()) {
//         password.removeClass("correct").addClass("error");
//         password2.removeClass("correct").addClass("error");
//     } else {
//         password.removeClass("error").addClass("correct");
//         password2.removeClass("error").addClass("correct");
//     }
// });

// password.blur(function() {
//     if (password2.val() === "" || password2.val() !== password.val()) {
//         password.removeClass("correct").addClass("error");
//         password2.removeClass("correct").addClass("error");
//     } else {
//         password.removeClass("correct").removeClass("error");
//         password2.removeClass("correct").removeClass("error");
//     }
// });

// password2.blur(function() {
//     if (password2.val() === "" || password2.val() !== password.val()) {
//         password.removeClass("correct").addClass("error");
//         password2.removeClass("correct").addClass("error");
//     } else {
//         password.removeClass("correct").removeClass("error");
//         password2.removeClass("correct").removeClass("error");
//     }
// });

password2.keyup(function() {
    if (password2.val() !== '') {
        if (password2.val() !== password.val()) {
            // password2.removeClass('correct').addClass('error');
            password2.addClass('error');
        } 
        else {
            password2.removeClass('error').addClass('correct');
        };
    };
});

password2.blur(function() {
    password2.removeClass('correct');
});