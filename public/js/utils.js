const getSelectedOption = (selectElement) => selectElement.options[selectElement.selectedIndex].value
const formatName = (name) => (name[name.length - 1] === 's' ? name.slice(0, -1) : name)
const addCssClass = (word, cssClass) => `<span class="${cssClass}">${word}</span>`
const checkMultipleOptions = (value, options) => options.some((option) => value === option)
const secondsToMinutes = (time) => Math.floor(time / 60) + ':' + Math.floor(time % 60)
