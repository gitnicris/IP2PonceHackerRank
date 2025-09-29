 function twoPluses(grid) {
    const n = grid.length;
    const m = grid[0].length;

    
    const arm = Array.from({ length: n }, () => Array(m).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 'G') {
                let size = 0;
                while (
                    i - size >= 0 && i + size < n &&
                    j - size >= 0 && j + size < m &&
                    grid[i - size][j] === 'G' &&
                    grid[i + size][j] === 'G' &&
                    grid[i][j - size] === 'G' &&
                    grid[i][j + size] === 'G'
                ) size++;
                arm[i][j] = size - 1;
            }
        }
    }

    
    const pluses = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            for (let s = 0; s <= arm[i][j]; s++) {
                pluses.push({ i, j, size: s });
            }
        }
    }

    let maxProduct = 0;

    
    for (let p1 = 0; p1 < pluses.length; p1++) {
        const { i: i1, j: j1, size: s1 } = pluses[p1];

        
        const cells1 = new Set();
        for (let k = 0; k <= s1; k++) {
            cells1.add(`${i1 + k},${j1}`);
            cells1.add(`${i1 - k},${j1}`);
            cells1.add(`${i1},${j1 + k}`);
            cells1.add(`${i1},${j1 - k}`);
        }

        for (let p2 = p1 + 1; p2 < pluses.length; p2++) {
            const { i: i2, j: j2, size: s2 } = pluses[p2];

            let overlap = false;
            for (let k = 0; k <= s2; k++) {
                if (
                    cells1.has(`${i2 + k},${j2}`) ||
                    cells1.has(`${i2 - k},${j2}`) ||
                    cells1.has(`${i2},${j2 + k}`) ||
                    cells1.has(`${i2},${j2 - k}`)
                ) {
                    overlap = true;
                    break;
                }
            }

            if (!overlap) {
                const product = (4 * s1 + 1) * (4 * s2 + 1);
                if (product > maxProduct) maxProduct = product;
            }
        }
    }

    return maxProduct;
}
