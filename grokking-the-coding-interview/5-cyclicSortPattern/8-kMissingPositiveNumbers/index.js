// Find the First K Missing Positive Numbers

// Given an unsorted array containing numbers and a number ‘k’,
// find the first ‘k’ missing positive numbers in the array.

// Input: [3, -1, 4, 5, 5], k=3
// Output: [1, 2, 6]
// Explanation: The smallest missing positive numbers are 1, 2 and 6.

// Input: [3, -1, 4, 5, 5], k=3
// Output: [1, 2, 6]
// Explanation: The smallest missing positive numbers are 1, 2 and 6.

//  1  2   3  4  5  6
//  _  _   x  x  x  _
// [3, -1, 4, 5, 5], k=3

//  1  2   3  4  5
// [6, -1, 3, 4, 5], k = 3
//  _  _   x  x  x
//
//                  ^
// [1, 2, ]

function findKmissingPositiveNumbers(arr, k) {
  // 1st loop: bring every numbers back to its correct position (1-n)
  const n = arr.length
  let i = 0
  while (i < n) {
    const curNum = arr[i]

    if (curNum < 1 || curNum > n) {
      i++
      continue
    }

    const correctIdx = curNum - 1
    if (i !== correctIdx && arr[correctIdx] !== correctIdx + 1) {
      ;[arr[i], arr[correctIdx]] = [arr[correctIdx], arr[i]]
    } else i++
  }

  // 2nd loop: find numbers that are not at their correct positions
  const missingPositive = []

  let sources = new Set()

  for (i = 0; i < n && missingPositive.length < k; i++) {
    if (arr[i] !== i + 1) {
      missingPositive.push(i + 1)
      if (arr[i] > 0) sources.add(arr[i])
    }
  }

  let nextCandidate = n + 1
  while (missingPositive.length < k) {
    if (!sources.has(nextCandidate)) missingPositive.push(nextCandidate)
    nextCandidate++
    // have not found enough k numbers?
    //   - remaining numbers are out of range (1, arr.length)
    //   - starts from (n + 1) , check if numbers exist in the original array (set)
  }

  return missingPositive
}

module.exports = {findKmissingPositiveNumbers}
