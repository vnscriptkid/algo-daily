// Rearrange String

// Given a string, find if its letters can be rearranged
// in such a way that no two same characters come next to each other.

const Heap = require('collections/heap')

function rearrangeString(str) {
  const freq = {}

  for (let char of str) {
    if (!(char in freq)) freq[char] = 0
    freq[char]++
  }

  const maxHeap = new Heap([], null, (a, b) => a[1] - b[1])

  for (let char in freq) {
    maxHeap.push([char, freq[char]])
  }

  let prevChar = null,
    prevFreq = 0

  let curStr = ''

  while (maxHeap.length) {
    const [curChar, curFreq] = maxHeap.pop()

    curStr += curChar

    if (prevChar && prevFreq > 0) {
      // not null or not zero
      maxHeap.push([prevChar, prevFreq])
    }

    prevChar = curChar
    prevFreq = curFreq - 1
  }

  return curStr.length === str.length ? curStr : ''
}

module.exports = {rearrangeString}
