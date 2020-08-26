//List of questions 
var questionList = [
    {
        "question": "The financial statement that reports the revenues and expenses for a period of time such as a year or a month is the",
        "a": "Balance Sheet",
        "b": "Income Statement",
        "c": "Statement Of Cash Flow",
        "d": "All of the above",
        "correct": "b",
        "userAnswer": null
    },
    {
        "question": "The financial statement that reports the assets, liabilities, and stockholders' (owner's) equity at a specific date is the",
        "a": "Balance Sheet",
        "b": "Income Statement",
        "c": "Statement Of Cash Flows",
        "d": "All Of the above",
        "correct": "a",
        "userAnswer": null
    },
    {
        "question": "Inventory and accounts receivable are classified in the balance sheet as ?",
         "a": "Long term assets",
         "b": "Current liabilities",
         "c": "Current assets",
         "d": "None of these",
         "correct": "c",
         "userAnswer": null
        },
        {
        "question": "A double entry bookkeeping posting requires a minimum of how many accounts?",
         "a": "1",
         "b": "2",
         "c": "3",
         "d": "8",
         "correct": "b",
         "userAnswer": null
        },

];


// Timer starting at 2 minutes
var timeEl = document.querySelector("time");
var mainEl = document.getElementById("main");

var secondsLeft = 120;


function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    if(secondsLeft > 60){
        var min = 1;
       var sec = secondsLeft - 60;
    }
    else{
        var min = 0;
        var sec = secondsLeft;
    }
    time.textContent = min+":"+sec + "  left!";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}



setTime();


//This section is selecting the body of the document for the question and all answer options
var questionTag = document.body.querySelector("#question");
var answerTagA = document.body.querySelector("#answer-a");
var answerTagB = document.body.querySelector("#answer-b");
var answerTagC = document.body.querySelector("#answer-c");
var answerTagD = document.body.querySelector("#answer-d");

//This is selectiong what button will be pressed and logged
var buttonA = document.body.querySelector("#button-a");
var buttonB = document.body.querySelector("#button-b");
var buttonC = document.body.querySelector("#button-c");
var buttonD = document.body.querySelector("#button-d");

//if the answer is correct or incorrect and score
var score = document.body.querySelector("#score");
var questionIndex = 0;
var uScore = 0;


function buttonHandler(event) {
    
    var button = event.target;
    var userAnswer = button.getAttribute("data-answer");
    var questionId = parseInt(button.getAttribute("data-question"));
    
    questionList[questionId]["userAnswer"] = userAnswer;


    if(questionList[questionId]["userAnswer"] === questionList[questionId]["correct"]){
        uScore += 10;
        console.log("score: "+uScore);
        score.textContent = "Correct!";
        setTimeout(function(){
            questionIndex++;
            initializeQuestion();
            score.textContent= "";
        }, 1000);
        
    }
    else{
        secondsLeft -= 10;
        score.textContent = "Incorrect!";
        
        setTimeout(function(){
            questionIndex++;
            initializeQuestion();
            score.textContent= ""; 
        }, 1000);
    } 
    return uScore;
       
}


//buttons
buttonA.addEventListener("click",buttonHandler);
buttonB.addEventListener("click",buttonHandler);
buttonC.addEventListener("click",buttonHandler);
buttonD.addEventListener("click",buttonHandler);

//start quiz
function initializeQuestion(){
    console.log(questionList[questionIndex]);
    var wholeObj = questionList[questionIndex];
    var question = wholeObj.question;
    questionTag.textContent = question;
    questionTag.setAttribute("data-question", questionIndex);

    answerTagA.textContent = wholeObj.a;
    answerTagB.textContent = wholeObj.b;
    answerTagC.textContent = wholeObj.c;
    answerTagD.textContent = wholeObj.d;
    buttonA.setAttribute("data-question", questionIndex);
    buttonB.setAttribute("data-question", questionIndex);
    buttonC.setAttribute("data-question", questionIndex);
    buttonD.setAttribute("data-question", questionIndex);
}
initializeQuestion();
