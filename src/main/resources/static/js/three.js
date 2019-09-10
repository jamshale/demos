var stars = 1000;
var maxSize = 10;
var H = $(document).height();
var W = $(document).width();

for(var i = 0; i < stars; i++){
    var sizeRand = Math.random(.4,1);
    var topRand = Math.random(0,1);
    var leftRand = Math.random(0,1);
    var opacityRand = Math.random(.4,.6);
    var wRand = Math.random(.8,1);
    // var gRand = Math.random(.4,.6);
    // var bRand = Math.random(.4,.6);
    $('body').append(`<div style="
                            border-radius: 50%;
                            position:absolute;
                            background-color:white;
                            opacity:${opacityRand};
                            top:${topRand*100}%;
                            left:${leftRand*100}%;
                            height:${maxSize*sizeRand}px;
                            width:${maxSize*sizeRand}px;
                            "></div>`)
}

