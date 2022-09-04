import { ListNode } from "../../shared"
import { solution } from "./submit-1";

test('works 1', () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    const node4 = new ListNode(4);
    const node5 = new ListNode(5);
    const node6 = new ListNode(6);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node5.next = node6;
    node6.next = node3;

    expect(solution(node1)).toEqual(true);
})

test('works 1', () => {
    const node2 = new ListNode(2);
    const node4 = new ListNode(4);
    const node6 = new ListNode(6);
    const node8 = new ListNode(8);
    const node10 = new ListNode(10);

    node2.next = node4;
    node4.next = node6;
    node6.next = node8;
    node8.next = node10;
    node10.next = null;

    expect(solution(node2)).toEqual(false);
})