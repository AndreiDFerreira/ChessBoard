//elementomostrar e elemento esconder dentro do() funciona igual const document element id
function trocarTela(elementoMostrar, elementoEscondido) {
  elementoEscondido.style.display = "none"
  elementoMostrar.style.display = "block"
}


document.getElementById("jogar").addEventListener("click", () => {
  trocarTela(tabuleiro, inicio)
})

document.getElementById("voltar").addEventListener("click", () => {
  trocarTela(inicio, tabuleiro)
})

document.getElementById("desistir").addEventListener("click", () => {
  if (confirm("Desistir, você é nob?")) {
    trocarTela(inicio, tabuleiro)
  }
})
