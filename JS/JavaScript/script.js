var Name = 'kayke'
let age, isHumen
age = 19
isHumen = true
console.log(`O${Name}tem${age}anos`)

/////////////////////////////////////
// Exercicios
let student = {
  weight: 74,
  Name: 'Kayke',
  age: 19,
  stars: 5.5,
  isSubscribed: true
}

/*console.log(`${student.Name} de idade ${student.age} pesa ${student.weight}`)
 */

let students = []

students = [student]

const newstudent = {
  Name: 'John',
  Age: 24,
  Weight: 67
}
students[1] = newstudent
console.log(students)
