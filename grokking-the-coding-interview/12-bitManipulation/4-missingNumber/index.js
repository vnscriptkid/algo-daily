// Given an array of n-1 integers in the range from 1 to n,
// find the one number that is missing from the array.

// Input: 1, 5, 2, 6, 4

// 3

// Answer: 3

// a ^ a = 0

function findMissingNumber(arr) {
  let x1 = 0
  for (let num of arr) {
    x1 ^= num
  }

  let x2 = 0
  for (let i = 1; i <= arr.length + 1; i++) {
    x2 ^= i
  }

  return x1 ^ x2
}

module.exports = {findMissingNumber}
