// Longest Substring with Same Letters after Replacement

// Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter,
// find the length of the longest substring having the same letters after replacement.

// Input: String="aabccbb", k=2
// Output: 5
// Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".

// dominantCharsCount = 3
// longestValidStr: 5

// { b: 3, c: 2 }

// a a b c c b b , k = 2
//     ^
//               $

function findLongestSubstrSameLetters(str, k) {
  let windowStart = 0

  const freq = {}
  let dominantCharsCount = 0
  let longestValidStr = 0

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    // current window is valid, consider expanding it to find longer string
    let curChar = str[windowEnd]

    if (!(curChar in freq)) freq[curChar] = 0
    freq[curChar]++

    dominantCharsCount = Math.max(dominantCharsCount, freq[curChar])

    // whether or not cur window is valid, if not shrink it down (to at least size of longestValidStr)
    let windowSize = windowEnd - windowStart + 1
    let charsToReplace = windowSize - dominantCharsCount
    while (charsToReplace > k) {
      let firstChar = str[windowStart]

      freq[firstChar]--
      if (freq[firstChar] === 0) delete freq[firstChar]

      windowStart++

      windowSize = windowEnd - windowStart + 1
      charsToReplace = windowSize - dominantCharsCount
    }

    longestValidStr = Math.max(longestValidStr, windowSize)
  }

  return longestValidStr
}

module.exports = {findLongestSubstrSameLetters}
