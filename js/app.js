/* Load splash screen */

$(function() {
  setTimeout(hideSplash, 2000);
});

function hideSplash() {
  $.mobile.changePage("#pageone", "fade");
  console.log("load splashscreen");
}

// Swipe Functions for page Navigation


$(document).on("pagecreate","#stereo",function(){
  $("body").on("swiperight",function(){
  	$.mobile.changePage("menu.html");
    console.log("You swiped menu!");

  });                       
});

// $(document).on("pagecreate","#menu-page",function(){
//   $("body").on("swiperight",function(){
//   	$.mobile.changePage("index.html");
//     console.log("You swiped to home!");

//   });                       
// });

