document.addEventListener('DOMContentLoaded', () => {
  let title = document.querySelector('h1')
  const startBtn = document.querySelector('.timer__start-btn')
  const pauseBtn = document.querySelector('.timer__pause-btn')
  let a = 0;
  let startInt;
  let count = true;

  function start() {
    if (count) {
      startInt = setInterval(() => {
        a++
        title.textContent = a
      }, 1000)
      count = !count
      title.style.color = 'green'
    }
  }

  function pause() {
    clearInterval(startInt)
    count = !count
    title.style.color = 'black'
  }

  startBtn.addEventListener('click', start)
  pauseBtn.addEventListener('click', pause)
})