// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// "c b b e b i", K=3
//    $
//              ^

// {b: 3, e: 1, i: 1} => diffChars: 3
// longest: 5

class CharMap {
  constructor() {
    this.freq = {}
  }

  add(char) {
    if (!(char in this.freq)) {
      this.freq[char] = 0
    }
    this.freq[char] += 1
  }

  remove(char) {
    if (!(char in this.freq)) return

    this.freq[char] -= 1

    if (this.freq[char] === 0) delete this.freq[char]
  }

  diffChars() {
    return Object.keys(this.freq).length
  }
}

function findLongestSubstr(str, k) {
  const charMap = new CharMap()

  let windowStart = 0
  let longestWindow = 0

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    charMap.add(str.charAt(windowEnd))

    while (charMap.diffChars() > k) {
      charMap.remove(str.charAt(windowStart))
      windowStart++
    }

    // diffChars is now <= k
    let windowSize = windowEnd - windowStart + 1
    longestWindow = Math.max(longestWindow, windowSize)
  }

  return longestWindow
}

module.exports = {findLongestSubstr}
