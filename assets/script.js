function toggleMode() {
  const html = document.documentElement
  //comentário com código e as funcionalidades do if e else:
  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  // html.classList.add("light")
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/foto2.png")
  } else {
    // set tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/foto1.png")
  }

  const Text = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    Text.setAttribute(
      "alt",
      "Foto selfie de Rogério sorrindo, usando toca preta e cachecol marrom claro, com sol no rosto em uma ponte com rio congelado ao fundo recebendo luz solar e árvores como se estivessem escorrendo"
    )
  } else {
    Text.setAttribute(
      "alt",
      "Foto selfie de Rogério sorrindo, usando toca preta e óculos escuro ao sol, com gramado verde ao fundo"
    )
  }
}
