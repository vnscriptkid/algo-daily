const { Node, rearrange } = require("./index");

test("it works 1", () => {
  const node2 = new Node(2);
  const node4 = new Node(4);
  const node6 = new Node(6);
  const node8 = new Node(8);
  const node10 = new Node(10);
  const node12 = new Node(12);

  node2.next = node4;
  node4.next = node6;
  node6.next = node8;
  node8.next = node10;
  node10.next = node12;

  rearrange(node2);

  expect(node2.next).toEqual(node12);
  expect(node12.next).toEqual(node4);
  expect(node4.next).toEqual(node10);
  expect(node10.next).toEqual(node6);
  expect(node6.next).toEqual(node8);
  expect(node8.next).toEqual(null);
});

test("it works 2", () => {
  const node2 = new Node(2);
  const node4 = new Node(4);
  const node6 = new Node(6);
  const node8 = new Node(8);
  const node10 = new Node(10);

  node2.next = node4;
  node4.next = node6;
  node6.next = node8;
  node8.next = node10;

  rearrange(node2);

  expect(node2.next).toEqual(node10);
  expect(node10.next).toEqual(node4);
  expect(node4.next).toEqual(node8);
  expect(node8.next).toEqual(node6);
  expect(node6.next).toEqual(null);
});
