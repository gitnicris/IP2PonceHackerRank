'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    main();
});

function readLine() {
    return inputString[currentLine++];
}

// --- StairCase function ---
function StairCase(n) {
    for (let i = 1; i <= n; i++) {
        const spaces = ' '.repeat(n - i);
        const hashes = '#'.repeat(i);
        console.log(spaces + hashes);
    }
}

// --- main ---
function main() {
    const n = parseInt(readLine(), 10);
    StairCase(n);  // no return, just print
}
