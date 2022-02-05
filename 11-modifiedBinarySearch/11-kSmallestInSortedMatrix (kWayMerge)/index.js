// Given an N * N matrix where each row and column is sorted in ascending order,
// find the Kth smallest element in the matrix.

// const Matrix = [
//     [2, 6, 8],
//     [3, 7, 10],
//     [5, 8, 11],
//   ],
//   K = 5

function countFn(matrix, mid, smaller, larger) {
  const n = matrix.length
  // 1. how many numbers less than or equal to mid
  let count = 0
  // 2. max number less than or equal to mid
  // 3. smallest number greater than mid
  let col = 0,
    row = n - 1
  while (row >= 0 && col <= n - 1) {
    if (mid >= matrix[row][col]) {
      smaller = Math.max(smaller, matrix[row][col])
      col++
      count += row + 1
    } else {
      larger = Math.min(larger, matrix[row][col])
      row--
    }
  }

  return [count, smaller, larger]
}

function findKsmallest(matrix, k) {
  const n = matrix.length

  let start = matrix[0][0],
    end = matrix[n - 1][n - 1]

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2)

    const [count, smaller, larger] = countFn(
      matrix,
      mid,
      matrix[0][0],
      matrix[n - 1][n - 1],
    )

    if (count === k) return smaller

    if (count > k) end = smaller
    else start = larger
  }

  return start
}

module.exports = {findKsmallest}
