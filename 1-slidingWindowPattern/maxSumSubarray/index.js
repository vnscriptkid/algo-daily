function maxSumSubarray(arr, k) {
  let windowStart = 0;
  let curSum = 0;
  let curMaxSum = -Infinity;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    curSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      curMaxSum = Math.max(curMaxSum, curSum);
      curSum -= arr[windowStart];
      windowStart++;
    }
  }
  return curMaxSum;
}

module.exports = { maxSumSubarray };
