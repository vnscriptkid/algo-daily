// Find all Duplicate Numbers
// We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’.
// The array has some duplicates, find all the duplicate numbers without using any extra space.

// 0 1 2 3 4
// 1 2 3 4 5

// idx:    0  1  2  3  4
// Input: [5, 4, 3, 4, 5]
//                        ^

// Output: [4, 5]

function findAllDuplicates(nums) {
  // put back each number to its correct slot
  let i = 0
  while (i < nums.length) {
    let curNum = nums[i]
    let correctIdx = curNum - 1

    // swap when: currentNum is not at it's correct index && the number at correct index is diff from curNumber
    if (i !== correctIdx && curNum !== nums[correctIdx]) {
      ;[nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]]
    } else i++
  }

  // finding the duplicates
  const output = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) output.push(nums[i])
  }

  return output
}

module.exports = {findAllDuplicates}
