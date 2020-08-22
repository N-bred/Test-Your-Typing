function showResults() {
  totalCharactersResultsContainer.innerText = ''
  wrongCharactersResultsContainer.innerText = ''
  correctCharactersResultsContainer.innerText = ''
  totalResultsWMPContainer.innerText = ''

  const wpm = ~~(totalTypedCharacters / 5 - wrongCharacters) / (duration / 60)
  const accuracy = ~~((correctCharacters / totalTypedCharacters) * 100)

  totalCharactersResultsContainer.forEach((element) => {
    element.innerText = totalCharacters
  })
  wrongCharactersResultsContainer.innerText = wrongCharacters
  correctCharactersResultsContainer.innerText = correctCharacters
  totalResultsWMPContainer.innerText = wpm
  accuracyContainer.innerText = accuracy
}
