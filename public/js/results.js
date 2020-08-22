function showResults() {
  totalWordsResultsContainer.innerText = ''
  wrongWordsResultsContainer.innerText = ''
  correctWordsResultsContainer.innerText = ''
  totalResultsWMPContainer.innerText = ''

  totalWordsResultsContainer.forEach((element) => {
    element.innerText = fileText[0].length
  })
  wrongWordsResultsContainer.innerText = wrongWords.length
  correctWordsResultsContainer.innerText = correctWords.length

  const wpm = ~~(totalTypedCharacters / 5 - wrongCharacters) / (duration / 60)
  const accuracy = ~~((correctCharacters / totalTypedCharacters) * 100)
  totalResultsWMPContainer.innerText = wpm

  accuracyContainer.innerText = accuracy
}
