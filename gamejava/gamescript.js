var player = document.getElementById('playerbox');
var Score = document.getElementById('score');
var Timer = document.getElementById('timer')
var Realtimer = 20;
var Realscore = 0;
var Intervarlcounter = 400;



var interval = setInterval(starttimer, Intervarlcounter)

player.addEventListener('click', function(){
    Realscore++;
    Score.textContent = 'Score' +  ' '  + Realscore;
    Realtimer += 2;
    Timer.textContent = 'Timer' + ' ' + Realtimer

    var RandomPosX = Math.floor(Math.random() * 700);
    var RandomPosY = Math.floor(Math.random() * 400);
    var RandomScale = Math.floor(Math.random() * 100);

    if(RandomScale < 10){
        RandomScale = 20;
        player.style.width = RandomScale + 'px';
        player.style.height = RandomScale + 'px';
    }

    player.style.marginLeft = RandomPosX + 'px';
    player.style.marginTop = RandomPosY + 'px';
    player.style.width = RandomScale + 'px';
    player.style.height = RandomScale + 'px';
})


function starttimer(){
    Realtimer--;
    Timer.textContent = 'Timer'+ ' ' + Realtimer;

    if (Realtimer < 1){
        endgame();
    }
}
function stoptimer(){

}
function endgame(){
    alert('Oops time out, you lose' + ' ' + 'Your Score is' + ' ' + Realscore );
    clearInterval(interval);
}