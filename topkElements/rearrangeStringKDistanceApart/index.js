const Heap = require("collections/heap");
const Queue = require("collections/deque");

function rearrangeString(str, k) {
  // build char-freq map
  const freq = {};
  for (let char of str) {
    if (!(char in freq)) freq[char] = 0;
    freq[char] += 1;
  }

  // push all to max heap
  const heap = new Heap([], null, (a, b) => a[1] - b[1]);

  for (let [char, count] of Object.entries(freq)) {
    heap.push([char, count]);
  }

  const queue = new Queue();
  let result = "";

  while (heap.length) {
    const [char, count] = heap.pop();

    result += char;

    queue.push([char, count - 1]);

    if (queue.length === k) {
      const [nextChar, nextCount] = queue.shift();

      if (nextCount > 0) heap.push([nextChar, nextCount]);
    }
  }

  return result.length === str.length ? result : "";
}

module.exports = { rearrangeString };
