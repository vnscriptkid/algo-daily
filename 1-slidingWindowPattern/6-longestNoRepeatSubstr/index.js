// No-repeat Substring
// Given a string, find the length of the longest substring which has no repeating characters.

// Input: String="aabccbb"
// Output: 3
// Explanation: The longest substring without any repeating characters is "abc".

function isRepeating(charMap, start, end) {
  const windowSize = end - start + 1
  const keys = Object.keys(charMap).length
  return keys < windowSize
}

function findLongestSubstrNoRepeat(str) {
  const charMap = {}

  let windowStart = 0

  let longest = 0

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    // add char at windowEnd to map
    let curChar = str[windowEnd]
    if (!(curChar in charMap)) charMap[curChar] = 0
    charMap[curChar]++

    // adding curChar may make our window repeating
    while (isRepeating(charMap, windowStart, windowEnd)) {
      // remove char at windowStart from charMap
      const firstChar = str[windowStart]
      charMap[firstChar]--
      if (charMap[firstChar] === 0) delete charMap[firstChar]

      windowStart++
    }

    longest = Math.max(longest, Object.keys(charMap).length)
  }

  return longest
}

module.exports = {findLongestSubstrNoRepeat}
