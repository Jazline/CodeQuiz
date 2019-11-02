const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const question = document.getElementById("question");

const choiceA = document.getElementById("A");

const choiceB = document.getElementById("B");

const choiceC = document.getElementById("C");

var counter = document.getElementById("counter");

const scoreDiv = document.getElementById("scoreContainer");


let questions = [

    {

        question : "What does HTML stand for?",

        choiceA : "Hypertext Markup Language",

        choiceB : "Hyperbole Markup Language",

        choiceC : "Hyper Mode Lens",

        correct : "A"

    },{

        question : "What does CSS stand for?",

        choiceA : "Cascading Style Star",

        choiceB : "Cascading Style Sheet",

        choiceC : "Cool Super Son",

        correct : "B"

    },{

        question : "What does JS stand for?",

        choiceA : "Jokeso",

        choiceB : "JavaSource",

        choiceC : "JavaScript",

        correct : "C"

    }

];

start.onclick = function() {
    start.className = 'hidden'
    quiz.className = '';
    nextQuestion()
} 
var index = 0;
var score = 0;
var timeLeft = 40;


var interval = setInterval(() => {
    counter.innerHTML = "Timer : " + timeLeft--
if(timeLeft < 1){
    clearInterval(interval)
quizComplete(true)
}
}, 1000);
function nextQuestion() {
    const q = questions[index]
    question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}
function checkAnswer(answer) {
 const q = questions[index]
 if(answer === q.correct) {
     alert ("Yes it's correct")
     score++
 } else {
     alert ("You are wrong")
 }
index++

if (index >= questions.length) {
    quizComplete()
    
} else {
    nextQuestion()

}

}
function quizComplete(timeOut) {
    clearInterval(interval)
    if(timeOut) {
        alert("Time is up!")

    } else {
        alert("Your score is " + score * timeLeft)
    }
     localStorage.setItem("highscore", JSON.stringify(score));
     console.log(score);
     prompt("What are your initials ?")
    // window.location.assign("index1.html"); 
    

}
