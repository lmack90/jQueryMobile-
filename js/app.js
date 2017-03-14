/* Load splash screen */

// $(function() {
//   setTimeout(hideSplash, 2000);
// });

// function hideSplash() {
//   $.mobile.changePage("#pageone", "fade");
// }



// Swipe Functions for page Navigation


$(document).on("pagecreate","#stereo",function(){
  $("body").on("swiperight",function(){
  	$.mobile.changePage("menu.html");
    console.log("You swiped menu!");

  });                       
});

$(document).on("pagecreate","#video_sample",function(){
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

/**************************** VIDEO *******************************
*********************************************************************/

// Give the timeout enough time to avoid the race conflict.
var waitTime = 150;
var el="";

setTimeout(function () {      
  // Resume play if the element if is paused.
  if (el.paused) {
    el.play();
  }
}, waitTime);

// popup examples
$( document ).on( "pagecreate", function() {
    // The window width and height are decreased by 30 to take the tolerance of 15 pixels at each side into account
    function scale( width, height, padding, border ) {
        var scrWidth = $( window ).width() - 30,
            scrHeight = $( window ).height() - 30,
            ifrPadding = 2 * padding,
            ifrBorder = 2 * border,
            ifrWidth = width + ifrPadding + ifrBorder,
            ifrHeight = height + ifrPadding + ifrBorder,
            h, w;
        if ( ifrWidth < scrWidth && ifrHeight < scrHeight ) {
            w = ifrWidth;
            h = ifrHeight;
        } else if ( ( ifrWidth / scrWidth ) > ( ifrHeight / scrHeight ) ) {
            w = scrWidth;
            h = ( scrWidth / ifrWidth ) * ifrHeight;
        } else {
            h = scrHeight;
            w = ( scrHeight / ifrHeight ) * ifrWidth;
        }
        return {
            'width': w - ( ifrPadding + ifrBorder ),
            'height': h - ( ifrPadding + ifrBorder )
        };
    };
    $( ".ui-popup iframe" )
        .attr( "width", 0 )
        .attr( "height", "auto" );
    $( "#popupVideo" ).on({
        popupbeforeposition: function() {
            // call our custom function scale() to get the width and height
            var size = scale( 497, 298, 15, 1 ),
                w = size.width,
                h = size.height;
            $( "#popupVideo iframe" )
                .attr( "width", w )
                .attr( "height", h );
        },
        popupafterclose: function() {
            $( "#popupVideo iframe" )
                .attr( "width", 0 )
                .attr( "height", 0 );
        }
    });
});

