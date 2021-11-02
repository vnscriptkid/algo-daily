// Count of Subset Sum (hard) #
// Given a set of positive numbers, find the total number of subsets whose sum is equal to a given number ‘S’.

function countSubsetSum(
  nums,
  target,
  curIndex = 0,
  curSum = 0,
  final = {count: 0},
) {
  // base case
  if (curSum === target) {
    final.count += 1
    return
  } else if (curSum > target || curIndex === nums.length) return

  // 2 choices:
  // choice 1: include cur num
  countSubsetSum(nums, target, curIndex + 1, curSum + nums[curIndex], final)
  // choice 2: not include
  countSubsetSum(nums, target, curIndex + 1, curSum, final)

  return final.count
}

// Input: {1, 1, 2, 3}, S=4
// Output: 3
// The given set has '3' subsets whose sum is '4': {1, 1, 2}, {1, 3}, {1, 3}
// Note that we have two similar sets {1, 3}, because we have two '1' in our input.

module.exports = {countSubsetSum}
