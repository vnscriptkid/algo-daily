export function calculateComplement(num: number) {
    // num ^ complement === all_bit_sets

    // num ^ num ^ complement === all_bit_sets ^ num

    // 0 ^ complement === all_bit_sets ^ num

    // complement === all_bit_sets ^ num

    let bitCount = 0;
    let n = num;
    while (n > 0) {
        n = n >> 1
        bitCount++;
    }

    const allBitSetNum = Math.pow(2, bitCount) - 1;

    return allBitSetNum ^ num;
}