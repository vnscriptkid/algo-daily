import { ListNode } from "../../shared";

export function solution(list: ListNode<number>): boolean {
    // 1 -> 2 -> 3 -> 4 -> 5 -> 6
    //           ^______________|

    //                     ^$        

    let slow: ListNode<number> | null = list, fast: ListNode<number> | null = list;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;

        if (fast === slow) {
            return true;
        }
    }

    return false;
}