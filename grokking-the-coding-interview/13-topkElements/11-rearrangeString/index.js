// Rearrange String

// Given a string, find if its letters can be rearranged in such a way that no two same characters come next to each other.

// Example 1:
// Input: "aappp"
// Output: "papap"
// Explanation: In "papap", none of the repeating characters come next to each other.

// { } => maxHeap

// prev: (a:0)
// cur: (p:0)

// p a p a p

// Example 2:
// Input: "Programming"
// Output: "rgmrgmPiano" or "gmringmrPoa" or "gmrPagimnor", etc.
// Explanation: None of the repeating characters come next to each other.

// Example 3:
// Input: "aapa"
// Output: ""
// Explanation: In all arrangements of "aapa", atleast two 'a' will come together e.g., "apaa", "paaa".

const Heap = require('collections/heap')

function rearrangeString(str) {
  // count freq of each char
  const freq = {}
  for (let char of str) {
    if (!(char in freq)) freq[char] = 0
    freq[char]++
  }

  // build max heap
  // [ char, freq[char] ]
  const maxHeap = new Heap([], null, (a, b) => a[1] - b[1])
  for (let char in freq) {
    maxHeap.add([char, freq[char]])
  }

  // put characters from heap to curStr alternately (loop)
  let curItem, prevItem

  let curStr = ''

  while (maxHeap.length > 0) {
    curItem = maxHeap.pop()

    curStr += curItem[0]

    if (prevItem && prevItem[1] - 1 > 0) {
      maxHeap.add([prevItem[0], prevItem[1] - 1])
    }

    prevItem = curItem
  }

  // return
  return curStr.length !== str.length ? '' : curStr
}

module.exports = {rearrangeString}
