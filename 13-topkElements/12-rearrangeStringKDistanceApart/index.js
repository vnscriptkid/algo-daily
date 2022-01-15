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

  let finalStr = ''

  const queue = []

  while (maxHeap.length) {
    const [char, count] = maxHeap.pop()

    finalStr += char

    queue.push([char, count - 1])

    if (queue.length === k) {
      const [qChar, qCount] = queue.shift()

      if (qCount > 0) maxHeap.add([qChar, qCount])
    }
  }

  return finalStr
}

module.exports = {rearrangeString}
