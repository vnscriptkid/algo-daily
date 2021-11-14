// Triplets with Smaller Sum

// Given an array arr of unsorted numbers and a target sum,
// count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices.
// Write a function to return the count of such triplets.

// Input: [-1, 0, 2, 3], target=3
// Output: 2
// Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

// [-1, 0, x, y, z, 2, 3]
//  ^      @           $
//  k      i           j

function findTripletsWithSmallerSum(nums, target) {
  // sort the array
  // fix one number
  // limit the range of 2 other numbers
  // count = 0;
  // start checking sum of 3
  // 1. sum < target: count += j - i
  // 2. sum >= target: move the $ pointer leftward
  nums.sort((a, b) => a - b)

  let count = 0
  for (let first = 0; first < nums.length - 2; first++) {
    let second = first + 1
    let third = nums.length - 1

    while (second < third) {
      let curSum = nums[first] + nums[second] + nums[third]

      if (curSum < target) {
        count = count + (third - second)
        second++
      } else {
        third--
      }
    }
  }
  return count
}

module.exports = {findTripletsWithSmallerSum}
