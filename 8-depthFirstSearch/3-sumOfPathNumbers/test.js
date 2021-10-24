const {sumPathNumbers, Node} = require('./index')

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

  const result = sumPathNumbers(node1)

  expect(result).toEqual(408)
})
