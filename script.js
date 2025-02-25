window.addEventListener("load", function () {
  setTimeout(() => {
    const loadingScreen = document.getElementById("loading-screen")
    loadingScreen.style.display = "none"

    const conteudo = document.getElementById("conteudo")
    conteudo.style.display = "block"
  }, 2000)
})
