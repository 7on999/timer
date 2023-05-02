const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

let intervalId
const createTimerAnimator = () => {
  
  return (seconds) => {

    let currentSeconds = seconds
    let currentSecondsCache = seconds

    let hoursValue = Math.floor(currentSeconds / 3600);
    currentSeconds %= 3600;
    let minutesValue = Math.floor(currentSeconds / 60);
    let secondsValue = currentSeconds % 60;


    timerEl.textContent = [hoursValue, minutesValue, secondsValue].map(value=> value<10?`0${value}`:value).join(':')

    intervalId = setInterval(()=>{

      if (currentSecondsCache===1) clearInterval(intervalId)
      currentSecondsCache-=1

      hoursValue = Math.floor(currentSecondsCache / 3600);
      currentSeconds = currentSecondsCache % 3600;
      minutesValue = Math.floor(currentSeconds / 60);
      secondsValue = currentSeconds % 60;

      timerEl.textContent = [hoursValue, minutesValue, secondsValue].map(value=> value<10?`0${value}`:value).join(':')
      
    }, 1000)

  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = parseInt(inputEl.value)||''
});

buttonEl.addEventListener('click', () => {
  clearInterval(intervalId)

  const seconds = Number(inputEl.value);
  animateTimer(seconds);

  inputEl.value = '';
});
