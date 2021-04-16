// My variables
var h1El = document.querySelector('#h1');
var divEl = document.querySelectorAll('.questions');
var timerEl = document.querySelector('.timer');
var startBtn = document.querySelector('.startButton');

var secondsLeft = 10;

// Functions needed
function welcome() {};

function timerStart() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left!";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("You have run out of time!");
            //log score and input name function
        }

    }, 1000);
};

//function startQuiz() {};
startBtn.addEventListener('click', timerStart);

function endGame() {};

function submitScore() {};

function viewScores() {};

