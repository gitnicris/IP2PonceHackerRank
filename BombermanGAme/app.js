function bomberMan(n, grid) {
    if (n === 1) return grid; 
    if (n % 2 === 0) return grid.map(row => 'O'.repeat(row.length)); 

    const detonate = (grid) => {
        const rows = grid.length;
        const cols = grid[0].length;
        const newGrid = Array.from({ length: rows }, () => Array(cols).fill('O'));

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 'O') {
                    newGrid[r][c] = '.';
                    if (r > 0) newGrid[r - 1][c] = '.';
                    if (r < rows - 1) newGrid[r + 1][c] = '.';
                    if (c > 0) newGrid[r][c - 1] = '.';
                    if (c < cols - 1) newGrid[r][c + 1] = '.';
                }
            }
        }
        return newGrid.map(row => row.join(''));
    };

    const firstDetonation = detonate(grid);
    const secondDetonation = detonate(firstDetonation);

    return n % 4 === 3 ? firstDetonation : secondDetonation;
}
