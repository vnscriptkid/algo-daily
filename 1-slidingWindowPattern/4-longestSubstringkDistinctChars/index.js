// Longest Substring with K Distinct Characters
// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// Input: String="cbbebi", K=3
// Output: 5
// Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

//    c b b e b i
//      $
//                ^

// charMap: { b: 3, e: 1, i: 1 }

// curDistinctChars: 3
// longestSize: 5

class CharMap {
  constructor() {
    this.freq = {}
  }

  add(char) {
    if (!(char in this.freq)) this.freq[char] = 0
    this.freq[char] += 1
  }

  remove(char) {
    if (!(char in this.freq)) return

    this.freq[char] -= 1

    if (this.freq[char] === 0) delete this.freq[char]
  }

  getDistinctChars() {
    return Object.keys(this.freq).length
  }
}

function findLongestSubstr(str, k) {
  let windowStart = 0
  const charMap = new CharMap()
  let longest = 0

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    charMap.add(str.charAt(windowEnd))

    while (charMap.getDistinctChars() > k) {
      charMap.remove(str.charAt(windowStart))
      windowStart++
    }

    let windowSize = windowEnd - windowStart + 1

    longest = Math.max(longest, windowSize)
  }

  return longest
}

module.exports = {findLongestSubstr}
