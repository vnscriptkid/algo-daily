// Find the Corrupt Pair (easy) #

// We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’.
// The array originally contained all the numbers from 1 to ‘n’, but due to a data error,
// one of the numbers got duplicated which also resulted in one number going missing. Find both these numbers.

// Input: [3, 1, 2, 5, 2]
// Output: [2, 4]
// Explanation: '2' is duplicated and '4' is missing.

// 1  2  3  4  5
// 3  1  2  5  2
//          *
// 1  2  3  2  5

// Input: [3, 1, 2, 3, 6, 4]
// Output: [3, 5]
// Explanation: '3' is duplicated and '5' is missing.

// [1, 2, 3, 4, 3, 6]
//              ^

function findCorruptPair(arr) {
  let i = 0
  while (i < arr.length) {
    let curNum = arr[i]
    let correctIdx = curNum - 1
    if (i !== correctIdx && arr[correctIdx] !== correctIdx + 1) {
      ;[arr[i], arr[correctIdx]] = [arr[correctIdx], arr[i]]
    } else i++
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) return [arr[i], i + 1]
  }
}

module.exports = {findCorruptPair}
