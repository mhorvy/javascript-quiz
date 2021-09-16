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


// to get the questions array
function showQuestions(index){
    const questionText = document.querySelector(".question-text");
    const optionsList = document.querySelector(".answer-options");
    let questionTag = '<span>' + questionsList[index].question + '</span>';
    let optionTag = '<div class="option">' + questionsList[index].options[0] + '<span></span></div>'
                        + '<div class="option">' + questionsList[index].options[1] + '<span></span></div>'
                        + '<div class="option">' + questionsList[index].options[2] + '<span></span></div>'
                        + '<div class="option">' + questionsList[index].options[3] + '<span></span></div>';
    questionText.innerHtml = questionTag;
    optionsList.innerHTML = optionTag;
}