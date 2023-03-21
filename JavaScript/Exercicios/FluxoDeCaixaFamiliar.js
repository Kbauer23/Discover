let Cashflow = {
  revenues: [1200, 1000, 1300, 500, 70, 45, 100.5],
  expenses: [260.65, 1500, 75.3, 240.5]
}
function sum(array) {
  let total = 0
  for (let value of array) {
    total += value
  }
  return total
}
function calculatebalance() {
  const calculeincomes = sum(Cashflow.revenues)
  const calculeexpenses = sum(Cashflow.expenses)

  const total = calculeincomes - calculeexpenses

  const Itsok = total >= 0

  let balanceText = 'Negativo'

  if (Itsok) {
    balanceText = 'Positivo'
  }
  console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
}
calculatebalance()
