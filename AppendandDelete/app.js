function appendAndDelete(s, t, k) {
    let commonLength = 0;

    // Find the length of the common prefix
    for (let i = 0; i < Math.min(s.length, t.length); i++) {
        if (s[i] === t[i]) {
            commonLength++;
        } else {
            break;
        }
    }

    // Calculate the minimum operations needed
    let totalChanges = s.length + t.length - 2 * commonLength;

    // Check if the transformation is possible
    if (k >= totalChanges && (k - totalChanges) % 2 === 0 || k >= s.length + t.length) {
        return "Yes";
    } else {
        return "No";
    }
}
