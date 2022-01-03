// Permutation in a String

// Given a string and a pattern, find out if the string contains any permutation of the pattern.

// Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

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

class CharMap {
  constructor(str) {
    this.str = str
    this.map = {}
    this._size = 0
    this.init()
  }

  init() {
    for (let char of this.str) {
      this.add(char)
    }
  }

  add(char) {
    if (!(char in this.map)) this.map[char] = 0
    this.map[char]++
    this._size++
  }

  remove(char) {
    if (!(char in this.map)) throw new Error('oops')
    this.map[char]--
    this._size--
    if (this.map[char] === 0) delete this.map[char]
  }

  has(char) {
    return char in this.map
  }

  freq(char) {
    if (!(char in this.map)) throw new Error('oops')

    return this.map[char]
  }

  reset() {
    this.map = {}
    this._size = 0
  }

  size() {
    return this._size
  }

  static build(str) {
    return new CharMap(str)
  }
}

function findPermutation(str, pattern) {
  const patternMap = CharMap.build(pattern)

  let windowStart = 0

  const curMap = CharMap.build('')

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const char = str[windowEnd]

    if (!patternMap.has(char)) {
      windowStart = windowEnd + 1
      curMap.reset()
      continue
    }

    curMap.add(char)

    while (curMap.freq(char) > patternMap.freq(char)) {
      let firstChar = str[windowStart]

      curMap.remove(firstChar)
      windowStart++
    }

    if (patternMap.size() === curMap.size()) return true
  }

  return false
}

module.exports = {findPermutation}
