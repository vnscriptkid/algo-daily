const {rightView, Node} = require("./index")

test("it works 1", () => {
  const node1 = new Node(1)
  const node9 = new Node(9)
  const node7 = new Node(7)
  const node5 = new Node(5)
  const node10 = new Node(10)
  const node12 = new Node(12)
  const node3 = new Node(3)

  node12.left = node7
  node12.right = node1
  node7.left = node9
  node9.left = node3
  node1.left = node10
  node1.right = node5

  let result = rightView(node12)

  expect(result).toEqual([12, 1, 5, 3])
})
