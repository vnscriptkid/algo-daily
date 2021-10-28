// 0 0 1

function reverseThenInvert(matrix) {
  const n = matrix.length
  for (let row of matrix) {
    for (let i = 0; i < row.length / 2; i++) {
      let j = n - 1 - i
      if (i !== j) {
        ;[row[i], row[j]] = [row[j], row[i]]
        row[i] = 1 ^ row[i]
        row[j] = 1 ^ row[j]
      } else {
        row[i] = 1 ^ row[i]
      }
    }
  }
}
module.exports = {reverseThenInvert}
