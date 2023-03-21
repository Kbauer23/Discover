function getNote(note) {
  let noteA = note >= 90 && note <= 100
  let noteB = note >= 80 && note <= 89
  let noteC = note >= 70 && note <= 79
  let noteD = note >= 60 && note <= 69
  let noteF = note < 60 && note >= 0

  let scoreFinal

  if (noteA) {
    scoreFinal = 'A'
  } else if (noteB) {
    scoreFinal = 'B'
  } else if (noteC) {
    scoreFinal = 'C'
  } else if (noteD) {
    scoreFinal = 'D'
  } else if (noteF) {
    scoreFinal = 'F'
  } else {
    scoreFinal = 'Nota invalida'
  }
  return scoreFinal
}
console.log(getNote(101))
console.log(getNote(98))
console.log(getNote(88))
console.log(getNote(78))
console.log(getNote(68))
console.log(getNote(58))
