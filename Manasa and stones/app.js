function stones(n, a, b) {
    let result = new Set();
    for (let i = 0; i < n; i++) {
        result.add(i * a + (n - 1 - i) * b);
    }
    return Array.from(result).sort((x, y) => x - y);
}

// Example usage:
console.log(stones(3, 1, 2)); // Output: [2, 3, 4]
