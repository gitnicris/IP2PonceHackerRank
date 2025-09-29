function jumpingOnClouds(c) {
    let jumps = 0;
    let i = 0;

    while (i < c.length - 1) {
        if (i + 2 < c.length && c[i + 2] === 0) {
            i += 2; // Jump 2 if safe
        } else {
            i += 1; // Otherwise jump 1
        }
        jumps++;
    }

    return jumps;
}

