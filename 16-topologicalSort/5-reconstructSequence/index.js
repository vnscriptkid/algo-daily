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
  const graph = new Map()
  const incommings = new Map()

  // init graph and incommings
  for (let vertex of originalSeq) {
    graph.set(vertex, [])
    incommings.set(vertex, 0)
  }

  // build graph and incommings from seqsList
  for (let seq of seqsList) {
    for (let i = 1; i < seq.length; i++) {
      let dest = seq[i]
      let source = seq[i - 1]

      graph.get(source).push(dest)
      incommings.set(dest, incommings.get(dest) + 1)
    }
  }

  // do topological sort
  const ordering = []
  const sources = [] // push, shift

  for (let [vertex, numOfDeps] of incommings.entries()) {
    if (numOfDeps === 0) sources.push(vertex)
  }

  while (sources.length) {
    if (sources.length > 1) return false

    const nextVertex = sources.shift()

    ordering.push(nextVertex)

    const lastIdx = ordering.length - 1

    if (ordering[lastIdx] !== originalSeq[lastIdx]) return false

    for (let dest of graph.get(nextVertex)) {
      incommings.set(dest, incommings.get(dest) - 1)

      if (incommings.get(dest) === 0) sources.push(dest)
    }
  }

  return ordering.length === originalSeq.length
}

module.exports = {canReconstruct}
