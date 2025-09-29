'use strict';

const fs = require('fs');  // only once!

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

// --- Your function goes here ---
function compareTriplets(a, b) {
    let scoreA = 0;
    let scoreB = 0;

    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) scoreA++;
        else if (a[i] < b[i]) scoreB++;
    }
    return [scoreA, scoreB];
}

// --- main() ---
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().split(' ').map(temp => parseInt(temp, 10));
    const b = readLine().split(' ').map(temp => parseInt(temp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(" ") + "\n");
    ws.end();
}
