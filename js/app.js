/* Load splash screen */

$(function() {
  setTimeout(hideSplash, 2000);
});

function hideSplash() {
  $.mobile.changePage("#pageone", "fade");
}


$("#stereo2").swipeleft(function() {
    $.mobile.changePage("menu.html");
    console.log("swiped");
});

