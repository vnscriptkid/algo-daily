const {countPaths, Node} = require("./index")
const {countPaths: countPathsSolution} = require("./solution")

test("it works 1", () => {
  const node1 = new Node(1)
  const node7 = new Node(7)
  const node9 = new Node(9)
  const node6 = new Node(6)
  const node5 = new Node(5)
  const node2 = new Node(2)
  const node3 = new Node(3)

  node1.left = node7
  node1.right = node9
  node7.left = node6
  node7.right = node5
  node9.left = node2
  node9.right = node3

  let result = countPaths(node1, 12)
  expect(result).toEqual(3)
  result = countPathsSolution(node1, 12)
  expect(result).toEqual(3)
})

test("it works 2", () => {
  const node12 = new Node(12)
  const node7 = new Node(7)
  const node1 = new Node(1)
  const node4 = new Node(4)
  const node10 = new Node(10)
  const node5 = new Node(5)

  node12.left = node7
  node12.right = node1
  node7.left = node4
  node1.left = node10
  node1.right = node5

  let result = countPaths(node12, 11)
  expect(result).toEqual(2)
  result = countPathsSolution(node12, 11)
  expect(result).toEqual(2)
})
