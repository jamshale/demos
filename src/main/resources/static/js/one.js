var H = $(document).height()
var W = $(document).width()
var steps = 2000;

function start(){
    $('.btn-success').remove();
    var hRand = Math.random(0,1);
    var target = H*hRand;
    var leftOrRight = Math.random(0,1);
    var wDist = W/2;
    var hDist = target/2;
    var wInc = wDist/steps;
    var hInc = hDist/steps;

    var i = 0;
    var interval = setInterval(function(){
        var position = $('#ball').position();
        if(leftOrRight<.5){
            $("#ball").css({'top': position.top + hInc, 'left': position.left + wInc});
        } else {
            $("#ball").css({'top': position.top - hInc, 'left': position.left - wInc});
        }
        
        i++;
        if(i>=steps){
            clearInterval(interval);
        }
    }, .5);
    
}