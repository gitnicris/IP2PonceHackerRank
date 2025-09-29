function encryption(s) {
    // Remove spaces from the string
    s = s.replace(/\s+/g, "");
    const L = s.length;

    // Determine grid size
    let m = Math.floor(Math.sqrt(L));
    let n = Math.ceil(Math.sqrt(L));
    if (m * n < L) {
        m += 1; // increase rows if grid too small
    }

    // Fill the grid row-wise
    const grid = [];
    let strindex = 0;
    for (let i = 0; i < m; i++) {
        grid[i] = [];
        for (let j = 0; j < n; j++) {
            grid[i][j] = s[strindex] || '';
            strindex++;
        }
    }

    // Read column-wise
    let out = [];
    for (let i = 0; i < n; i++) {
        let col = "";
        for (let j = 0; j < m; j++) {
            if (grid[j][i]) {
                col += grid[j][i];
            }
        }
        out.push(col);
    }

    return out.join(" ");
}