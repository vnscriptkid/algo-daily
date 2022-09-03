// Find the Duplicate Number (easy)
// We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’.
// The array has only one duplicate but it can be repeated multiple times.
// Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.

//        [1, 2, 3, 4]
// Input: [1, 4, 3, 4, 2]
//            ^
// Output: 4

//        [1, 2, 3, 4, 5]
// Input: [1, 2, 3, 3, 5, 4]
//                  ^

// Output: 3

//        [1, 2, 3, 4]
// Input: [4, 2, 1, 4, 4]
//         ^
// Output: 4

function findDuplicateNumber(nums) {
  let i = 0
  while (i < nums.length) {
    let num = nums[i]
    let correctIndex = num - 1

    if (i !== correctIndex) {
      if (nums[correctIndex] !== correctIndex + 1) {
        ;[nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]]
      } else return num
    } else i++
  }
}

module.exports = {findDuplicateNumber}
