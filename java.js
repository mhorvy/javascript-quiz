const startButton = document.querySelector('.start_button button');
const infoBox = document.querySelector(".info-box");
const quitButton = document.querySelector('.buttons .quit');
const restartButton = document.querySelector('.buttons .restart');
const quizBox = document.querySelector('.quiz-box');
const timeCount = document.querySelector(".timer .time-seconds");


// if start quiz button clicked
startButton.onclick = ()=>{
    infoBox.classList.add("activeInfo");
}

// if exit quiz button clicked
quitButton.onclick = ()=>{
    infoBox.classList.remove("activeInfo");
}

// if continue quiz button clicked
restartButton.onclick = ()=>{
    infoBox.classList.remove("activeInfo");
    quizBox.classList.add("activeQuiz");
    showQuestions(0);
    startTimer(30);
}

let questionCount = 0;

const nextButton = document.querySelector("footer .next");

//next button clicked
nextButton.onclick = ()=>{
    questionCount++;
    showQuestions(index);
}


// to get the questions array
function showQuestions(index){
    const questionText = document.querySelector(".question-text");
    const optionList = document.querySelector(".answer-options");
    let questionTag = '<span>'+ questionsList[index].numb + "." + questionsList[index].question +'</span>';
    let optionTag = '<div class="option"><span>'+ questionsList[index].optionsList[0] +'</span></div>'
    + '<div class="option"><span>'+ questionsList[index].optionsList[1] +'</span></div>'
    + '<div class="option"><span>'+ questionsList[index].optionsList[2] +'</span></div>'
    + '<div class="option"><span>'+ questionsList[index].optionsList[3] +'</span></div>';
    questionText.innerHTML = questionTag;
    optionList.innerHTML = optionTag;
    
    const option = optionList.querySelectorAll (".option");
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(answer){
    let selectedAnswer = answer.questionText;
    let correctAnswer = questionsList[questionCount].answer;
    if(selectedAnswer == correctAnswer){
        answer.classList.add("correct")
        console.log("Answer is correct");
    }else{
        answer.classList.add("wrong")
        console.log("Answer is wrong");
    }
}

function startTimer(){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
}
}