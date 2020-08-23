let duration = Number(getSelectedOption(durationOptions))
let genre
let fileId
let fileText = ''
let correctCharacters = 0
let wrongCharacters = 0
let textInContainer = ''
let totalCharacters = 0
let totalTypedCharacters = 0
let interval
let wordIndex = 0

const stateOfApplication = {
  playing: false,
  started: false,
}

function resetState() {
  wordIndex = 0
  textInput.value = ''
  stateOfApplication.started = false
  stateOfApplication.playing = false
  timerCount.innerText = ''
  if (interval) clearInterval(interval)
  correctCharactersResultsContainer.innerText = ''
  wrongCharactersResultsContainer.innerText = ''
  totalResultsWMPContainer.innerText = ''
  totalCharactersResultsContainer.forEach((element) => {
    element.innerText = ''
  })
  accuracyContainer.innerText = ''
  correctCharacters = 0
  wrongCharacters = 0
  totalTypedCharacters = 0
}

function activateTimer() {
  let time = 0
  interval = setInterval(() => {
    if (time <= duration * 1000) {
      timerCount.innerText = `${secondsToMinutes(duration - time / 1000)} Minutes`
    } else {
      stateOfApplication.started = false
      stateOfApplication.playing = false
      showResults()
      clearInterval(interval)
    }

    time += 1000
  }, 1000)
}

async function loadTextFilesIntoUI(genre) {
  textFilesOptions.innerHTML = ''
  const textFilesRequest = await fetch(`./resources/english/${genre.toLowerCase()}.json`)
  const textFilesResponse = await textFilesRequest.json()

  textFilesResponse.forEach((textFile) => {
    const option = document.createElement('option')
    option.value = textFile.id
    option.innerText = textFile.title
    textFilesOptions.appendChild(option)
  })

  return
}

async function loadTextGenresIntoUI() {
  const req = await fetch('./resources/available.json')
  const res = await req.json()
  res.genres.forEach((genre) => {
    const option = document.createElement('option')
    option.value = genre.toLowerCase()
    option.innerText = genre
    textTypeOptions.appendChild(option)
  })

  await loadTextFilesIntoUI(res.genres[0])

  return
}

async function fetchText(genre, id) {
  const req = await fetch(`./resources/english/${genre}.json`)
  const res = await req.json()

  const textFile = res.find((file) => file.id === Number(id))

  textContainerTitle.innerText = `This is the ${formatName(genre)} of: ${textFile.title}`
  fileText = textFile.text
  textContainer.innerText = textFile.text
  textInContainer = textContainer.innerHTML
  totalCharacters = textFile.text.split('').length
  return
}

async function main() {
  await loadTextGenresIntoUI()
  genre = getSelectedOption(textTypeOptions)
  fileId = getSelectedOption(textFilesOptions)
  textInput.value = ''
  fetchText(genre, fileId)
}

main()
