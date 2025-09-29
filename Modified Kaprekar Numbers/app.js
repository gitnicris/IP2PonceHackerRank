function kaprekarNumbers(p, q) {
    let result = [];
    
    for (let i = p; i <= q; i++) {
        let square = (i * i).toString();
        let d = i.toString().length;
        let right = square.slice(-d); // Last d digits
        let left = square.slice(0, square.length - d) || '0'; // Remaining digits
        
        if (parseInt(left) + parseInt(right) === i) {
            result.push(i);
        }
    }
    
    if (result.length > 0) {
        console.log(result.join(' '));
    } else {
        console.log("INVALID RANGE");
    }
}
