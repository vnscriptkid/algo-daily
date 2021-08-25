function findSmallestMissingPositiveNumber(arr) {
  // loop all numbers, bring each number to its correct index [1,2,3,4,...,n]
  const n = arr.length;
  let i = 0;

  while (i < n) {
    const j = arr[i] - 1;
    if (arr[i] > 0 && arr[i] <= n && arr[i] !== arr[j])
      [arr[j], arr[i]] = [arr[i], arr[j]];
    else i++;
  }
  // loop again, find the first number standing at falsy index, return index + 1
  for (i = 0; i < n; i++) {
    if (arr[i] !== i + 1) return i + 1;
  }
  return n + 1;
}

module.exports = { findSmallestMissingPositiveNumber };
