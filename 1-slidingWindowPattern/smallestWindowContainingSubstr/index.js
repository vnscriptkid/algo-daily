function buildCharFreq(str) {
  const freq = {}

  for (let char of str) {
    if (!(char in freq)) freq[char] = 0
    freq[char] += 1
  }

  return freq
}

function findSmallestContainer(str, pattern) {
  const freq = buildCharFreq(pattern)
  let matched = 0
  let windowStart = 0

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    // inspect current char, update freq map and # of matched
    let curChar = str[windowEnd]
    if (curChar in freq) {
      freq[curChar] -= 1
      if (freq[curChar] === 0) matched++
    }

    // if all matches found, start shrink down
    if (matched === Object.keys(freq).length) {
      while (true) {
        let leftMostChar = str[windowStart]
        if (leftMostChar in freq) {
          if (freq[leftMostChar] === 0)
            return str.substring(windowStart, windowEnd + 1)
          freq[leftMostChar] += 1
        }
        windowStart++
      }
    }
  }

  return ''
}

module.exports = {findSmallestContainer}
