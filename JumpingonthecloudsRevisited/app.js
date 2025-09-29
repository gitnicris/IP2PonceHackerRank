function jumpingOnClouds(c, k) {
    let energy = 100; // Initial energy level
    let n = c.length;
    let position = 0;

    do {
        position = (position + k) % n; // Jump to the next cloud
        energy--; // Deduct 1 energy for the jump
        if (c[position] === 1) {
            energy -= 2; // Deduct 2 additional energy if it's a thundercloud
        }
    } while (position !== 0); // Continue until back to the starting point

    return energy; // Return the remaining energy
}
