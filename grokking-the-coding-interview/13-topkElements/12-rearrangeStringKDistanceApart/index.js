// Rearrange String K Distance Apart (hard) #
// Given a string and a number ‘K’, find if the string can be rearranged
// such that the same characters are at least ‘K’ distance apart from each other.

// Example 1:
// Input: "mmpp", K=2
// m_m
// p_p
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
  // count freq of each char
  const freq = {}
  for (let char of str) {
    if (!(char in freq)) freq[char] = 0
    freq[char]++
  }
  // put char with freq into maxHeap
  const maxHeap = new Heap([], null, (a, b) => a[1] - b[1])
  for (let char in freq) {
    maxHeap.add([char, freq[char]])
  }
  // need a queue, store at max k items
  const queue = []
  // take out one by one from maxHeap, put into cur str
  let curStr = ''
  while (maxHeap.length) {
    const item = maxHeap.pop()

    curStr += item[0]

    // push item into queue
    queue.push([item[0], item[1] - 1])

    // consider adding back item to maxHeap when queue is of size k
    if (queue.length === k) {
      const candidate = queue.shift()

      if (candidate[1] > 0) {
        maxHeap.add(candidate)
      }
    }
  }
  // return curStr
  return curStr.length !== str.length ? '' : curStr
}

module.exports = {rearrangeString}
