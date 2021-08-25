const { isPalindromic, Node } = require("./index");

test("it works 1", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(2);
  const node5 = new Node(1);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;

  const result = isPalindromic(node1);
  expect(result).toEqual(true);
});

test("it works 2", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(3);
  const node5 = new Node(2);
  const node6 = new Node(1);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node6;

  const result = isPalindromic(node1);
  expect(result).toEqual(true);
});

test("it works 3", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(3);
  const node5 = new Node(1);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;

  const result = isPalindromic(node1);
  expect(result).toEqual(false);
});

test("it works 4", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  const node5 = new Node(2);
  const node6 = new Node(1);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node6;

  const result = isPalindromic(node1);
  expect(result).toEqual(false);
});
