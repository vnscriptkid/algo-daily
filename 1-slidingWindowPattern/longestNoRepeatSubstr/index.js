function findLongestSubstrNoRepeat(str) {
  const indices = {};

  let windowStart = 0;
  let longestNoRepeat = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let curChar = str[windowEnd];

    if (curChar in indices) {
      windowStart = Math.max(windowStart, indices[curChar] + 1);
    }

    indices[curChar] = windowEnd;

    longestNoRepeat = Math.max(longestNoRepeat, windowEnd - windowStart + 1);
  }
  return longestNoRepeat;
}

module.exports = { findLongestSubstrNoRepeat };
