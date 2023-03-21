/*Aula 1
Functions base
*/
// Criar um aplicativo de frases motivacionais

//Declaretion - declaração da função
//Function statement
function createPhrases() {
  console.log('Estudar é muito bom')
  console.log('Paciencia e persistencia')
  console.log('Revisão é a mãe do aprendizado')
}

//Execute, run, call, invoke
createPhrases()

console.log('Fim do programa, The END')

//////////////////////////////////////////////////////////////////////////

/* Aula 2
parametros
nunca esquecer do let nao criar variaveis sem palavra chave
*/

//Function expression or function anonymous

let total = 0

// Parameters(parametros)
const sum = function (number1, number2) {
  let total = number1 + number2
  return total
}

let number1 = 34
let number2 = 25

// console.log(`O numero 1 é ${number1}`)
// console.log(`O numero 2 é ${number2}`)

console.log(`A soma é ${sum(number1, number2)}`)
console.log(total)

/////////////////////////////////////////////////////////////////////////
/* Aula 3

 entender o conceito de funcão
 */
//Função é um liquidificador

function fazerSuco(fruta1, fruta2) {
  return fruta1 + fruta2
}

const copo = fazerSuco(`banana`, `maça`)

console.log(copo)

///////////////////////////////////////////////////////////////////////

// Aula 4

//Function scope

let subject = 'create video'

function createThink(subject) {
  subject = 'study'
  return subject
}

console.log(subject)
console.log(createThink(subject))

/////////////////////////////////////////////////////////////////

// Aula 5

//Function hoisting
sayMyName()

function sayMyName() {
  console.log('Kayke')
}
//sem hoisting
sayMyName()

const sayMyName = function () {
  console.log('Kayke')
}

/////////////////////////////////////////////////////////////////////
// Aula 6
//Arrow function

const sayMyName = () => {
  console.log('Myke')
}

sayMyName()

////////////////////////////////////////////////////////////////////////
// Aula 7]
// callbakc function

function sayMyName(name) {
  console.log('Antes do callback')
  name()
  console.log('Dps do callback')
}

sayMyName(() => {
  console.log('Estou em um callback')
})
////////////////////////////////////////////////////////////////////////
// Aula 8

/* 
  Function() constructor:
      *expressão 'new'
      *criar um novo objeto
      *this keyword
*/
function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + ' esta andando'
  }
}

const mayk = new Person('Mayk')
const joao = new Person('Joao')
console.log(joao.walk())
console.log(mayk.walk())
