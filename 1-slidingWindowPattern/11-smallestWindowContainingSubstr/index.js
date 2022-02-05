// Smallest Window containing Substring

// Input: String="aabdec", Pattern="abc"
// Output: "abdec"

// a a b d e c
//   ^
//           $

// {a: 2, b: 1, d: 1,e: 1, c: 1}
// matched: 3

function findSmallestContainer(str, pattern) {
  let firstIdx = -1,
    lastIdx = -1,
    matched = 0

  const set = new Set()
  for (let char of pattern) {
    set.add(char)
  }

  let windowStart = 0
  let smallestWindowSize = Infinity
  const freq = {}
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let curChar = str[windowEnd]

    if (!(curChar in freq)) freq[curChar] = 0
    freq[curChar]++

    if (set.has(curChar) && freq[curChar] === 1) matched++

    while (matched === set.size) {
      let curWindowSize = windowEnd - windowStart + 1

      if (curWindowSize < smallestWindowSize) {
        smallestWindowSize = curWindowSize
        firstIdx = windowStart
        lastIdx = windowEnd
      }
      // find a smaller window
      let firstChar = str[windowStart]
      freq[firstChar]--
      if (freq[firstChar] === 0) {
        delete freq[firstChar]

        if (set.has(firstChar)) matched--
      }
      windowStart++
    }
  }

  return firstIdx > 0 ? str.substring(firstIdx, lastIdx + 1) : ''
}

module.exports = {findSmallestContainer}
