import { ListNode } from "../../shared"
import { reverseEveryKEles } from "./submit-1"

test('works', () => {
    const node8 = new ListNode(8);
    const node7 = new ListNode(7, node8);
    const node6 = new ListNode(6, node7);
    const node5 = new ListNode(5, node6);
    const node4 = new ListNode(4, node5);
    const node3 = new ListNode(3, node4);
    const node2 = new ListNode(2, node3);
    const node1 = new ListNode(1, node2);

    expect(node1.print()).toEqual('1->2->3->4->5->6->7->8->null')
    const newHead = reverseEveryKEles(node1, 3);
    expect(newHead.print()).toEqual('3->2->1->6->5->4->8->7->null')
})