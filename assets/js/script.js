var questions = [{
    question: "What is the difference between a string and a number in JavaScript?",
    options: ["A string is a sequence of characters, while a number is a value that represents a quantity.",
        "A string is a value that represents a quantity, while a number is a sequence of characters.",
        "A string is a mutable data structure, while a number is an immutable data structure.",
        "A string is an immutable data structure, while a number is a mutable data structure."],
    answer: 0
},

{
    question: "What is the difference between var, let, and const?",
    options: ["var is the only keyword that can be used to declare variables.",
        "let and const are new keywords that were introduced in ES6.",
        "var variables can be re-declared, while let and const variables cannot.",
        "const variables are immutable, while let and var variables are mutable."],
    answer: 2
},

{
    question: "What is the difference between an object and an array?",
    options: ["An object is a collection of key-value pairs, while an array is a collection of values.",
        "An object is a collection of values, while an array is a collection of key-value pairs.",
        "An object is a mutable data structure, while an array is an immutable data structure.",
        "An object is an immutable data structure, while an array is a mutable data structure."],
    answer: 0
},

{
    question: "What is the difference between a function declaration and a function expression?",
    options: ["A function declaration is a statement that defines a function, while a function expression is an expression that evaluates to a function.",
        "A function declaration is an expression that evaluates to a function, while a function expression is a statement that defines a function.",
        "A function declaration can only be used to define global functions, while a function expression can be used to define global or local functions.",
        "A function declaration can only be used to define local functions, while a function expression can be used to define global or local functions."],
    answer: 0
}]

var questionCounter = 0;

var quizQuestions = $(
)

function startOfQuiz() {
    var currentQuestion = questions[questionCounter];

    var quizQuestions = $(`
    <div id="quiz-questions">
    <h2>${currentQuestion.question}</h2>
    <ul>
        <li><button id="answer-0">${currentQuestion.options[0]}</button></li>
        <li><button id="answer-1">${currentQuestion.options[1]}</button></li>
        <li><button id="answer-2">${currentQuestion.options[2]}</button></li>
        <li><button id="answer-3">${currentQuestion.options[3]}</button></li>
    </ul>
    </div>
    `)

    $("#question-container").append(quizQuestions);
}
