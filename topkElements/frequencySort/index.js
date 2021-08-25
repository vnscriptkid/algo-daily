const Heap = require("collections/heap");

function sortByFreq(str) {
  const maxHeap = new Heap([], null, (a, b) => a[1] - b[1]);

  // build req map
  const freq = {};
  for (let char of str) {
    if (!(char in freq)) freq[char] = 0;
    freq[char] += 1;
  }

  // add [char, count] to maxHeap
  for (let [char, count] of Object.entries(freq)) {
    maxHeap.push([char, count]);
  }

  // as long as heap is not empty
  let output = "";
  while (maxHeap.length > 0) {
    const [char, count] = maxHeap.pop();
    output += Array(count).fill(char).join("");
  }

  return output;
}

module.exports = { sortByFreq };
