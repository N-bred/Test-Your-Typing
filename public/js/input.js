function validateInput(e) {
  if (checkMultipleOptions(e.keyCode, [16, 17, 20, 13])) return

  const { key, keyCode } = e

  if (keyCode === 8) {
    wordIndex--
    correctCharacters--
    textContainer.innerHTML = modifyHtmlInContainer(fileText, fileText[wordIndex], 'right', wordIndex)
    return
  }

  if (key === fileText[wordIndex]) {
    textContainer.innerHTML = modifyHtmlInContainer(fileText, fileText[wordIndex], 'right', wordIndex)
    correctCharacters++
  } else {
    textContainer.innerHTML = modifyHtmlInContainer(fileText, fileText[wordIndex], 'wrong', wordIndex)
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
