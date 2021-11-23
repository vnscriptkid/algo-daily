// Target Sum

// You are given a set of positive numbers and a target sum ‘S’. Each number should be assigned either a ‘+’ or ‘-’ sign.
// We need to find the total ways to assign symbols to make the sum of the numbers equal to the target ‘S’.

function countWaysToAddSymbols(
  nums,
  sum,
  idx = 0,
  curSum = 0,
  count = {final: 0},
) {
  if (idx === nums.length) {
    if (curSum === sum) count.final += 1
    return
  }
  // 2 choices:
  countWaysToAddSymbols(nums, sum, idx + 1, curSum + nums[idx], count)
  countWaysToAddSymbols(nums, sum, idx + 1, curSum - nums[idx], count)

  return count.final
}

module.exports = {countWaysToAddSymbols}
