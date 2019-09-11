var bubbles = 30;
var maxSize = 20;
var H = $(document).height();
var W = $(document).width();
var leftSpeed = Math.random(0,.1);
var topDirection = Math.random(0,.2);

//add bubbles
for(var i = 0; i < bubbles; i++){
    var sizeRand = Math.random(.4,1);
    var topRand = Math.random(0,1);
    var leftRand = Math.random(0,1);
    var opacityRand = Math.random(.1,.4);
    var zRand = Math.random(.4,.6);
    $('body').append(`<div style="
                            border-radius: 50%;
                            position:absolute;
                            background-color:white;
                            z-index:${zRand};
                            opacity:${opacityRand};
                            top:${topRand*100}%;
                            left:${leftRand*100}%;
                            height:${maxSize*sizeRand}px;
                            width:${maxSize*sizeRand}px;
                            "></div>`)
}
$(document).ready(function(){

    var interval = setInterval(function(){

        $('div').each(function(d){
            var pos = $(this).position()
            if(pos.top + topDirection > H -maxSize && pos.left + leftSpeed> W -maxSize){
                $(this).css({'top': 0 + topDirection, 'left': 0 + leftSpeed});
            } else if (pos.top + topDirection > H -maxSize){
                $(this).css({'top': 0 + topDirection, 'left': pos.left + leftSpeed});
            } else if (pos.left + leftSpeed > W -maxSize) {
                $(this).css({'top': pos.top + topDirection, 'left': 0 + leftSpeed});
            } else {
                $(this).css({'top': pos.top + topDirection, 'left': pos.left + leftSpeed});
            }
            
        })

        // $('div').css({'top': $('div').position().top + topDirection, 'left': $('div').position().left + leftSpeed});
    }, .1);

})
