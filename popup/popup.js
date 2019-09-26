document.body.style.backgroundImage = 'url("https://www.transparenttextures.com/patterns/white-wall-3.png")';

//
const popup = () => {
  document.getElementById("start").addEventListener('click', () => {
    document.getElementById("game").style.display = "block"
  })

  document.getElementById("restart").addEventListener('click', () => {
    document.getElementById("game").style.display = "none"
  })
  document.getElementById("newplayers").addEventListener('click', () => {
    document.getElementById("game").style.display = "none"
  })
}
//
popup()

