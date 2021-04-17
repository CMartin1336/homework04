// My variables
var h1El = document.querySelector('#h1');
var timerEl = document.querySelector('.timer');
var startBtn = document.querySelector('.startButton');
var scoreEl = document.querySelector('.score');

var secondsLeft = 10;
var scoreCounter = 0;
var pos = 0;
var secondsLeft = 10;

var questions = [
    {
        question: '1. placeholder question?',
        a: 'wrong1',
        b: 'wrong2',
        c: 'correct',
        d: 'wrong3',
        answer: 'c'
    },
    {
        question: '2. placeholder question?',
        a: 'wrong1',
        b: 'correct',
        c: 'wrong2',
        d: 'wrong3',
        answer: 'b'
    },
    {
        question: '3. placeholder question?',
        a: 'correct',
        b: 'wrong1',
        c: 'wrong2',
        d: 'wrong3',
        answer: 'a' 
    },
    {
        question: '4. placeholder question?',
        a: 'wrong1',
        b: 'wrong2',
        c: 'wrong3',
        d: 'correct',
        answer: 'd'
    },
    {
        question: '5. placeholder question?',
        a: 'wrong1',
        b: 'wrong2',
        c: 'correct',
        d: 'wrong3',
        answer: 'c'
    },
    {
        question: '6. placeholder question?',
        a: 'correct',
        b: 'wrong1',
        c: 'wrong2',
        d: 'wrong3',
        answer: 'a'
    },
];
// Functions needed
function startQuiz() {
    showQuestions();
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

function showQuestions() {
};

function checkAnswer() {
}; 

function endGame() {};

function submitScore() {};

function viewScores() {};

//Event Listeners
startBtn.addEventListener('click', startQuiz);