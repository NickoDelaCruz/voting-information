$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $('#oldEnough').show();
    alert("Go Vote Today!");
  } else if (age === 18) {
    alert("Go Vote Today!");
    $('#oldEnough').show();
  } else {
    $('#notOldEnough').show();
  }
});
