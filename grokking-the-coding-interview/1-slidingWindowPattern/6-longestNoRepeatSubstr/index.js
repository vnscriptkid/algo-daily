// No-repeat Substring
// Given a string, find the length of the longest substring which has no repeating characters.

// Input: String="aabccbb"
// Output: 3
// Explanation: The longest substring without any repeating characters is "abc".

// a a b c c b b
//             ^
//               $

// longest: 3
// cur: { b: 1 }

function hasRepeatingChars(map, start, end) {
  const windowSize = end - start + 1
  const numOfDiffChars = Object.keys(map).length
  return windowSize !== numOfDiffChars
}

function findLongestSubstrNoRepeat(str) {
  let windowStart = 0
  const freq = {}

  let longest = 0

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let curChar = str[windowEnd]
    // add curChar to freq map
    if (!(curChar in freq)) freq[curChar] = 0
    freq[curChar]++

    // by adding 1 char to our map, could make our window invalid
    while (hasRepeatingChars(freq, windowStart, windowEnd)) {
      let firstChar = str[windowStart]
      freq[firstChar]--
      if (freq[firstChar] === 0) delete freq[firstChar]

      windowStart++
    }

    longest = Math.max(longest, Object.keys(freq).length)
  }

  return longest
}

module.exports = {findLongestSubstrNoRepeat}
