const {hasPathWithSequence, Node} = require('./index')

test('it works 1', () => {
  const node1 = new Node(1)
  const node7 = new Node(7)
  const node9 = new Node(9)
  const node2 = new Node(2)
  const anotherNode9 = new Node(9)

  node1.left = node7
  node1.right = node9
  node9.left = node2
  node9.right = anotherNode9

  const sequence = [1, 9, 9]
  const result = hasPathWithSequence(node1, sequence)

  expect(result).toEqual(true)
})

test('it works 2', () => {
  const node1 = new Node(1)
  const node0 = new Node(0)
  const anotherNode1 = new Node(1)
  const oneMoreNode1 = new Node(1)
  const node6 = new Node(6)
  const node5 = new Node(5)

  node1.left = node0
  node1.right = anotherNode1
  node0.left = oneMoreNode1
  anotherNode1.left = node6
  anotherNode1.right = node5

  let sequence = [1, 0, 7]
  let result = hasPathWithSequence(node1, sequence)
  expect(result).toEqual(false)

  sequence = [1, 1, 6]
  result = hasPathWithSequence(node1, sequence)
  expect(result).toEqual(true)
})
