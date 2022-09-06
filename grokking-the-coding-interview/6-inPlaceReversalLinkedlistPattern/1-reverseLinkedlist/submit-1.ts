import { ListNode } from "../../shared";

export function reverse(head: ListNode<number>): ListNode<number> {
    //     2 -> 4 -> 6 -> 8 -> 10 -> null
    //  n <- 2 <- 4 <- 6 <- 8 <- 10 -> null
    //                           $      ^

    // prev: 10
    // cur: null

    let cur: ListNode<number> | null = head;
    let prev: ListNode<number> | null = null;

    // traversed the linkedlist one by one
    while (cur) {
        let temp = cur.next;

        // point cur to prev
        cur.next = prev;

        // reassign prev
        prev = cur;

        // more cur forward
        cur = temp;
    }

    return prev!;
}