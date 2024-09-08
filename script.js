function toggleMode () {
  const html = document.documentElement

  html.classList.toggle('light')

  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
    alt.setAttribute('alt', 'Foto do Joseph usando uma camisa social azul')
  } else {
    img.setAttribute('src', './assets/avatar.png')
    alt.setAttribute('alt', 'Foto do Joseph segurando o capuz do casaco.') 
  }
}