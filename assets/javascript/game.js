var goalNumber = Math.floor(19 + Math.random() * 101);
var playerTotal = 0;
var wins = 0;
var losses = 0;
var crystalArray = [];


// start game
newCrystals();
console.log(crystalArray);

// Functions

function crystalClick() {
    playerTotal += crystalValue;
}

function newCrystals() {
    crystalArray: [];
    
    while (crystalArray.length < 4) {
       let randNum = Math.floor(1 + Math.random() * 11);
        if (!crystalArray.includes(randNum)) {
            crystalArray.push(randNum)
        };
    };
}