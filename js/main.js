// Els
const elTimerText = document.querySelector("[data-timer-text]");
const elTimerStart = document.querySelector("[data-timer-starter]");
const elTimerPause = document.querySelector("[data-timer-stopper]");

// Vars
let currentTime = 0;
let timerInterval;
let count = true;

document.addEventListener("click", (evt) => {
  start(evt);
  pause(evt);
});

// Fn start
function start(evt) {
  const el = evt.target.closest("[data-timer-starter]");

  if (!el) return;

  if (count) {
    timerInterval = setInterval(() => {
      currentTime++;
      elTimerText.textContent = currentTime;
    }, 1000);
    count = !count;
    elTimerText.style.color = "lime";
  }
}

// Fn pause
function pause(evt) {
  const el = evt.target.closest("[data-timer-stopper]");

  if (!el) return;

  clearInterval(timerInterval);
  count = !count;
  elTimerText.style.color = "red";
}
