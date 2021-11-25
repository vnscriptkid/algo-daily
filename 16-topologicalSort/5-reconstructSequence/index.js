// Reconstructing a Sequence

// Given a sequence originalSeq and an array of sequences,
// write a method to find if originalSeq can be uniquely reconstructed from the array of sequences.

// Unique reconstruction means that we need to find if originalSeq is the only sequence
// such that all sequences in the array are subsequences of it.

// Input: originalSeq: [1, 2, 3, 4], seqs: [[1, 2], [2, 3], [3, 4]]
// Output: true
// Explanation: The sequences [1, 2], [2, 3], and [3, 4] can uniquely reconstruct
// [1, 2, 3, 4], in other words, all the given sequences uniquely define the order of numbers
// in the 'originalSeq'.

function canReconstruct(originalSeq, seqsList) {
  // build graph, incommings
  const graph = new Map()
  const incommings = new Map()

  // init
  for (let vertex of originalSeq) {
    graph.set(vertex, [])
    incommings.set(vertex, 0)
  }

  for (const seqs of seqsList) {
    for (let i = 1; i < seqs.length; i++) {
      let prev = seqs[i - 1]
      let cur = seqs[i]

      graph.get(prev).push(cur)
      incommings.set(cur, incommings.get(cur) + 1)
    }
  }

  const sources = [] // queue
  for (let [vertex, numOfDeps] of incommings.entries()) {
    if (numOfDeps === 0) sources.push(vertex)
  }

  let count = 0
  const sortedList = []

  function countWaysToReconstruct(sources, sortedList) {
    if (sortedList.length === originalSeq.length) {
      count++
      return
    }

    for (let i = 0; i < sources.length; i++) {
      const source = sources[i]
      sortedList.push(source)
      // update incommings
      let newSources = sources.filter(s => s !== source)
      for (let dest of graph.get(source)) {
        incommings.set(dest, incommings.get(dest) - 1)

        if (incommings.get(dest) === 0) newSources.push(dest)
      }
      countWaysToReconstruct(newSources, sortedList)
      // backtrack
      sortedList.pop()
      for (let dest of graph.get(source)) {
        incommings.set(dest, incommings.get(dest) + 1)
      }
    }
  }

  countWaysToReconstruct(sources, sortedList)

  return count === 1
}

module.exports = {canReconstruct}
