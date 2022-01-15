const {findUniqueBst} = require('./index')

test('it works 1', () => {
  const result = findUniqueBst(2)
  expect(result.length).toEqual(2)
})

test('it works 2', () => {
  const result = findUniqueBst(3)
  expect(result.length).toEqual(5)

  const [root1, root2, root3, root4, root5] = result

  expect(root1.val).toBe(1)
  expect(root2.val).toBe(1)
  expect(root3.val).toBe(2)
  expect(root4.val).toBe(3)
  expect(root5.val).toBe(3)

  expect(root1.left).toBeNull()
  expect(root1.right.val).toBe(2)
  expect(root1.right.right.val).toBe(3)
  expect(root1.right.right.left).toBe(null)
  expect(root1.right.right.right).toBe(null)

  expect(root2.left).toBeNull()
  expect(root2.right.val).toBe(3)
  expect(root2.right.right).toBeNull()
  expect(root2.right.left.val).toBe(2)
  expect(root2.right.left.left).toBeNull()
  expect(root2.right.left.right).toBeNull()

  expect(root3.left.val).toBe(1)
  expect(root3.left.left).toBeNull()
  expect(root3.left.right).toBeNull()
  expect(root3.right.val).toBe(3)
  expect(root3.right.left).toBeNull()
  expect(root3.right.right).toBeNull()

  //    3
  //   /
  //  1
  //   \
  //    2

  expect(root4.right).toBeNull()
  expect(root4.left.val).toBe(1)
  expect(root4.left.right.val).toBe(2)
  expect(root4.left.left).toBeNull()
  expect(root4.left.right.left).toBe(null)
  expect(root4.left.right.right).toBe(null)

  //    3
  //   /
  //  2
  // /
  //1

  expect(root5.right).toBeNull()
  expect(root5.left.val).toBe(2)
  expect(root5.left.left.val).toBe(1)
  expect(root5.left.right).toBeNull()
  expect(root5.left.left.left).toBe(null)
  expect(root5.left.left.right).toBe(null)
})
