export const animationText = document.querySelector('.animation')

export const seila = () => { function typeWriter(e) {
  const textoArray = e.innerHTML.split('')
  e.innerHTML = ''
  textoArray.forEach((letra, idx) => {
    setTimeout(() => {
      e.innerHTML += letra
    }, 75 * idx)
  })
}

typeWriter(animationText)

const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
})

sr.reveal(`.image`, {delay: 100, origin: 'top'})
sr.reveal(`main h2`, {origin: 'top'})
sr.reveal(`main p`, {origin: 'left'})
}