var goalNumber = Math.floor(19 + Math.random() * 101);
var playerTotal = 0;
var wins = 0;
var losses = 0;
var crystalArray = [];

document.onkeyup = function () { // start game
    newCrystals();
    console.log('Crystal 1: ' + $('#crystal-1').val());
    console.log(crystalArray);
    $('#goalTotal').text(goalNumber);
    $('#playerTotal').text(0);
    
    if (playerTotal < goalNumber) {
        $('.crystal').on('click', crystalClick);
        $('#playerTotal').text(playerTotal);
    }
    if (playerTotal === goalNumber) {
        playerWin;
    } else {
        playerLose;
    };
};

// Functions

function crystalClick() {
    console.log('Crystal ID is ' + $(this).attr('id'))
    playerTotal += parseInt($(this).val());
    $('#playerTotal').text(playerTotal);
};

function playerWin() {
    console.log(`You Win!`);
    newCrystals();
};

function playerLose() {
    console.log(`You Lose!`);
    newCrystals();
};

function win() {

};

function newCrystals() {
    crystalArray: [];

    while (crystalArray.length < 4) {
        let randNum = Math.floor(1 + Math.random() * 11);
        if (!crystalArray.includes(randNum)) {
            crystalArray.push(randNum)
        };
    };

    $('#crystal-1').val(crystalArray[0]);
    $('#crystal-2').val(crystalArray[1]);
    $('#crystal-3').val(crystalArray[2]);
    $('#crystal-4').val(crystalArray[3]);
};