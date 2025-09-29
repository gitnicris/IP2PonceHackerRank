function sockMerchant(n, ar) {
    let sockCount = {};
    let pairs = 0;

    // Count occurrences of each sock color
    for (let sock of ar) {
        sockCount[sock] = (sockCount[sock] || 0) + 1;
    }

    // Calculate pairs for each color
    for (let count of Object.values(sockCount)) {
        pairs += Math.floor(count / 2);
    }

    return pairs;
}

// Example usage:
const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(sockMerchant(n, ar)); // Output: 3
