/* const element = document.querySelector('h1')
element.textContent += ' Ola Devs'
element.innerText = 'Oiieee'
element.innerHTML = 'Meu deus <small>!!!</small>'

const valor = document.querySelector('input')
valor.value = ' Consegui'
console.log(valor.value)

const header = document.querySelector('header')
header.setAttribute('id', 'header')
const headerID = document.querySelector('#header')
console.log(headerID.getAttribute('class'))
header.removeAttribute('id')
header.removeAttribute('class')

const estilo = document.querySelector('body')
estilo.style.backgroundColor = '#ffff'
console.log(estilo.style.backgroundColor)

const estilo1 = document.querySelector('body')
estilo1.classList.add('active', 'green')
console.log(estilo1.classList)
estilo1.classList.remove('active')
estilo1.classList.toggle('active')
 */
/* const body = document.querySelector('body')
console.log(body.parentElement)
 */
/* const el = document.querySelector('body')
console.log(el.firstElementChild) */
const div = document.createElement('div')
div.innerHTML = 'Ola Devs'

const body = document.querySelector('body')
const input = document.querySelector('input')
const header = document.querySelector('header')
body.append(div)
body.prepend(div)

body.insertBefore(div, input)
body.insertBefore(div, header.nextElementSibling)