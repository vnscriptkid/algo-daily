// String Anagrams (hard) #
// Given a string and a pattern, find all anagrams of the pattern in the given string.

// Anagram is actually a Permutation of a string. For example, “abc” has the following six anagrams:

// abc
// acb
// bac
// bca
// cab
// cba
// Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

// String="p p a q q p", Pattern="pq"

// Input: String="abbcabc", Pattern="abc"
// Output: [2, 3, 4]
// Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".
// a b b c a b c
//         ^
//             $

// matches: 3
// window: {  a: 1, b: 1, c: 1 }
// pattern: { a: 1, b: 1, c: 1 }
// result: [2, 3, 4]

function findAnagrams(str, pattern) {
  const patternMap = {}

  for (let char of pattern) {
    if (!(char in patternMap)) patternMap[char] = 0
    patternMap[char]++
  }

  let needToMatch = Object.keys(patternMap).length

  const result = []
  let windowStart = 0
  let curMatch = 0
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let curChar = str[windowEnd]
    if (curChar in patternMap) {
      patternMap[curChar]--

      if (patternMap[curChar] === 0) curMatch++
      else if (patternMap[curChar] === -1) curMatch--
    }

    if (curMatch === needToMatch) result.push(windowStart)

    let windowSize = windowEnd - windowStart + 1

    if (windowSize === pattern.length) {
      // shrink down
      let firstChar = str[windowStart]
      windowStart++

      if (firstChar in patternMap) {
        if (patternMap[firstChar] === 0) curMatch--
        else if (patternMap[firstChar] === -1) curMatch++

        patternMap[firstChar]++
      }
    }
  }

  return result
}

module.exports = {findAnagrams}
