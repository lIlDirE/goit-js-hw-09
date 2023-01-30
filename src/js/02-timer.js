import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const inputDate = document.querySelector("#datetime-picker");
const startBtn = document.querySelector('button[data-start]');
let timeLeft = 0;
let timerId = null;
startBtn.disabled = true;
let selectedTime;
let refDate = {
	days: document.querySelector('.value[data-days]'),
	hours: document.querySelector('.value[data-hours]'),
	minutes: document.querySelector('.value[data-minutes]'),
	seconds: document.querySelector('.value[data-seconds]')
}
startBtn.addEventListener("click", intervalAdd);
const options = {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,
	onClose([selectedDates]){
		selectedTime = selectedDates;
		timeLeft = selectedDates - Date.now();
		if(timeLeft > 0){
			startBtn.disabled = false;
		} else{
			window.alert("Please choose a date in the future");
			startBtn.disabled = true;
		}
	},
  };
flatpickr(inputDate, options);	
function intervalAdd(){
	startBtn.disabled = true;
		timerId = setInterval(() => {
			timeLeft = selectedTime - Date.now();
			if(timeLeft <= 1000){			
				clearInterval(timerId);
			}
			spanUpdate();
		  }, 1000);
} 
function spanUpdate() {
	refDate.days.textContent = addLeadingZero(convertMs(timeLeft).days);
	refDate.hours.textContent = addLeadingZero(convertMs(timeLeft).hours);
	refDate.minutes.textContent = addLeadingZero(convertMs(timeLeft).minutes);
	refDate.seconds.textContent = addLeadingZero(convertMs(timeLeft).seconds);
  }
function convertMs(ms) {
	// Number of milliseconds per unit of time
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;
  
	// Remaining days
	const days = Math.floor(ms / day);
	// Remaining hours
	const hours = Math.floor((ms % day) / hour);
	// Remaining minutes
	const minutes = Math.floor(((ms % day) % hour) / minute);
	// Remaining seconds
	const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
	return { days, hours, minutes, seconds };
  }
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};