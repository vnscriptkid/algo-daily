// Find all Missing Numbers
// We are given an unsorted array containing numbers taken from the range 1 to ‘n’.
// The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.
//        [0, 1, 2, 3, 4, 5, 6, 7]
// source [1, 2, 3, 4, 5, 6, 7, 8] => number x at index x - 1
// Input: [1, 2, 3, 1, 5, 3, 2, 8]
//                                 ^

// Output: (4), (6), (7)

function swap(nums, x, y) {
  ;[nums[x], nums[y]] = [nums[y], nums[x]]
}

function findAllMissingNumbers(nums) {
  let i = 0
  while (i < nums.length) {
    let curNum = nums[i]
    let correctIndex = curNum - 1

    if (i !== correctIndex && nums[correctIndex] !== correctIndex + 1) {
      swap(nums, i, correctIndex)
    } else {
      i++
    }
  }

  let missingNumbers = []
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) missingNumbers.push(i + 1)
  }

  return missingNumbers
}

module.exports = {findAllMissingNumbers}
