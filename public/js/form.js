durationOptions.addEventListener('change', (e) => {
  duration = getSelectedOption(e.target)
})

textTypeOptions.addEventListener('change', async (e) => {
  genre = getSelectedOption(e.target)
  await loadTextFilesIntoUI(genre)
  await fetchText(genre, 0)
})

textFilesOptions.addEventListener('change', async (e) => {
  fileId = getSelectedOption(e.target)
  await fetchText(genre, fileId)
})

startBtn.addEventListener('click', (e) => {
  e.preventDefault()
  stateOfApplication.playing = true
})

resetBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (stateOfApplication.playing) {
    stateOfApplication.playing = false
    stateOfApplication.started = false

    fetchText(genre, fileId)
    resetState()

    setTimeout(() => {
      stateOfApplication.playing = true
    }, 1000)
  }
})

stopBtn.addEventListener('click', (e) => {
  e.preventDefault()

  fetchText(genre, fileId)
  resetState()
})
