// Find the Smallest Missing Positive Number (medium) #
// Given an unsorted array containing numbers, find the smallest missing positive number in it.

// [-10, -7, 30, 20, 3, 2, 5, 1]

// [1, 2, 3, 20, 5, -7, 30, -10]
//                               ^

function findSmallestMissingPositiveNumber(arr) {
  // first iteration: bring numbers that belongs to [1, n], to its correct position
  let n = arr.length
  let i = 0
  while (i < n) {
    let curNum = arr[i]
    if (curNum < 1 || curNum > n) {
      i++
      continue
    }

    let correctIdx = curNum - 1
    if (i !== correctIdx) {
      ;[arr[i], arr[correctIdx]] = [arr[correctIdx], arr[i]]
    } else i++
  }

  // second iteration: find first number that is not at its correct position
  for (let [i, num] of arr.entries()) {
    if (num !== i + 1) return i + 1
  }

  return n + 1
}

module.exports = {findSmallestMissingPositiveNumber}
