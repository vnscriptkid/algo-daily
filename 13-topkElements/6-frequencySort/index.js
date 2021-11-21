// Frequency Sort

const Heap = require('collections/heap')

// Given a string, sort it based on the decreasing frequency of its characters.

// Input: "Programming"
// Output: "rrggmmPiano"
// Explanation: 'r', 'g', and 'm' appeared twice, so they need to appear before any other character.

// P r o g r a m m i n g
//                     ^
// { P: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 }

function sortByFreq(str) {
  // loop 1: build freq map
  const freq = {}
  for (let char of str) {
    if (!(char in freq)) freq[char] = 0
    freq[char]++
  }

  // loop 2: put it into a max heap
  const maxHeap = new Heap([], null, (a, b) => a[1] - b[1])
  for (let char in freq) {
    maxHeap.add([char, freq[char]])
  }

  // loop 3: sort in order
  let sorted = ''

  while (maxHeap.length) {
    let [char, count] = maxHeap.pop()
    while (count > 0) {
      sorted += char
      count--
    }
  }

  return sorted
}

module.exports = {sortByFreq}
