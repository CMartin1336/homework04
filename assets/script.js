var pos = 0;
var correct = 0;
var quiz, status, question, choice, choices, chA, chB, chC, chD;
//My questions to show every game
var questions = [
    {
        question: "What does HTML stand for?",
        a: "Hyper Tantrum Mean Language",
        b: "Hyper Text Markup Language",
        c: "Hyped-Up Text Markup Laughter",
        d: "Hyper Talking Mean Lizards",
        answer: "B",
    },
    {
        question: "What makes your webpage interactive?",
        a: "CSS",
        b: "HTML",
        c: "JavaScript",
        d: "Electricity",
        answer: "C",
    },
    {
        question: "What tool can you use anytime of any day to help you write code?",
        a: "Google",
        b: "Dictionary",
        c: "Sticky Notes",
        d: "Paper Airplane",
        answer: "A",
    },
    {
        question: "Which is not a resource to get better at coding?",
        a: "Freecodecamp.com",
        b: "W3Schools",
        c: "XBOX",
        d: "CSS Tricks",
        answer: "C",
    },
    {
        question: "CSS stands for what?",
        a: "Crystal Style Sheets",
        b: "Cascading Stolen Sheets",
        c: "Crystal Shine Sheets",
        d: "Cascading Style Sheets",
        answer: "D",
    },
    {
        question: "What does an array do in JavaScript do?",
        a: "Creates a variable with multiple options",
        b: "Console logs a value",
        c: "Creates a function",
        d: "Creates the interwebs",
        answer: "A",
    },
    {
        question: "What is the best coding motto out there?",
        a: "Gotta catch em' all! - Pokemon",
        b: "Fail and fail again, until you mightly succeed!",
        c: "To infinity and beyond! - Buzz Lightyear",
        d: "Be water, my friend! - Bruce Lee",
        answer: "B",
    },
    {
        question: "This one is for one. Who wrote the best fantasy epic of the last 100 years?",
        a: "George R. R. Martin",
        b: "J. R. R. Tolkein",
        c: "J. K. Rowling",
        d: "Frank Herbert",
        answer: "B",
    },
];

// Function to get any element by ID
function get(x) {
    return document.getElementById(x);
}

function buildQuiz() {
    quiz = get("quiz");
    if(pos >= questions.length) {
        quiz.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
        get("status").innerHTML = "Quiz Completed";
        //allows for quiz restart
        pos = 0;
        correct = 0;

        //stos question rendering
        return false;
    }

    get("status").innerHTML = "Question "+(pos+1)+" of "+questions.length;

    question = questions[pos].question;
    chA = questions[pos].a;
    chB = questions[pos].b;
    chC = questions[pos].c;
    chD = questions[pos].d;

    //display the question
    quiz.innerHTML = "<h3>"+question+"</h3>";

    //display answers
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br>";
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='D'> "+chD+"</label><br><br>";
    quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
};

function checkAnswer() {
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++) {
        if(choices[i].checked) {
            choice = choices[i].value;
        }
    }
        if(choice == questions[pos].answer) {
            correct++;
        }
        pos++;
        buildQuiz();
};

function showResults() {};

//this will show quiz on load
//buildQuiz();

//this shows results when submit is hit
//submitButton.addEventListener("click", showResults);
window.addEventListener("load", buildQuiz);