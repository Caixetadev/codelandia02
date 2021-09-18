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
}