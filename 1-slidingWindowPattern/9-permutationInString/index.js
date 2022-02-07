// Permutation in a String

// Given a string and a pattern, find out if the string contains any permutation of the pattern.

// Permutation is defined as the re-arranging of the characters of the string.
// For example, “abc” has the following six permutations:

// abc
// acb
// bac
// bca
// cab
// cba
// If a string has ‘n’ distinct characters it will have n!n! permutations.

// Input: String="oidbcaf", Pattern="abc"
// Output: true
// Explanation: The string contains "bca" which is a permutation of the given pattern.

// o i d b c a f | Pattern="abc" => { a: 0, b: 1, c: 1 }
//       ^
//           $

// adb

function findPermutation(str, pattern) {
  const freq = {}

  for (let char of pattern) {
    if (!(char in freq)) freq[char] = 0
    freq[char]++
  }

  let windowStart = 0

  let matched = 0

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    // assuming current window is valid, yet to be matched, we want to expand current window
    let rightChar = str[windowEnd]

    if (rightChar in freq) {
      freq[rightChar]--

      if (freq[rightChar] === 0) matched++
    }

    if (matched === Object.keys(freq).length) return true

    // is the size of window equals to pattern size and still not match the pattern
    // shrink it down
    let windowSize = windowEnd - windowStart + 1
    if (windowSize >= pattern.length) {
      let leftChar = str[windowStart]
      windowStart++

      if (leftChar in freq) {
        if (freq[leftChar] === 0) {
          matched--
        }

        freq[leftChar]++
      }
    }
  }

  return false
}

module.exports = {findPermutation}
