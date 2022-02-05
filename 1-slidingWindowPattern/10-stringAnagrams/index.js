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
// {  }

class CharMap {
  constructor(str) {
    this.map = {}

    for (let char of str) {
      this.add(char)
    }
  }

  add(char) {
    if (!(char in this.map)) this.map[char] = 0
    this.map[char]++
  }

  remove(char) {
    this.map[char]--
    if (this.map[char] === 0) delete this.map[char]
  }

  freq(char) {
    return this.map[char]
  }

  has(char) {
    return char in this.map
  }
}

function findAnagrams(str, pattern) {
  const patternCharMap = new CharMap(pattern)

  const curCharMap = new CharMap('')

  let windowStart = 0
  const output = []

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let newChar = str[windowEnd]

    if (!patternCharMap.has(newChar)) {
      windowStart = windowEnd + 1
      curCharMap.clear()
      continue
    }

    curCharMap.add(newChar)

    while (
      windowEnd - windowStart + 1 > pattern.length ||
      curCharMap.freq(newChar) > patternCharMap.freq(newChar)
    ) {
      let firstChar = str[windowStart]
      curCharMap.remove(firstChar)
      windowStart++
    }

    let windowSize = windowEnd - windowStart + 1

    if (windowSize === pattern.length) output.push(windowStart)
  }

  return output
}

module.exports = {findAnagrams}
