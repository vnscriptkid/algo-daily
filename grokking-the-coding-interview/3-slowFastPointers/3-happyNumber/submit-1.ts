export function isHappyNumber(num: number) {
    let slow = num, fast = num;

    while (fast !== 1) {
        slow = nextNum(slow)
        fast = nextNum(fast)
        fast = nextNum(fast)

        if (fast === 1) return true;

        if (slow === fast) return false;
    }

    throw new Error('unreachable code')
    // 23  ->   13  -> 10  -> 1
    //          s
    //                 f
}

function nextNum(num: number): number {
    return String(num).split('').reduce((acc: number, i: string) => acc + parseInt(i) * parseInt(i), 0);
}
