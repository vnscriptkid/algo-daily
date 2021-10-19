// Find all Duplicate Numbers
// We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’.
// The array has some duplicates, find all the duplicate numbers without using any extra space.

// Input: [3, 4, 4, 5, 5]
// Input: [5, 4, 3, 4, 5]
//                     ^
// Output: [4, 5]

function findAllDuplicates(nums) {
  // first iteration: place each number to it's correct index

  let i = 0
  while (i < nums.length) {
    let curNum = nums[i]
    let correctIndex = curNum - 1

    if (i !== correctIndex && curNum !== nums[correctIndex]) {
      ;[nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]]
    } else i++
  }

  // second round: find duplicates
  const output = []

  for (let i = 0; i < nums.length; i++) {
    let curNum = nums[i]
    let correctIndex = curNum - 1

    if (i !== correctIndex) output.push(curNum)
  }
  return output
}

module.exports = {findAllDuplicates}
