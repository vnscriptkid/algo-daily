function findDistinctSubsets(nums) {
  // sort num so that duplicates are placed next to each other
  nums.sort((a, b) => a - b);

  const subsets = [];
  subsets.push([]);

  let start = 0,
    end = 0;

  for (let [index, curNum] of nums.entries()) {
    start = 0;

    if (index > 0 && curNum === nums[index - 1]) {
      start = end + 1;
    }

    end = subsets.length - 1;

    for (let i = start; i <= end; i++) {
      const existingSubset = subsets[i];
      const newSubset = [...existingSubset, curNum];
      subsets.push(newSubset);
    }
  }

  return subsets;
}

module.exports = { findDistinctSubsets };
