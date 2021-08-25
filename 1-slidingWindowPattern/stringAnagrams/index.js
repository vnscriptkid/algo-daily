function buildCharFrequency(str) {
  const freq = {}

  for (let char of str) {
    if (!(char in freq)) freq[char] = 0
    freq[char] += 1
  }

  return freq
}

function findAnagrams(str, pattern) {
  let matched = 0
  const freq = buildCharFrequency(pattern)
  let windowStart = 0
  const anagrams = []

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    // inspect current char, update frequency map, # of matched items
    let curChar = str[windowEnd]
    if (curChar in freq) {
      freq[curChar] -= 1
      if (freq[curChar] === 0) matched++
    }

    // if all matched, push windowStart to anagrams
    if (matched === Object.keys(freq).length) anagrams.push(windowStart)

    // shrink down at every step after window reaching pattern size
    // update freq map # matched as window is shrink down (left most is out)
    if (windowEnd >= pattern.length - 1) {
      let leftMostChar = str[windowStart]
      windowStart++

      if (leftMostChar in freq) {
        if (freq[leftMostChar] === 0) matched--

        freq[leftMostChar] += 1
      }
    }
  }

  return anagrams
}

module.exports = {findAnagrams}
