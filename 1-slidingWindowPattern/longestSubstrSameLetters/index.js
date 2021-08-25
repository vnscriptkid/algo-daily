// find longest substring with same letters, having at most k chars replaced
function findLongestSubstrSameLetters(str, k) {
  const freq = {};
  let maxRepeated = 0;
  let longestSubstrSize = 0;

  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    // add to freq
    let curChar = str[windowEnd];
    if (!(curChar in freq)) freq[curChar] = 0;
    freq[curChar] += 1;

    // update maxRepeated
    maxRepeated = Math.max(maxRepeated, freq[curChar]);

    // do we need shrink down window?
    const sizeOfCurWindow = windowEnd - windowStart + 1;
    if (maxRepeated + k < sizeOfCurWindow) {
      let leftMostChar = str[windowStart];
      freq[leftMostChar] -= 1;
      windowStart++;
    }

    // update longest substr
    longestSubstrSize = Math.max(
      longestSubstrSize,
      windowEnd - windowStart + 1
    );
  }
  return longestSubstrSize;
}

module.exports = { findLongestSubstrSameLetters };
