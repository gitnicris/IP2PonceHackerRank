function minimumDistances(a) {
    let minDistance = Infinity; // Initialize with a large value
    const indexMap = new Map(); // To store the last seen index of each element

    for (let i = 0; i < a.length; i++) {
        if (indexMap.has(a[i])) {
            // Calculate the distance between current and last seen index
            const distance = i - indexMap.get(a[i]);
            minDistance = Math.min(minDistance, distance);
        }
        // Update the last seen index of the current element
        indexMap.set(a[i], i);
    }

    // If no minimum distance was updated, return -1
    return minDistance === Infinity ? -1 : minDistance;
}
