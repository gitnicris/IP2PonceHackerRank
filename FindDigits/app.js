function findDigits(n) {
    let count = 0;
    const digits = n.toString().split(''); // Convert number to array of digits

    digits.forEach(d => {
        const digit = parseInt(d);
        if (digit !== 0 && n % digit === 0) {
            count++;
        }
    });

    return count;
}