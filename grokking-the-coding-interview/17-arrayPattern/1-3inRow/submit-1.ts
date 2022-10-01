// https://www.youtube.com/watch?v=hPX1pjG1wwY

// find 3 consecutive equal chars in a string

// input: y o u t t t u b e
//        ^
// output: 3

// export function consecutiveEqualChars(str: string) {
//     // y o u t t t u b e
//     // ^

//     for (let i = 0; i <= str.length - 3; i++) {
//         if (str[i] === str[i + 1] && str[i + 1] === str[i + 2]) {
//             return i;
//         }
//     }

//     return -1;
// }

export function consecutiveEqualChars(str: string) {
    // y o u t t t u b e
    // ^

    for (let i = 2; i < str.length; i++) {
        if (str[i] === str[i - 1] && str[i - 1] === str[i - 2]) {
            return i - 2;
        }
    }

    return -1;
}