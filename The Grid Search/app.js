function gridSearch(G, P) {
    const rowsG = G.length;
    const colsG = G[0].length;
    const rowsP = P.length;
    const colsP = P[0].length;

    for (let i = 0; i <= rowsG - rowsP; i++) {
        for (let j = 0; j <= colsG - colsP; j++) {
            let found = true;

            for (let x = 0; x < rowsP; x++) {
                if (G[i + x].substr(j, colsP) !== P[x]) {
                    found = false;
                    break;
                }
            }

            if (found) return "YES";
        }
    }

    return "NO";
}
