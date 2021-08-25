function findSmallestSubarray(arr, givenSum) {
  let windowStart = 0;
  let curSum = 0;
  let minSize = Infinity;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    curSum += arr[windowEnd];

    while (curSum >= givenSum) {
      let curSize = windowEnd - windowStart + 1;
      // update min size
      minSize = Math.min(curSize, minSize);
      // shrink down to the left
      curSum -= arr[windowStart];
      windowStart++;
    }
  }

  return minSize === Infinity ? 0 : minSize;
}

module.exports = { findSmallestSubarray };
