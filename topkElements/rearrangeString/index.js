const Heap = require("collections/heap")

function rearrangeString(str) {
  // build char-freq map
  const freq = {}

  for (let char of str) {
    if (!(char in freq)) freq[char] = 0
    freq[char] += 1
  }

  // push all to maxHeap
  const maxHeap = new Heap([], null, (a, b) => a[1] - b[1])

  for (let [char, count] of Object.entries(freq)) {
    maxHeap.push([char, count])
  }

  let prevItem = null
  let result = ""

  while (maxHeap.length) {
    const [char, count] = maxHeap.pop()

    result += char

    if (prevItem && prevItem[1] > 0) {
      maxHeap.push(prevItem)
    }

    prevItem = [char, count - 1]
  }

  return result.length === str.length ? result : ""
}

module.exports = {rearrangeString}
