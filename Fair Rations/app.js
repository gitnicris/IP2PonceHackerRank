function fairRations(B) {
    let loaves = 0;

    for (let i = 0; i < B.length; i++) {
        if (B[i] % 2 !== 0) {
            if (i === B.length - 1) {
                return "NO"; // If the last person has an odd number, it's impossible
            }
            B[i]++;
            B[i + 1]++;
            loaves += 2; // Distribute 2 loaves to make both even
        }
    }

    return loaves;
}
