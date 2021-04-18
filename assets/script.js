// My variables
var h1El = document.querySelector('#h1');
var timerEl = document.querySelector('.timer');
var startBtn = document.querySelector('.startButton');
var scoreEl = document.querySelector('.score');
var quizEl = document.querySelector('.quiz');
var questionsEl = document.querySelector('.quizQuestions');

// My state variables
var secondsLeft = 10;
var scoreCounter = 0;
var pos = 0;


var testString = "Can I get this damn thing to work";
var questions = [
    {
        question: '1. placeholder question?',
        options: [
            'wrong1',
            'wrong2',
            'correct',
            'wrong3'
        ],
        answer: 2,
    },
    {
        question: '2. placeholder question?',
        options: [
            'wrong1',
            'correct',
            'wrong2',
            'wrong3'
        ],
        answer: 1,
    },
    {
        question: '3. placeholder question?',
        options: [
            'correct',
            'wrong1',
            'wrong2',
            'wrong3'
        ],
        answer: 0, 
    },
    {
        question: '4. placeholder question?',
        options: [
            'wrong1',
            'wrong2',
            'wrong3',
            'correct'
        ],
        answer: 3,
    },
    {
        question: '5. placeholder question?',
        options: [
            'wrong1',
            'wrong2',
            'correct',
            'wrong3'
        ],
        answer: 2,
    },
    {
        question: '6. placeholder question?',
        options: [
            'correct',
            'wrong1',
            'wrong2',
            'wrong3'
        ],
        answer: 0,
    },
];
// Functions needed
function startQuiz() {
    showQuestion();
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left!";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            timerEl.textContent = "Timer";
            alert("You have run out of time!");
            //log score and input name function
        }

    }, 1000);
};

function showQuestion() {
   // console.log("should show questions");
   quizEl.textContent = questions;
};

//After checkAnswer get next question or follow next index in questions array
function checkAnswer() {};

function endGame() {};

function submitScore() {};

function viewScores() {};

//Event Listeners
startBtn.addEventListener('click', startQuiz);