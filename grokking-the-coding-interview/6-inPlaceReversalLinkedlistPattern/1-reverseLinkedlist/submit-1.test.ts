import { ListNode } from "../../shared"
import { reverse } from "./submit-1";

test('works', () => {
    const node10 = new ListNode(10);
    const node8 = new ListNode(8, node10);
    const node6 = new ListNode(6, node8);
    const node4 = new ListNode(4, node6);
    const node2 = new ListNode(2, node4);

    // 2 -> 4 -> 6 -> 8 -> 10 -> null

    const newHead = reverse(node2);

    expect(newHead.print()).toEqual('10->8->6->4->2->null')

})