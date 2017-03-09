/* Load splash screen */

$(function() {
  setTimeout(hideSplash, 2000);
});

function hideSplash() {
  $.mobile.changePage("#pageone", "fade");
}


/* global $,document,console,quizMaster */
// $(document).ready(function() {
	
// 	$(document).on("pageshow", "#quiz", function() {
// 		console.log("Page show");
// 		//initialize the quiz
// 		quizMaster.execute("q1.json", ".quizdisplay", function(result) {
// 			console.log("SUCESS CB");
// 			console.dir(result);	
// 		});
// 	});

// });