// Find the Corrupt Pair (easy) #

// We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’.
// The array originally contained all the numbers from 1 to ‘n’, but due to a data error,
// one of the numbers got duplicated which also resulted in one number going missing. Find both these numbers.

//        [1, 2, 3, 4, 5]
// Input: [3, 1, 2, 5, 2]
// Output: [2, 4]
// Explanation: '2' is duplicated and '4' is missing.

// Input: [3, 1, 2, 3, 6, 4]
// Output: [3, 5]
// Explanation: '3' is duplicated and '5' is missing.

//  0  1  2  3  4
// [1, 2, 3, 2, 5]   number n should be at index (n - 1)
//           ^

function findCorruptPair(arr) {
  let i = 0
  while (i < arr.length) {
    let curNum = arr[i]
    let correctIdx = curNum - 1

    // goal: bring curNum to it's correct position
    if (i !== correctIdx && arr[correctIdx] !== correctIdx + 1) {
      ;[arr[i], arr[correctIdx]] = [arr[correctIdx], arr[i]]
    } else i++
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) return [arr[i], i + 1].sort()
  }

  throw new Error('oops! it should not come here')
}

module.exports = {findCorruptPair}
