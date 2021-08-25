const { reverse, Node } = require("./index");

test("it works 1", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);

  node1.next = node2;
  node2.next = node3;

  reverse(node1);

  expect(node3.next).toEqual(node2);
  expect(node2.next).toEqual(node1);
  expect(node1.next).toEqual(null);
});

test("it works 2", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;

  reverse(node1);

  expect(node4.next).toEqual(node3);
  expect(node3.next).toEqual(node2);
  expect(node2.next).toEqual(node1);
  expect(node1.next).toEqual(null);
});
