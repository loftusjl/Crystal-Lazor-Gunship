var goalNumber = Math.floor(19 + Math.random() * 101);
var playerTotal = 0;
var wins = 0;
var losses = 0;
var crystalArray = [];
var bgMusic = new Audio('./assets/sounds/fighttosurvive.mp3')
var chime = new Audio('./assets/sounds/chime.mp3')

window.onload = function () { // start game
    $('.btn').hide();
    newCrystals();
    $('#instructions').on('click', function() {
        bgMusic.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        bgMusic.play();
        $('.btn').show();
        $('#instructions').hide();
    })
    console.log(crystalArray);
    
    $('.crystal').on('click', function() {
        if (playerTotal < goalNumber) {
            var crystal = parseInt($(this).val());
            console.log($(this).attr('id') + ': ' + $(this).val()); // cheat and show what the value is.
            crystalClick(crystal);
            $('#playerTotal').text(playerTotal);
            
            console.log(playerTotal < goalNumber)
            
            if (playerTotal === goalNumber) {
                wins++;
                $('#wins').text(wins);
                alert(`You Win!`);
                newCrystals();
            } 
            else if (playerTotal > goalNumber) {
                losses++;
                $('#losses').text(losses);
                alert(`You Lose!`);
                newCrystals();
            }
        }
    });
    $('#forfeitGame').on('click', function(){
        losses++;
        $('#losses').text(losses);
        newCrystals();
    });
    $('#restartGame').on('click', function() {
        losses = 0;
        wins = 0;
        $('#losses').text(losses);
        $('#wins').text(wins);
        newCrystals();
    });
    $('#pauseMusic').on('click', function() {bgMusic.pause();});
    
};
// Functions
function crystalClick(v) {
    playerTotal += v;
    $('#playerTotal').text(playerTotal);
    chime.play();
};
function newCrystals() {
    crystalArray = [];
    goalNumber = Math.floor(19 + Math.random() * 101);
    playerTotal = 0;
    
    while (crystalArray.length < 4) {
        let randNum = Math.floor(1 + Math.random() * 11);
        if (!crystalArray.includes(randNum)) {
            crystalArray.push(randNum)
        };
    };
    console.log(crystalArray);
    
    $('#goalTotal').text(goalNumber);
    $('#playerTotal').text(0);
    $('#crystal-1').val(crystalArray[0]);
    $('#crystal-2').val(crystalArray[1]);
    $('#crystal-3').val(crystalArray[2]);
    $('#crystal-4').val(crystalArray[3]);
};