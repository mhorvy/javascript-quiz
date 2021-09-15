const startButton = document.querySelector('.start_button button');
const infoBox = document.querySelector(".info-box");
const quitButton = document.querySelector('.buttons .quit');
const restartButton = document.querySelector('.buttons .restart');

// if start quiz button clicked
startButton.onclick = ()=>{
    infoBox.classList.add("activeInfo");
}