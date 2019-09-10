var H = $(document).height()
var W = $(document).width()
var steps = 100;

function start(){
    $('.btn-success').remove();
    var hRand = Math.random(0,1);
    var target = H*hRand;
    var leftOrRight = Math.random(0,1);
    var wDist = W/2;
    var hDist = target/2;
    var wInc = wDist/steps;
    var hInc = hDist/steps;

    for(var i = 0; i < steps; i++){
        
            var position = $('#ball').position();
            console.log(position.top)
            console.log(position.left)
            $("#ball").parent().css({position: 'relative'});
            $("#ball").css(`{top: ${position.top + hInc}, left: ${position.left + wInc}, position:'absolute'}`);
            // $('#ball').css('left', `${position.left + wInc}`)
            // $('#ball').css('top', `${position.top + hInc}`)
        
    }
}