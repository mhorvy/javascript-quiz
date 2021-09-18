const startButton = document.querySelector('.start_button button');
const infoBox = document.querySelector(".info-box");
const quitButton = document.querySelector('.buttons .quit');
const restartButton = document.querySelector('.buttons .restart');
const quizBox = document.querySelector('.quiz-box');

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
}

let questionCount = 0;

const nextButton = quizBox.querySelector(".next");

//next button clicked
nextButton.onclick = ()=>{
    showQuestions(index);
    }


// to get the questions array
function showQuestions(index){
    const questionText = document.querySelector(".question-text");
    const optionList = document.querySelector(".answer-options");
    let questionTag = '<span>'+ questionsList[index].numb + ". " + questionsList[index].question +'</span>';
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
    let correctAnswer = questionsList[index].answer;
    if(selectedAnswer === correctAnswer){
    console.log ("Answer is correct");
    }else{
        console.log("Answer is wrong");
    }
}