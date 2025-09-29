function squares(a, b) {
    const lower = Math.ceil(Math.sqrt(a)); // Smallest integer whose square is >= a
    const upper = Math.floor(Math.sqrt(b)); // Largest integer whose square is <= b
    return upper - lower + 1; // Count of perfect squares in the range
}
