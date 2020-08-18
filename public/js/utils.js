const getSelectedOption = (selectElement) => selectElement.options[selectElement.selectedIndex].value
const formatName = (name) => (name[name.length - 1] === 's' ? name.slice(0, -1) : name)
