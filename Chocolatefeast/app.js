function chocolateFeast(totalMoney, chocolateCost, wrappersForFree) {
    // Calculate initial chocolates Bobby can buy
    let chocolatesEaten = Math.floor(totalMoney / chocolateCost);
    let wrappers = chocolatesEaten;

    // Exchange wrappers for free chocolates as long as possible
    while (wrappers >= wrappersForFree) {
        let freeChocolates = Math.floor(wrappers / wrappersForFree);
        chocolatesEaten += freeChocolates;
        // Update wrappers: free chocolates plus leftover wrappers
        wrappers = freeChocolates + (wrappers % wrappersForFree);
    }

    return chocolatesEaten;
}

// Example usage:
console.log(chocolateFeast(10, 2, 5)); // Output: 6
console.log(chocolateFeast(12, 4, 4)); // Output: 3
console.log(chocolateFeast(6, 2, 2));  // Output: 5
