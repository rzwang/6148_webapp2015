// DATE VALIDATION
$(document).ready(function() {
    $('#time').mask('00/00/0000 00:00');
});

function checkTime(time)
{
    var minYear = (new Date()).getFullYear();
    // regular expression to match required date format
    re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})(\s)(\d{1,2}):(\d{2})$/;

    if(time.val() != '') {
      if(regs = time.val().match(re)) {
        return (regs[1] >= 1 && regs[1] <= 12) &&
               (regs[2] >= 1 && regs[2] <= 31) &&
               (regs[3] >= minYear) &&
               (regs[5] >= 1 && regs[5] <= 12) &&
               (regs[6] >= 0 && regs[6] <= 59);
      } 
      return false;
    }
    return false;
}

var time = $('#time');
// on blur: validate
time.blur(function() {
  if ($.trim(time.val())) {
    if (checkTime(time)) {
        time.addClass("correct");
    } else {
        time.addClass("error");
    }
  }
});

// on keydown: reset
time.keydown(function() {
  time.removeClass("error");
});