// Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter,
// find the length of the longest substring having the same letters after replacement.

// Input: String="aabccbb", k=2
// Output: 5
// Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".

class CharMap {
  constructor() {
    this.freq = {}
    this.countAll = 0
  }

  add(char) {
    if (!(char in this.freq)) this.freq[char] = 0
    this.freq[char]++
    this.countAll++
  }

  remove(char) {
    this.freq[char]--
    if (!this.freq[char]) delete this.freq[char]
    this.countAll--
  }

  count(char) {
    return this.freq[char]
  }

  countExcept(char) {
    return this.countAll - this.count(char)
  }
}

function findLongestSubstrSameLetters(str, k) {
  const map = new CharMap()

  let longestRepeating = 0
  let windowStart = 0
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    // add char at `windowEnd` to freq charMap
    const newChar = str[windowEnd]
    map.add(newChar)

    // is it valid window, resize to valid state if not

    let charsToReplace
    do {
      let dominantChar = str[windowStart]
      charsToReplace = map.countExcept(dominantChar)
      if (charsToReplace <= k) break

      // shrink window from the left
      map.remove(dominantChar)
      windowStart++
    } while (charsToReplace > k)

    // update longest Repeating after replacements
    let windowSize = windowEnd - windowStart + 1
    longestRepeating = Math.max(longestRepeating, windowSize)
  }

  return longestRepeating
}

module.exports = {findLongestSubstrSameLetters}
