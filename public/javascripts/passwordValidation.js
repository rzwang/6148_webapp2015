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