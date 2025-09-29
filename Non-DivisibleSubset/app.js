function nonDivisibleSubset(k, s) {
    const remainders = Array(k).fill(0);

    // Count occurrences of each remainder
    for (let num of s) {
        remainders[num % k]++;
    }

    // Start with at most one element with remainder 0
    let maxSubsetSize = Math.min(remainders[0], 1);

    // Iterate through remainders
    for (let i = 1; i <= Math.floor(k / 2); i++) {
        if (i === k - i) {
            // If k is even, only one element can be chosen from the middle remainder
            maxSubsetSize += Math.min(remainders[i], 1);
        } else {
            // Choose the larger count between complementary remainders
            maxSubsetSize += Math.max(remainders[i], remainders[k - i]);
        }
    }

    return maxSubsetSize;
}

// Example usage:
const k = 3;
const s = [1, 7, 2, 4];
console.log(nonDivisibleSubset(k, s)); // Output: 3
