// [1, 2, 3, 4, 5]
// [1, 3, 4, 4, 2]
//        ^

// [1, 2, 3, 4, 5]
// [4, 2, 1, 4, 4]
//              ^

function findDuplicateNumber(nums) {
  let i = 0

  while (i < nums.length) {
    let num = nums[i]
    let correctIndex = num - 1

    if (i !== correctIndex) {
      if (nums[correctIndex] === correctIndex + 1) return num
      else {
        ;[nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]]
      }
    } else i++
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return nums[i]
  }

  return -1
}

module.exports = {findDuplicateNumber}
