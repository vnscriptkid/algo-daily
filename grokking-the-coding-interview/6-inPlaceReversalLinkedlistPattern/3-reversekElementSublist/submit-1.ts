import { ListNode } from '../../shared';

export function reverseEveryKEles(head: ListNode<number>, k: number): ListNode<number> {
    // 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> null

    // 1 <- 2 <- 3    4 <- 5 <- 6    7 <- 8
    //                                    $    ^

    let cur: ListNode<number> | null = head;

    let endOfPrevSublist: ListNode<number> | null = null;
    let newHeadList: ListNode<number> | null = null;

    while (cur) {
        let countK = k;

        let prev: ListNode<number> | null = null;
        let headOfCurSublist = cur;

        while (cur && countK > 0) {
            countK--;

            // point cur to prev
            let temp: any = cur.next;

            cur.next = prev;
            prev = cur;
            cur = temp;
        }

        // prev now is new head of cur sublist
        if (!endOfPrevSublist) {
            newHeadList = prev;
        } else {
            endOfPrevSublist!.next = prev;
        }

        endOfPrevSublist = headOfCurSublist;
    }

    return newHeadList!;
}

const node8 = new ListNode(8);
const node7 = new ListNode(7, node8);
const node6 = new ListNode(6, node7);
const node5 = new ListNode(5, node6);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

const newHead = reverseEveryKEles(node1, 3);