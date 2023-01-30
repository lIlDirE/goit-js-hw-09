const form = document.querySelector(".form");
const button = form.elements[3];
const amount = form.elements.amount;
const delay = form.elements.delay;
const step = form.elements.step;
let countTmp;

button.addEventListener('click', onBtn);

function createPromise(position, delay) {
	return new Promise((resolve, reject) => {
	  const shouldResolve = Math.random() > 0.3;
	  setTimeout(() => {
		if (shouldResolve) {
		  resolve({ position, delay });
		} else {
		  reject({ position, delay });
		}
	  }, delay);
	});
  }
  
function onBtn(evt) {
	evt.preventDefault();
	countTmp = (+amount.value);
   	for (let position = 1; position <= amount.value; position += 1) {
	 createPromise(position, delay.value)
	   .then(({ position, delay }) => {
			console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
	   })
	   .catch(({ position, delay }) => {
			console.log(`❌ Rejected promise ${position} in ${delay}ms`);
	   })
	   countTmp = (+step.value +(+delay.value));
   }
 }

// // Напиши скрипт, который при сабмите формы вызывает функцию createPromise(position, delay) столько раз, сколько ввели в поле amount. 
// // При каждом вызове передай ей номер создаваемого промиса (position) и задержку учитывая введенную пользователем первую задержку (delay) и шаг (step).