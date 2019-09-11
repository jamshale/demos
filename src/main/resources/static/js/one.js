var steps = 2000;


function start(){
    // initialization
    var H = $(document).height()
    var W = $(document).width()
    $('.btn-success').remove();
    var leftOrRight = Math.random(0,1);
    var left;
    if(leftOrRight>=.5){
        left = true;
    }
    // get target height
    var position = $('#ball').position();
    var rightPaddlePos = $('#right-paddle').position();
    var leftPaddlePos = $('#left-paddle').position();
    var hRand = Math.random(0,1);
    var target = H*hRand;    
    var pDist, pInc, wInc, hInc, wDist, hDist;
    if(left){
        pDist = target-leftPaddlePos.top-50;
        wDist = (W/2)-leftPaddlePos.left;
    } else {
        pDist = target-rightPaddlePos.top-50;
        wDist = (W/2)-leftPaddlePos.left;
    }
    hDist = target-position.top-15;
    wInc = wDist/steps;
    hInc = hDist/steps;
    pInc = pDist/steps;

    var i = 0;
    var interval = setInterval(function(){
        position = $('#ball').position();
        if(left){
            leftPaddlePos = $('#left-paddle').position();
            $("#ball").css({'top': position.top + hInc, 'left': position.left - wInc});
            $('#left-paddle').css('top', leftPaddlePos.top + pInc);
        } else {
            rightPaddlePos = $('#right-paddle').position();
            $("#ball").css({'top': position.top + hInc, 'left': position.left + wInc});
            $('#right-paddle').css('top', rightPaddlePos.top + pInc);
        }
        i++;
        // reset --> change direction
        if(i>=steps){
            H = $(document).height()
            W = $(document).width()
            hRand = Math.random(0,1);
            target = H*hRand;
            if(left){
                left = false;
                rightPaddlePos = $('#right-paddle').position();
                pDist = target-rightPaddlePos.top-50;
                wDist = W-(2*(leftPaddlePos.left))+15;
            } else {
                left = true;
                
                leftPaddlePos = $('#left-paddle').position();
                pDist = target-leftPaddlePos.top-50;
                wDist = W-(2*(leftPaddlePos.left));
            }
            
            hDist = target-position.top-15;
            wInc = wDist/steps;
            hInc = hDist/steps;
            pInc = pDist/steps;
            i = 0;
            // clearInterval(interval);
        }
    }, .1);
    
}