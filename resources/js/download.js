const getDownloadNote = () => {
  switch(selection) {
    case 'windows':
      return 'Compatible with Windows 8 or newer'
      break

    case 'macos':
      return 'Compatible with macOS 10.13 or newer'
      break

    case 'ubuntu':
      return 'Compatible with Ubuntu 18.04 or newer'
      break
  }
}

const setDownloadNote = () => {
  const downloadNote = document.querySelector('#download-note')
  downloadNote.textContent = getDownloadNote()
}

const getDownloadLink = () => {
  switch(selection) {
    case 'windows':
      return 'https://download.swach.io/download/exe/'
      break
    case 'macos':
      return 'https://download.swach.io/download/dmg/'
      break
    case 'ubuntu':
      return 'https://swach.io/download/linux/'
      break
  }
}

const setDownloadLink = () => {
  const downloadButton = document.querySelector('#download-button')
  downloadButton.href = getDownloadLink()
}

const downloadSelect = document.querySelector('#download-select')
downloadSelect.addEventListener('change', () => {
  init()
})

const init = () => {
  selection = downloadSelect.value

  setDownloadNote()
  setDownloadLink()
}

init()
