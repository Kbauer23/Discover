const botao = document.getElementById("openModal")
const div = document.querySelector(".invisible")

botao.addEventListener('click', remover)
document.onkeydown = function (event) {
  if (div.classList.contains('invisible') === false) {
    if (event.key === 'Escape') {
      div.classList.add('invisible')
    }
  }

}
function remover() {
  div.classList.remove('invisible')
}
