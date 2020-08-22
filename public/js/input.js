let wordIndex = 0

function resetState() {
  wordIndex = 0
  wordIndex2 = 0
  textInput.value = ''
  stateOfApplication.started = false
  stateOfApplication.playing = false
  timerCount.innerText = ''
  if (interval) clearInterval(interval)
  correctWordsResultsContainer.innerText = ''
  wrongWordsResultsContainer.innerText = ''
  totalResultsWMPContainer.innerText = ''
  totalWordsResultsContainer.forEach((element) => {
    element.innerText = ''
  })
  accuracyContainer.innerText = ''
  correctCharacters = 0
  wrongCharacters = 0
  totalTypedCharacters = 0
}

const modifyHtmlInContainer = (word, className) => {
  textContainer.innerHTML =
    fileText.substring(0, wordIndex) + addCssClass(word, className) + fileText.substring(wordIndex + 1)
}

function validateInput(e) {
  if (checkMultipleOptions(e.keyCode, [16, 17, 20, 13])) return

  const { key, keyCode } = e

  if (keyCode === 8) {
    wordIndex--
    correctCharacters--
    modifyHtmlInContainer(fileText[wordIndex], 'right')
    return
  }

  if (key === fileText[wordIndex]) {
    modifyHtmlInContainer(fileText[wordIndex], 'right')
    correctCharacters++
  } else {
    modifyHtmlInContainer(fileText[wordIndex], 'wrong')
    wrongCharacters++
  }

  totalTypedCharacters++
  wordIndex++
}

textInput.addEventListener('keydown', (e) => {
  if (!stateOfApplication.playing) {
    e.preventDefault()
  }

  if (stateOfApplication.playing) {
    if (!stateOfApplication.started) {
      stateOfApplication.started = true
      activateTimer()
    }

    if (stateOfApplication.started) {
      validateInput(e)
    }
  }
})
