// Squaring a Sorted Array (easy)
// Problem Statement
// Given a sorted array, create a new array containing squares
// of all the number of the input array in the sorted order.

// Input: [0, 1, 4, 4, 9]
//         ^$
// leftSquare:0
// rightSquare:0

// Output: [0, 1, 4, 4, 25]

function makeSquares(arr) {
  let left = 0,
    right = arr.length - 1

  while (left < right) {
    let leftSquare = Math.pow(arr[left], 2)
    let rightSquare = Math.pow(arr[right], 2)

    if (leftSquare > rightSquare) {
      ;[arr[left], arr[right]] = [arr[right], arr[left]]
    }

    arr[right] = Math.max(leftSquare, rightSquare)
    right--
  }
}

module.exports = {makeSquares}
