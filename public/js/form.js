const durationOptions = document.getElementById('durationOptions')
const textTypeOptions = document.getElementById('textTypeOptions')
const textFilesOptions = document.getElementById('textFilesOptions')
const forceCorrectionCheckbox = document.getElementById('forceCorrectionCheckbox')
const startBtn = document.getElementById('startBtn')
const resetBtn = document.getElementById('resetBtn')
const stopBtn = document.getElementById('stopBtn')

durationOptions.addEventListener('change', (e) => {
  duration = getSelectedOption(e.target)
})

textTypeOptions.addEventListener('change', (e) => {
  genre = getSelectedOption(e.target)
})

textFilesOptions.addEventListener('change', (e) => {
  file = getSelectedOption(e.target)
})

forceCorrectionCheckbox.addEventListener('change', (e) => {
  forceCorrection = e.target.checked
})

startBtn.addEventListener('click', (e) => {
  e.preventDefault()
  stateOfApplication.playing = true
})

resetBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (stateOfApplication.playing) {
    stateOfApplication.playing = false

    setTimeout(() => {
      stateOfApplication.playing = true
    }, 1000)
  }
})

stopBtn.addEventListener('click', (e) => {
  e.preventDefault()
  stateOfApplication.playing = false
})
