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

var questions = [
    {
        question: '1. What is HTML?',
        options: [
            'Hyper Text Math Language',
            'Hyped Talking Meteor Listener',
            'Hyper Text Markup Language',
            'Some Code Stuff'
        ],
        answer: 2,
    },
    {
        question: '2. What is an array?',
        options: [
            'Something found in space',
            'A group of items put into one specific thing',
            'It does multiplication',
            'The thing that destroyed the Death Star'
        ],
        answer: 1,
    },
    {
        question: '3. Who is Harry Potter?',
        options: [
            'The Boy Who Lived',
            'Darth Vaders Son',
            'The Destroyer of the One Ring',
            'The Great and Powerful Oz'
        ],
        answer: 0, 
    },
    {
        question: '4. Are you a nerd?',
        options: [
            'No',
            'Noooo!',
            'Not At All',
            '100% All the Time'
        ],
        answer: 3,
    },
    {
        question: '5. What is the best team in baseball?',
        options: [
            'Cardinals',
            'Giants',
            'Dodgers',
            'Rockies'
        ],
        answer: 2,
    },
    {
        question: '6. Lakers best player ever?',
        options: [
            'Kobe Bryant',
            'Lebron James',
            "Shaq O'neal",
            'James Worthy'
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
   quizEl.innerHTML = "<h1>" + questions[0].question + "</h1>";
   quizEl.innerHTML += "<button>" + questions[0].options[0] + "</button>" + "<br>";
   quizEl.innerHTML += "<button>" + questions[0].options[1] + "</button>" + "<br>";
   quizEl.innerHTML += "<button>" + questions[0].options[2] + "</button>" + "<br>";
   quizEl.innerHTML += "<button>" + questions[0].options[3] + "</button>" + "<br>";
   
};

//After checkAnswer get next question or follow next index in questions array
function checkAnswer() {};

function endGame() {};

function submitScore() {};

function viewScores() {};

//Event Listeners
startBtn.addEventListener('click', startQuiz);