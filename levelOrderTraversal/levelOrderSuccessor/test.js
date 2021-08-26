const {Node, findLevelOrderSuccessor} = require('./index')

test('it works 1', () => {
  const node1 = new Node(1)
  const node2 = new Node(2)
  const node3 = new Node(3)
  const node4 = new Node(4)
  const node5 = new Node(5)

  node1.left = node2
  node1.right = node3
  node2.left = node4
  node2.right = node5
  node3.left = null
  node3.right = null

  let result = findLevelOrderSuccessor(node1, 3)
  expect(result).toEqual(4)
})

test('it works 2', () => {
  const node1 = new Node(1)
  const node9 = new Node(9)
  const node7 = new Node(7)
  const node5 = new Node(5)
  const node10 = new Node(10)
  const node12 = new Node(12)

  node12.left = node7
  node12.right = node1
  node7.left = node9
  node1.left = node10
  node1.right = node5

  let result = findLevelOrderSuccessor(node12, 9)
  expect(result).toEqual(10)
})

test('it works 3', () => {
  const node1 = new Node(1)
  const node9 = new Node(9)
  const node7 = new Node(7)
  const node5 = new Node(5)
  const node10 = new Node(10)
  const node12 = new Node(12)

  node12.left = node7
  node12.right = node1
  node7.left = node9
  node1.left = node10
  node1.right = node5

  let result = findLevelOrderSuccessor(node12, 12)
  expect(result).toEqual(7)
})
