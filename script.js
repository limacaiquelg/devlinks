function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto do Mayk Brito sorrindo, usando óculos escuros, camiseta preta, jaqueta de couro em fundo gradiente de rosa para azul claro."
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto do Mayk Brito sorrindo, usando óculos, camiseta preta e barba em um fundo amarelo."
    )
  }
}
