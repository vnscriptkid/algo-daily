function findMinSubsetSumDiff(set) {
  const cache = {};

  function findRecursively(index, sum1, sum2) {
    // base case: index === set.length
    if (index === set.length) return Math.abs(sum1 - sum2);

    const args = Array.from(arguments);
    if (args in cache) return cache[args];

    // at index, we have 2 choices
    // choice 1: add number at index to sum1
    const diff1 = findRecursively(index + 1, sum1 + set[index], sum2);
    // choice 2: add number at index to sum2
    const diff2 = findRecursively(index + 1, sum1, sum2 + set[index]);

    cache[args] = Math.min(diff1, diff2);

    return cache[args];
  }

  return findRecursively(0, 0, 0);
}

module.exports = { findMinSubsetSumDiff };
