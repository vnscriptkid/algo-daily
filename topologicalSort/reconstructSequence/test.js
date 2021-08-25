const {canReconstruct} = require("./index")

test("it works 1", () => {
  const originalSeq = [1, 2, 3, 4],
    seqs = [
      [1, 2],
      [2, 3],
      [3, 4],
    ]
  const result = canReconstruct(originalSeq, seqs)
  expect(result).toEqual(true)
})

test("it works 2", () => {
  const originalSeq = [1, 2, 3, 4],
    seqs = [
      [1, 2],
      [2, 3],
      [2, 4],
    ]
  const result = canReconstruct(originalSeq, seqs)
  expect(result).toEqual(false)
})

test("it works 3", () => {
  const originalSeq = [3, 1, 4, 2, 5],
    seqs = [
      [3, 1, 5],
      [1, 4, 2, 5],
    ]
  const result = canReconstruct(originalSeq, seqs)
  expect(result).toEqual(true)
})
