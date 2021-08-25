function reverseThenInvert(matrix) {
  const n = matrix[0].length
  for (let row of matrix) {
    for (let i = 0; i <= Math.floor((n - 1) / 2); i++) {
      ;[row[i], row[n - i - 1]] = [row[n - i - 1] ^ 1, row[i] ^ 1]
    }
  }
}

module.exports = {reverseThenInvert}
