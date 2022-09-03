// Smallest Window containing Substring

// Given a string and a pattern,
// find the smallest substring in the given string which has all the characters of the given pattern.

// Input: String="aabdec", Pattern="abc"
// Output: "abdec"
// Explanation: The smallest substring having all characters of the pattern is "abdec"

// a a b d e c
//     ^
//             $

// matched = 2;
// { a: 1, b: 0, c: 0 }

// candidates: [ aabdec, abdec  ]

// Input: String="abdabca", Pattern="abc"
// Output: "abc"
// Explanation: The smallest substring having all characters of the pattern is "abc".

function findSmallestContainer(str, pattern) {
  // build map { char: freq } out of pattern
  const patternMap = {}
  for (let char of pattern) {
    if (!(char in patternMap)) patternMap[char] = 0
    patternMap[char]++
  }

  // keep track of matched
  let matched = 0
  // keep track of curSmallest
  let curSmallest = ''
  // start sliding window
  let windowStart = 0
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let newChar = str[windowEnd]

    if (newChar in patternMap) {
      patternMap[newChar]--

      if (patternMap[newChar] === 0) matched++
    }

    // is current window is valid
    while (matched === Object.keys(patternMap).length) {
      // cur window is valid
      let windowSize = windowEnd - windowStart + 1

      if (curSmallest === '' || windowSize < curSmallest.length) {
        curSmallest = str.substr(windowStart, windowSize)
      }

      // can we find better substr? shrink cur window
      const firstChar = str[windowStart]

      if (firstChar in patternMap) {
        patternMap[firstChar]++

        if (patternMap[firstChar] > 0) matched--
      }

      windowStart++
    }
  }

  // return curSmallest
  return curSmallest
}

module.exports = {findSmallestContainer}
