// Count of Subset Sum (hard) #
// Given a set of positive numbers, find the total number of subsets whose sum is equal to a given number ‘S’.

// Input: {1, 1, 2, 3}, S=4
// Output: 3
// The given set has '3' subsets whose sum is '4': {1, 1, 2}, {1, 3}, {1, 3}
// Note that we have two similar sets {1, 3}, because we have two '1' in our input.

// 1     1           _
// 1   1    _      1     _
// 2  2 _  2  _  2   _  2  _
// 3 3 _

function countSubsetSum(
  nums,
  target,
  numIndex = 0,
  curSum = 0,
  final = {count: 0},
) {
  // base case
  if (curSum === target) {
    final.count++
  }

  if (curSum >= target || numIndex === nums.length) {
    return
  }

  // recursive
  // consider nums[numIndex]
  // Choice 1: take this number
  countSubsetSum(nums, target, numIndex + 1, curSum + nums[numIndex], final)
  // Choice 2: skip this number
  countSubsetSum(nums, target, numIndex + 1, curSum, final)

  return final.count
}

module.exports = {countSubsetSum}
