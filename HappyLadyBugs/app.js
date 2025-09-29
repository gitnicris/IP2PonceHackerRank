function happyLadybugs(b) {
    const freq = {};
    let hasEmptySpace = false;

    // Count frequency of each character and check for empty spaces
    for (const char of b) {
        if (char === '_') {
            hasEmptySpace = true;
        } else {
            freq[char] = (freq[char] || 0) + 1;
        }
    }

    // Check if any ladybug has less than 2 occurrences
    for (const char in freq) {
        if (freq[char] < 2) {
            return "NO";
        }
    }

    // If no empty space, check if the current arrangement is already happy
    if (!hasEmptySpace) {
        for (let i = 1; i < b.length - 1; i++) {
            if (b[i] !== b[i - 1] && b[i] !== b[i + 1]) {
                return "NO";
            }
        }
    }

    return "YES";
}
