function buildCharMap(str) {
  const map = {}
  for (let char of str) {
    if (!(char in map)) map[char] = 0
    map[char] += 1
  }
  return map
}

function findPermutation(str, pattern) {
  let matched = 0
  const freq = buildCharMap(pattern)

  let windowStart = 0
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    // inspect cure char, update charmap && matched
    let curChar = str[windowEnd]

    if (curChar in freq) {
      freq[curChar] -= 1

      if (freq[curChar] === 0) matched++
    }

    // if all matched, we're done
    if (Object.keys(freq).length === matched) return true

    // do we need to shrink down the window? (shrink down 1 every step after window reaching pattern size)
    if (windowEnd >= pattern.length - 1) {
      let leftMostChar = str[windowStart]
      windowStart++

      if (leftMostChar in freq) {
        if (freq[leftMostChar] === 0) matched++

        freq[leftMostChar] += 1
      }
    }
  }

  return false
}

module.exports = {findPermutation}
