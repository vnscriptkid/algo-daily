// Longest Substring with Same Letters after Replacement

// Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter,
// find the length of the longest substring having the same letters after replacement.

// Input: String="aabccbb", k=2
// Output: 5
// Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".

// class CharMap {
//   constructor() {
//     this.freq = {}
//     this.countAll = 0
//   }

//   add(char) {
//     if (!(char in this.freq)) this.freq[char] = 0
//     this.freq[char]++
//     this.countAll++
//   }

//   remove(char) {
//     this.freq[char]--
//     if (!this.freq[char]) delete this.freq[char]
//     this.countAll--
//   }

//   count(char) {
//     return this.freq[char]
//   }

//   countExcept(char) {
//     return this.countAll - this.count(char)
//   }
// }

function findLongestSubstrSameLetters(str, k) {
  // const map = new CharMap()
  let maxRepeatCount = 0

  let longestRepeatingAfterReplace = 0
  let windowStart = 0

  const freq = {}

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    // add char at `windowEnd` to freq charMap
    const newChar = str[windowEnd]

    if (!(newChar in freq)) freq[newChar] = 0
    freq[newChar]++
    // map.add(newChar)

    // this new char can make maxRepeatCount not longer true
    maxRepeatCount = Math.max(maxRepeatCount, freq[newChar])

    // this new char can make current window not having same chars after replacement
    let windowSize = windowEnd - windowStart + 1
    let charsToReplace = windowSize - maxRepeatCount

    while (charsToReplace > k) {
      // shrink the window down from windowStart
      let firstChar = str[windowStart]

      freq[firstChar]--
      if (freq[firstChar] === 0) delete freq[firstChar]

      // TODO: is there anyway not to do re-find max req char again
      maxRepeatCount = Math.max(...Object.values(freq))

      windowStart++
      windowSize = windowEnd - windowStart + 1
      charsToReplace = windowSize - maxRepeatCount
    }

    longestRepeatingAfterReplace = Math.max(
      longestRepeatingAfterReplace,
      windowSize,
    )
  }

  return longestRepeatingAfterReplace
}

module.exports = {findLongestSubstrSameLetters}

// a a c b b , k = 2
