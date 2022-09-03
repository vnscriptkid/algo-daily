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

// Input: String="a b b c a b c", Pattern="abc"
// Output: [2, 3, 4]
// Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".

// a b b c a b c
//           ^
//               $

// curMatch: 3
// { a: 0 ; b: 0; c : 0 }
// result: [2, 3, 4]

function findAnagrams(str, pattern) {
  const patternMap = {}

  // build the map
  for (let char of pattern) {
    if (!(char in patternMap)) patternMap[char] = 0
    patternMap[char]++
  }

  // slide our window
  let numOfMatch = 0
  let windowStart = 0
  const result = []
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let curChar = str[windowEnd]

    if (curChar in patternMap) {
      patternMap[curChar]--

      if (patternMap[curChar] === 0) numOfMatch++
      else if (patternMap[curChar] === -1) numOfMatch--
    }

    if (numOfMatch === Object.keys(patternMap).length) {
      result.push(windowStart)
    }

    const windowSize = windowEnd - windowStart + 1

    if (windowSize === pattern.length) {
      // shrink it down
      let firstChar = str[windowStart]
      windowStart++

      if (firstChar in patternMap) {
        if (patternMap[firstChar] === 0) numOfMatch--
        else if (patternMap[firstChar] === -1) numOfMatch++

        patternMap[firstChar]++
      }
    }
  }

  return result
}

module.exports = {findAnagrams}
