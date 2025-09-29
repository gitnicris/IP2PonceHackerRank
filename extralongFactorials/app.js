function extraLongFactorials(n) {
    let result = BigInt(1); // Initialize result as BigInt
    for (let i = 2; i <= n; i++) {
        result *= BigInt(i); // Multiply using BigInt
    }
    console.log(result.toString()); // Convert to string to avoid scientific notation
}
