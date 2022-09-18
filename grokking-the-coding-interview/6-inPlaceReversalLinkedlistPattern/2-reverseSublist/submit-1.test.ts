import { ListNode } from "../../shared"
import { reverseSublist } from "./submit-1";

test('works 1', () => {
    const node5 = new ListNode(5);
    const node4 = new ListNode(4, node5);
    const node3 = new ListNode(3, node4);
    const node2 = new ListNode(2, node3);
    const node1 = new ListNode(1, node2);

    const newRoot = reverseSublist(node1, 2, 4);
    expect(newRoot).toEqual(node1)

    expect(newRoot.print()).toEqual('1->4->3->2->5->null');
})