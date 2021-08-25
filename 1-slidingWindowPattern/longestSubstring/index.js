class CharMap {
  constructor() {
    this.chars = {};
  }

  size() {
    return Object.keys(this.chars).length;
  }

  add(char) {
    this.chars[char] = char in this.chars ? this.chars[char] + 1 : 1;
  }

  remove(char) {
    if (!(char in this.chars)) throw `Char '${char} should have been there'`;
    if (this.chars[char] > 1) this.chars[char] -= 1;
    else delete this.chars[char];
  }
}

function findLongestSubstr(str, k) {
  let windowStart = 0;
  let longestSubstrSize = -1;
  let charMap = new CharMap();

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    charMap.add(str[windowEnd]);

    while (charMap.size() > k) {
      charMap.remove(str[windowStart]);
      windowStart++;
    }

    // charMap.size() <= k now
    longestSubstrSize = Math.max(
      longestSubstrSize,
      windowEnd - windowStart + 1
    );
  }

  return longestSubstrSize;
}

module.exports = { findLongestSubstr };
