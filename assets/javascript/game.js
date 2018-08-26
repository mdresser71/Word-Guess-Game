var word = ["comedy", "laugh", "joke", "humor"];
var actualWord = "";
var letters = [];
var output = [];
var wrongLetters = [];

var num = 0;
var guessesLeft = 15;
var losses = 0;
var wins = 0;


function gameStart () {
    actualWord = word[Math.floor(Math.random() * word.length)];
    letters = actualWord.split("");
    num = letters.length;


    guessesLeft = 15;
    wrongLetters = [];
    output = [];

    for(var i = 0; i < num; i++) {
        output.push("_")
        console.log(output)
    }

    document.getElementById("secretAnswer").innerHTML = output.join(" ");
    document.getElementById("game").innerHTML = wins;
    document.getElementById("losses").interHTML = losses;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
};

function checkAnswer (letter) {
    var letterInWord = false;

    for(var j = 0; j < num; j++) {

        if (letter == actualWord[j]) {
            letterInWord = true;
        }
    }

    if (letterInWord) {
        for(var j = 0; j < num; j++) {
            if (actualWord [j] == letter) {
                output[j] = letter;
                console.log(output)
            }
        }
    } else {
        wrongLetters.push(letter);
        guessesLeft--;
    }
};


gameStart();

function rounds() {
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("answersGuessed").innerHTML = wrongLetters;
    document.getElementById("secretAnswer").innerHTML = output.join(" ");

    if(letters.toString() == output.toString()) {
        wins++
        document.getElementById("game").innerHTML = wins;
        reset();
    } else if (guessesLeft===0) {
        losses++
        document.getElementById("losses").innerHTML = losses;
        gameStart();
    }
};


document.onkeypress = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    checkAnswer(userGuess);
    rounds();
};
     
function reset() {
    if (actualWord=="comedy") {
    gameStart ();
    } else if (actualWord=="laugh") {
        gameStart ();
    } else if (actualWord=="joke") {
        gameStart ();
    } else if (actualWord=="humor") {
        gameStart ();
    }
};




