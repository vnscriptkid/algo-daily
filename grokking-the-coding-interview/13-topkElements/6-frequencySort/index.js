// Frequency Sort

const Heap = require('collections/heap')

// Given a string, sort it based on the decreasing frequency of its characters.

// Input: "Programming"
// Output: "rrggmmPiano"
// Explanation: 'r', 'g', and 'm' appeared twice, so they need to appear before any other character.

// build char map O(n)
// maxHeap: get the current highest-freq char

function sortByFreq(str) {
  // build character map
  const freq = {}
  for (let char of str) {
    if (!(char in freq)) freq[char] = 0
    freq[char]++
  }

  // init maxHeap, add all [char, freq]
  const maxHeap = new Heap([], null, (a, b) => a[1] - b[1])
  for (let char in freq) {
    maxHeap.add([char, freq[char]])
  }

  // take out each item from max heap, add chars to result
  let result = ''

  while (maxHeap.length) {
    let [char, count] = maxHeap.pop()
    // [a, 3]
    // aaa
    while (count > 0) {
      result += char
      count--
    }
  }

  return result
}

module.exports = {sortByFreq}
