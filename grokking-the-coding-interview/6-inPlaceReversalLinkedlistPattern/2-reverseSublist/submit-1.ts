import { ListNode } from "../../shared";

export function reverseSublist(head: ListNode<number>, left: number, right: number): ListNode<number> {

    //     1 -> 2 -> 3 -> 4 -> 5 -> null
    //     $    ^

    // curIdx

    let curIdx = 1;

    let prev: ListNode<number> | null = null, cur: ListNode<number> | null = head;
    // go to start of sublist
    // keep track of prevSublist

    while (cur && curIdx < left) {
        prev = cur;
        cur = cur.next;
        curIdx++;
    }

    // now curIdx === left
    const prevOfSublist = prev;
    const startOfSublist = cur;

    // reverse sublist til end of sublist
    while (cur && curIdx <= right) {
        let temp = cur.next;

        cur.next = prev;
        prev = cur;
        cur = temp;
        curIdx++;
    }

    // now curIdx === right + 1
    // point prevSublist to end of sublist
    // point start of sublist to next node
    startOfSublist!.next = cur;
    prevOfSublist!.next = prev;

    return head;
}