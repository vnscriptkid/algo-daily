// Find the Smallest Missing Positive Number (medium) #
// Given an unsorted array containing numbers, find the smallest missing positive number in it.

// [1, 2, 3, 4, 5, 6, 7, 8]
// [1, 2, 3, 20, 5, -7, 30, -10]
//           ^
// 4

// [1, 2, 3, 4, 5]
// [5, 3, 4, 1, 2] => 6

function findSmallestMissingPositiveNumber(arr) {
  // first iteration: bring curNumber to its correct idx (if number in range of [1, arr.length])
  let i = 0
  while (i < arr.length) {
    let curNum = arr[i]
    let correctIdx = curNum - 1

    if (
      i !== correctIdx &&
      curNum >= 1 &&
      curNum <= arr.length &&
      arr[correctIdx] !== correctIdx + 1
    ) {
      ;[arr[i], arr[correctIdx]] = [arr[correctIdx], arr[i]]
    } else i++
  }

  // second iteration: find the first number that is not at its correct index
  for (let [curIdx, curNum] of arr.entries()) {
    let numShouldBeHere = curIdx + 1
    if (curNum !== numShouldBeHere) return numShouldBeHere
  }

  return arr.length + 1
}

module.exports = {findSmallestMissingPositiveNumber}
