// Rearrange String K Distance Apart (hard) #
// Given a string and a number ‘K’, find if the string can be rearranged
// such that the same characters are at least ‘K’ distance apart from each other.

// Example 1:

// Input: "mmpp", K=2
// Output: "mpmp" or "pmpm"
// Explanation: All same characters are 2 distance apart.
// Example 2:

// Input: "Programming", K=3
// Output: "rgmPrgmiano" or "gmringmrPoa" or "gmrPagimnor" and a few more
// Explanation: All same characters are 3 distance apart.
// Example 3:

// Input: "aab", K=2
// Output: "aba"
// Explanation: All same characters are 2 distance apart.
// Example 4:

// Input: "aappa", K=3
// Output: ""
// Explanation: We cannot find an arrangement of the string where any two 'a' are 3 distance apart.

const Heap = require('collections/heap')

function rearrangeString(str, k) {
  const freq = {}

  for (let char of str) {
    if (!(char in freq)) freq[char] = 0
    freq[char]++
  }

  const maxHeap = new Heap([], null, (a, b) => a[1] - b[1])
  for (let char in freq) {
    maxHeap.add([char, freq[char]])
  }

  const queue = []
  let finalStr = ''
  while (maxHeap.length) {
    const curItem = maxHeap.pop()

    finalStr += curItem[0]

    queue.push([curItem[0], curItem[1] - 1])

    if (queue.length === k) {
      const itemBack = queue.shift()

      if (itemBack[1] > 0) maxHeap.add(itemBack)
    }
  }

  return finalStr.length === str.length ? finalStr : ''
}

module.exports = {rearrangeString}
