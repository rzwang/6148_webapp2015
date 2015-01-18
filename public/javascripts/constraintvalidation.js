window.onload = function() {
    document.getElementById('password').onchange = validatePassword;
    document.getElementById('confirmpw').onchange = validatePassword;
}

function validatePassword() {
    var confirmpw = document.getElementById('confirmpw').value;
    var pw = document.getElementById('password').value;

    if (pw !== confirmpw)
        document.getElementById('confirmpw').setCustomValidity("Passwords don't match");
    else
        document.getElementById('confirmpw').setCustomValidity('');
}