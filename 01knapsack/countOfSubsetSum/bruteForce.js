function countSubsetSum(set, sum) {
  function countRecursively(index, curSum) {
    // base case
    if (curSum === 0) return 1;

    if (index === set.length) return 0;

    // at index, we have 2 choices
    // choice 1: include number at index to curSum
    let count1 = 0;
    if (curSum >= set[index]) {
      count1 = countRecursively(index + 1, curSum - set[index]);
    }
    // choice 2: skip number at index
    const count2 = countRecursively(index + 1, curSum);
    // combine both choices
    return count1 + count2;
  }

  return countRecursively(0, sum);
}

module.exports = { countSubsetSum };
