var goalNumber = Math.floor(19 + Math.random() * 101);
var playerTotal = 0;
var wins = 0;
var losses = 0;
var crystalArray = [];

window.onload = function () { // start game
    newCrystals();
    console.log(crystalArray);
    $('#goalTotal').text(goalNumber);
    $('#playerTotal').text(0);
    
    $('.crystal').on('click', function() {
        if (playerTotal < goalNumber) {
            var crystal = parseInt($(this).val());
            console.log($(this).val());
            crystalClick(crystal);
            $('#playerTotal').text(playerTotal);
            console.log(playerTotal < goalNumber)
            if (playerTotal === goalNumber) {
                alert(`You Win!`);
                newCrystals();
            } 
            else if (playerTotal > goalNumber) {
                alert(`You Lose!`);
                newCrystals();
            }
        }
    });
};

// Functions

function crystalClick(v) {
    playerTotal += v;
    $('#playerTotal').text(playerTotal);
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