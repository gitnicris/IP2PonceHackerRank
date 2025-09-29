function pickingNumbers(a) {
    let freq = {}; // Frequency map
    let max = 0;

    a.forEach(n => {
        freq[n] = (freq[n] || 0) + 1;
    });

    Object.keys(freq).forEach(key => {
        const num = parseInt(key);
        const count = freq[num] + (freq[num + 1] || 0); // include neighbors
        if (count > max) max = count;
    });

    return max;
}

// Example usage
const a = [1, 2, 2, 3, 1, 2];
console.log(pickingNumbers(a)); // Output: 5
