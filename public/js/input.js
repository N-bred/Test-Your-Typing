let colIndex = 0
let rowIndex = 0
let wordIndex = 0
let wordIndex2 = 0

function resetState() {
  colIndex = 0
  rowIndex = 0
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
  correctWords = []
  wrongWords = []
  wrongCharacters = 0
  totalTypedCharacters = 0
}

const modifyHtmlInContainer = (word, className) => {
  textContainer.innerHTML =
    textInContainer.substring(0, wordIndex2) +
    addCssClass(word[wordIndex], className) +
    textInContainer.substring(wordIndex2 + 1)
}

function validateInput(e) {
  if (checkMultipleOptions(e.keyCode, [16, 17, 20, 13])) return

  const { key, keyCode } = e
  const { value } = e.target
  const word = fileText[rowIndex][colIndex]

  if (keyCode === 32) {
    if (value.trim() === word) {
      correctWords.push(word)
    } else {
      wrongWords.push(word)
    }
    e.target.value = ''
    wordIndex = 0
    colIndex++
    wordIndex2++
  } else if (keyCode === 8) {
    wordIndex--
    wordIndex2--
  } else {
    if (key === word[wordIndex]) {
      modifyHtmlInContainer(word, 'right')
      correctCharacters++
    } else {
      modifyHtmlInContainer(word, 'wrong')
      wrongCharacters++
    }
    totalTypedCharacters++
    wordIndex++
    wordIndex2++
  }
}

textInput.addEventListener('keydown', (e) => {
  if (!stateOfApplication.playing) {
    e.preventDefault()
  }
})

textInput.addEventListener('keyup', (e) => {
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
