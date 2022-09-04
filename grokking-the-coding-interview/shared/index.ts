export class ListNode<T> {
    value: T;
    next: null | ListNode<T>

    constructor(value: T, next: null | ListNode<T> = null) {
        this.value = value;
        this.next = next;
    }
}