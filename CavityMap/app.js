function cavityMap(grid) {
    const n = grid.length;
    const result = grid.map(row => row.split('')); // Convert each row to an array of characters

    for (let i = 1; i < n - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            const current = grid[i][j];
            if (
                current > grid[i - 1][j] && // Top
                current > grid[i + 1][j] && // Bottom
                current > grid[i][j - 1] && // Left
                current > grid[i][j + 1]    // Right
            ) {
                result[i][j] = 'X'; // Mark as cavity
            }
        }
    }

    return result.map(row => row.join('')); // Convert back to strings
}
