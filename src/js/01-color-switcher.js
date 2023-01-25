const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;
const body = document.querySelector('body');

startBtn.addEventListener("click", changeBackgroundColor);
stopBtn.addEventListener("click", colorChangeStop);

function changeBackgroundColor(){
	startBtn.disabled = true;
	intervalAdd();
}

function intervalAdd(){
	timerId = setInterval(() => { 
		setBackgroundColor()
	  }, 1000);
}

function colorChangeStop(){
	timerReset();
	startBtn.disabled = false;
}

function timerReset(){
	clearInterval(timerId);
}

function setBackgroundColor(){
	body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}