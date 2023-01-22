// Els
const elTimerText = document.querySelector("[data-timer-text]")
const elTimerStart = document.querySelector("[data-timer-starter]")
const elTimerPause = document.querySelector("[data-timer-stopper]")


// Vars
let currentTime = 0
let timerInterval
let count = true

// Fn start
function start() {
  if (count) {
    timerInterval = setInterval(() => {
      currentTime++
      elTimerText.textContent = currentTime
    }, 1000);
    count = !count
    elTimerText.style.color = "lime"
  }
}

// Fn pause
function pause() {
  clearInterval(timerInterval)
  count = !count
  elTimerText.style.color = "black"
}

elTimerStart.addEventListener("click", start)

elTimerPause.addEventListener("click", pause)