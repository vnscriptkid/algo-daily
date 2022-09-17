import { ListNode } from "../../shared";

export function cycleLength(head: ListNode<number>) {
    let fast = head, slow = head;

    while (true) {
        fast = fast.next?.next!;
        slow = slow.next!;

        if (slow === fast) {
            break;
        }
    }

    let slow2 = slow;
    let count = 0;

    while (true) {
        slow2 = slow2.next!;
        count++;

        if (slow2 === slow) {
            break;
        }
    }

    return count;
}