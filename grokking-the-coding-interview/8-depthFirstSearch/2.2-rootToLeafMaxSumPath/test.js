const {findMaxSumPath, Node} = require('./index')

test('it works 1', () => {
  const node1 = new Node(1)
  const node7 = new Node(7)
  const node9 = new Node(9)
  const node4 = new Node(4)
  const node5 = new Node(5)
  const node2 = new Node(2)
  const anotherNode7 = new Node(7)

  node1.left = node7
  node1.right = node9
  node7.left = node4
  node7.right = node5
  node9.left = node2
  node9.right = anotherNode7

  const result = findMaxSumPath(node1)

  expect(result).toEqual([1, 9, 7])
})

test('it works 2', () => {
  const node1 = new Node(1)
  const node6 = new Node(6)
  const node7 = new Node(7)
  const node4 = new Node(4)
  const node11 = new Node(11)
  const node12 = new Node(12)

  node12.left = node7
  node12.right = node1
  node7.left = node4
  node1.left = node11
  node1.right = node6

  const result = findMaxSumPath(node12)
  expect(result).toEqual([12, 1, 11])
})
