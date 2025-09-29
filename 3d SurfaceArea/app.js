function surfaceArea(A) {
    let H = A.length; // Number of rows
    let W = A[0].length; // Number of columns
    let area = 0;

    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            // Top and bottom surfaces
            area += 2;

            // Add the difference with the neighboring cells
            // North
            area += i === 0 ? A[i][j] : Math.max(0, A[i][j] - A[i - 1][j]);
            // South
            area += i === H - 1 ? A[i][j] : Math.max(0, A[i][j] - A[i + 1][j]);
            // West
            area += j === 0 ? A[i][j] : Math.max(0, A[i][j] - A[i][j - 1]);
            // East
            area += j === W - 1 ? A[i][j] : Math.max(0, A[i][j] - A[i][j + 1]);
        }
    }

    return area;
}
