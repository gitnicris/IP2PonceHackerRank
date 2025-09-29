function migratoryBirds(arr) {
    const birdCounts = new Array(6).fill(0); // Array to count bird sightings (IDs range from 1 to 5)

    // Count occurrences of each bird type
    for (let bird of arr) {
        birdCounts[bird]++;
    }

    // Find the bird type with the highest count (and smallest ID in case of a tie)
    let maxCount = 0;
    let birdId = 0;
    for (let i = 1; i < birdCounts.length; i++) {
        if (birdCounts[i] > maxCount || (birdCounts[i] === maxCount && i < birdId)) {
            maxCount = birdCounts[i];
            birdId = i;
        }
    }

    return birdId;
}

// Example usage:
const birdSightings = [1, 1, 2, 2, 3, 3, 3, 4, 4, 5];
console.log(migratoryBirds(birdSightings)); // Output: 3
