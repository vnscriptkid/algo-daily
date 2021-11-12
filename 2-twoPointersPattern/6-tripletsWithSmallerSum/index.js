// Triplets with Smaller Sum

// Given an array arr of unsorted numbers and a target sum,
// count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices.
// Write a function to return the count of such triplets.

// Input: [-1, 0, 2, 3], target=3
// Output: 2
// Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

function findTripletsWithSmallerSum(nums, target) {
  nums.sort((a, b) => a - b)

  let count = 0

  for (let first = 0; first < nums.length; first++) {
    let left = first + 1,
      right = nums.length - 1

    while (left < right) {
      let curSum = nums[first] + nums[left] + nums[right]

      if (curSum < target) {
        count += right - left
        left++
      } else right--
    }
  }

  return count
}

module.exports = {findTripletsWithSmallerSum}
