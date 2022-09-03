// Problem Statement #
// Given a binary matrix representing an image, we want to flip the image horizontally, then invert it.

// To flip an image horizontally means that each row of the image is reversed.
// For example, flipping [0, 1, 1] horizontally results in [1, 1, 0].

// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.
// For example, inverting [1, 1, 0] results in [0, 0, 1].

// Input: [
//   [1,0,1],
//   [1,1,1],
//   [0,1,1]
// ]

// Output: [
//   [0,1,0],
//   [0,0,0],
//   [0,0,1]
// ]

// [0,1,1]
// [1,1,0]
// [0,0,1]

function reverseThenInvert(matrix) {
  // 1 2 3, 3 / 2 = 1.5 ~ 1
  // 1 2 3 4, 4 / 2 = 2 , left = 0, left < length / 2
  for (let row of matrix) {
    for (let left = 0; left < row.length / 2; left++) {
      let right = row.length - 1 - left

      ;[row[left], row[right]] = [row[right] ^ 1, row[left] ^ 1]
    }
  }
}

module.exports = {reverseThenInvert}
