function tempconvert(degree) {
  const celsiusExist = degree.toUpperCase().includes('C')
  const fahrenheintExist = degree.toUpperCase().includes('F')

  if (!celsiusExist && !fahrenheintExist) {
    throw new Error('Cannot convert degree')
  }
  let updateDegree = Number(degree.toUpperCase().replace('F', ''))
  let formula = fahrenheint => ((fahrenheint - 32) * 5) / 9
  let degreeSign = 'C'

  if (celsiusExist) {
    updateDegree = Number(degree.toUpperCase().replace('C', ''))
    formula = celsius => (celsius * 9) / 5 + 32
    degreeSign = 'F'
  }

  return formula(updateDegree) + degreeSign
}
try {
  console.log(tempconvert('50C'))
} catch (erro) {
  console.log(erro.message)
}
