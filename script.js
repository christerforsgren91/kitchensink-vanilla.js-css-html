const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}