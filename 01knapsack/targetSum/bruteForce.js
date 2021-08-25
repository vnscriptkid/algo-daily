function countWaysToAddSymbols(nums, sum) {
  function countRecursively(index, curSum) {
    // base case
    if (index === nums.length) {
      return curSum === sum ? 1 : 0;
    }

    // at each index we have 2 choices
    // choice 1: make number at index positive
    let count1 = countRecursively(index + 1, curSum + nums[index]);

    // choice 2: make number at index negative
    let count2 = countRecursively(index + 1, curSum - nums[index]);

    // sum up 2 choices
    return count1 + count2;
  }

  return countRecursively(0, 0);
}

module.exports = { countWaysToAddSymbols };
