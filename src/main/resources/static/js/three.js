var stars = 1000;
var maxSize = 10;
var moonSize = 100;
var H = $(document).height();
var W = $(document).width();

//add stars
for(var i = 0; i < stars; i++){
    var sizeRand = Math.random(.4,1);
    var topRand = Math.random(0,1);
    var leftRand = Math.random(0,1);
    var opacityRand = Math.random(.4,.6);
    $('body').append(`<div style="
                            border-radius: 50%;
                            position:absolute;
                            background-color:white;
                            z-index:.7;
                            opacity:${opacityRand};
                            top:${topRand*100}%;
                            left:${leftRand*100}%;
                            height:${maxSize*sizeRand}px;
                            width:${maxSize*sizeRand}px;
                            "></div>`)
}

//add moon
var moonStage = Math.random(0,1);
var moonLoc = Math.random(0,1);

// console.log(H)
// console.log(H/2)
// console.log((H/2)*moonLoc);
//moon
$('body').append(`<div style="
                            border-radius: 50%;
                            position:absolute;
                            background-color:white;
                            top:${(moonLoc*100)/4}%;
                            left:${(moonLoc*100)/4}%;
                            height:${moonSize}px;
                            width:${moonSize}px;
                            "></div>`)
//shadow
$('body').append(`<div style="
                            border-radius: 50%;
                            position:absolute;
                            z-index:.5;
                            background-color:black;
                            top:${(moonLoc*100)/4}%;
                            left:${((moonLoc*100)/4)+(moonStage*5)}%;
                            height:${moonSize}px;
                            width:${moonSize}px;
                            "></div>`)


