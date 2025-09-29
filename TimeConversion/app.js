function TimeConversion(s) {
    let time = s.slice(-2); 
    let hours = parseInt(s.slice(0, 2));
    let rest = s.slparseIntice(2, 8);  
    if (time === 'AM') {
        if (hours === 12) {
            hours = 0; 
        }   
    } else {
        if (hours !== 12) {
            hours += 12; 
        }   
    }
    let hoursStr = hours < 10 ? '0' + hours : '' + hours;
    return hoursStr + rest;
}
'use strict';
const fs = require('fs');


process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;
process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
}   
);
process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    main();
}   );
function readLine() {
    return inputString[currentLine++];
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const s = readLine();
    const result = TimeConversion(s);
    ws.write(result + "\n");
    ws.end();
}


