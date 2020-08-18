let duration = getSelectedOption(durationOptions)
let genre
let fileId
let forceCorrection = false

const stateOfApplication = {
  playing: false,
  started: false,
}

async function loadTextFilesIntoUI(genre) {
  textFilesOptions.innerHTML = ''
  const textFilesRequest = await fetch(`../resources/english/${genre.toLowerCase()}.json`)
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
  const req = await fetch('../resources/available.json')
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
  const req = await fetch(`../resources/english/${genre}.json`)
  const res = await req.json()

  const textFile = res.find((file) => file.id === Number(id))

  textContainerTitle.innerText = `This is the ${formatName(genre)} of: ${textFile.title}`
  textContainer.innerText = textFile.text
  return
}

async function main() {
  await loadTextGenresIntoUI()
  genre = getSelectedOption(textTypeOptions)
  fileId = getSelectedOption(textFilesOptions)
  fetchText(genre, fileId)
}

main()
