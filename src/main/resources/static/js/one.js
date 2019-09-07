var X, Y, ballX, ballY;
var H = 100;
var W = 100;
$( document ).on( "mousemove", function( event ) {
    X = event.pageX;
    Y = event.pageY;
    ballX = $('#ball').width()/2
    ballY = $('#ball').height()/2
    xyMod = (X+Y) % 200;
    xMod = X % 200;
    yMod = Y % 200;
    $('#ball').css({'position':'absolute',
                    'left': X-ballX,
                    'top':Y-ballY,
                    'background-color': `rgb(${xyMod}, ${xMod} , ${yMod} )`});
    // console.log("pageX: " + event.pageX + ", pageY: " + event.pageY);
    // $( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
});

$( document ).on( "mousedown", function( event ) {


    var start =  $.now()
    var now;
    timeoutDown = setInterval(function(){
        now = $.now();
        H += (now-start)/1000
        W += (now-start)/1000
        $('#ball').css({'height':H, 'width':W})
    })
   
});

$( document ).on( "mouseup", function( event ) {
    clearInterval(timeoutDown);

    // var start =  $.now()
    // var now;
    // timeoutDown = setInterval(function(){
    //     now = $.now();
    //     H -= (now-start)/10000
    //     W -= (now-start)/10000
    //     $('#ball').css({'height':H, 'width':W})
    // })
})

// $( document ).on( "mouseout", function( event ) {
//     clearInterval(timeoutDown);
// })

$( document ).on( "click", function() {
    // console.log("xMod = " + xMod + " yMod = " + yMod );
    // console.log("ballX = " + ballX + " ballY = " + ballY );
    // console.log("X = " + X + " Y = " + Y );

});

