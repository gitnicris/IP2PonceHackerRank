function queensAttack(n, k, r_q, c_q, obstacles) {
    let directions = {
        up: n - r_q,
        down: r_q - 1,
        left: c_q - 1,
        right: n - c_q,
        upLeft: Math.min(n - r_q, c_q - 1),
        upRight: Math.min(n - r_q, n - c_q),
        downLeft: Math.min(r_q - 1, c_q - 1),
        downRight: Math.min(r_q - 1, n - c_q)
    };

    for (let [r_o, c_o] of obstacles) {
        if (c_o === c_q) {
            if (r_o > r_q) directions.up = Math.min(directions.up, r_o - r_q - 1);
            else directions.down = Math.min(directions.down, r_q - r_o - 1);
        } else if (r_o === r_q) {
            if (c_o > c_q) directions.right = Math.min(directions.right, c_o - c_q - 1);
            else directions.left = Math.min(directions.left, c_q - c_o - 1);
        } else if (Math.abs(r_o - r_q) === Math.abs(c_o - c_q)) {
            if (r_o > r_q && c_o < c_q) directions.upLeft = Math.min(directions.upLeft, r_o - r_q - 1);
            else if (r_o > r_q && c_o > c_q) directions.upRight = Math.min(directions.upRight, r_o - r_q - 1);
            else if (r_o < r_q && c_o < c_q) directions.downLeft = Math.min(directions.downLeft, r_q - r_o - 1);
            else if (r_o < r_q && c_o > c_q) directions.downRight = Math.min(directions.downRight, r_q - r_o - 1);
        }
    }

    return Object.values(directions).reduce((sum, moves) => sum + moves, 0);
}
