export class ListNode<T> {
    value: T;
    next: null | ListNode<T>

    constructor(value: T, next: null | ListNode<T> = null) {
        this.value = value;
        this.next = next;
    }

    print() {
        const buffer: any[] = [];

        let cur: ListNode<T> | null = this;
        while (cur) {
            buffer.push(cur.value);
            cur = cur.next;
        }

        buffer.push('null')

        return buffer.join('->')
    }
}