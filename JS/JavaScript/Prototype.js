// Aula 1
/*
  Prototype
    *prototype-based language
    *prototype chain
    *__proto__
*/
///////////////////////

//Aula 2
/* 
  Type Conversion (typecasting) vs Type coersion
  nesse vc indica qual tipo quer | Nesse é de maneira forçada feita pelo java inplicitamente
  *Alteração de um tipo de dado para outro tipo
*/
console.log('9' + 5) //Type coersion
console.log(Number('9') + 5) // Type conversion
////////////////////////////////////

// Aula 3

let string = '123'
console.log(Number(string))
let number = 321
console.log(String(number))
////////////////////////////////////

// Aula 4

let word = 'Paralelepipído'
console.log(word.length)
let number2 = 1234
console.log(String(number).length)

//////////////////////////////////////

// Aula 5
let number3 = 3432.321312
console.log(number3.toFixed(2).replace('.', ',')) // nesse caso se eu quiser que a variavel
// number3 volte a ser um numero o replace não daria certo

/////////////////////////////////////////

// Aula 6

let word1 = 'Programar é um bom'
console.log(word1.toUpperCase())
//or
console.log(word1.toLowerCase())

///////////////////////

// Aula 7

let phrase = 'Eu quero viver'
console.log(phrase.includes('Amor'))
///////////////////////////

//Aula 8

let pharese1 = 'Eu quero viver o amor!'
let myArray = pharese1.split(' ')
console.log(myArray)
let phraseWhitUndescore = myArray.join('_')
console.log(phraseWhitUndescore.toLowerCase())
/////////////////////////////////

//Aula 9
let myArray1 = new Array('a', 'b', 'c')
console.log(myArray1)
/////////////////////////

//Aula 10
console.log(
  [
    'a',
    { type: 'array' },
    function () {
      return 'alo'
    }
  ][2]()
)
console.log(
  [
    'a',
    { type: 'array' },
    function () {
      return 'alo'
    }
  ][1].type
)
console.log(
  [
    'a',
    { type: 'array' },
    function () {
      return 'alo'
    }
  ][0]
)
/////////////////////////

// Aula 11
let word2 = 'manipulação'
console.log(Array.from(word2))
//////////////////////////////

// Aula 12
let techs = ['html', 'css', 'js']

techs.push('nodejs') //adicionar um item no fim

techs.unshift('sql') //adicionar um item no começo

techs.pop() //remover do fim

techs.unshift() //remover do começo

console.log(techs.slice(1, 3)) //Pegar somente alguns elementos do array

techs.splice(1, 2) //remover 1 ou mais items em qualquer posição do array

let index = techs.indexOf('css') // encontrar a posição de um elemento do array
techs.splice(index)
console.log(techs)
