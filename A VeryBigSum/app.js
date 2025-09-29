function AveryBigSum(ar) {
    let sum = BigInt(0);
    for (let i = 0; i < ar.length; i++) {
        sum += BigInt(ar[i]);
    }
    return sum;
}
// --- Main function to handle input/output ---
'use strict';

const fs = require('fs');



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
}
);

function readLine() {
    return inputString[currentLine++];
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10); // not always needed, but HackerRank gives it anyway
    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));       
    const result = AveryBigSum(ar);
    ws.write(result.toString() + "\n");
    ws.end();
}
