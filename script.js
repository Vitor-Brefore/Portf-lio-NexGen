window.addEventListener("load", function () {
  setTimeout(() => {
    const loadingScreen = document.getElementById("loading-screen")
    loadingScreen.style.display = "none"

    const conteudo = document.getElementById("conteudo")
    conteudo.style.display = "block"
  }, 2000)
})

window.revelar = ScrollReveal({ reset: true })

revelar.reveal('.inv', {
  duration: 1500,
  distance: '90px'
})

revelar.reveal('.invtit1', {
  duration: 1500,
  distance: '100px'
})

revelar.reveal('.invtit2', {
  duration: 1500,
  distance: '150px',
  delay: 500
})

revelar.reveal('.invtit3', {
  duration: 1500,
  distance: '200px',
  delay: 1000
})

revelar.reveal('.invtit4', {
  duration: 1500,
  distance: '250px',
  delay: 1500
})

revelar.reveal('.invp2-1', {
  duration: 1500,
  distance: '100px'
})

revelar.reveal('.invp2-2', {
  duration: 1500,
  distance: '150px',
  delay: 500
})

revelar.reveal('.invp2-3', {
  duration: 1500,
  distance: '200px',
  delay: 1000
})

revelar.reveal('.invp2-4', {
  duration: 1500,
  distance: '250px',
  delay: 1500
})

revelar.reveal('.invp3-1', {
  duration: 1500,
  distance: '100px'
})

revelar.reveal('.invp3-2', {
  duration: 1500,
  distance: '150px',
  delay: 500
})

revelar.reveal('.invp3-3', {
  duration: 1500,
  distance: '200px',
  delay: 1000
})

revelar.reveal('.invp3-4', {
  duration: 1500,
  distance: '250px',
  delay: 1500
})