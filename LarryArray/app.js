function larrysArray(A) {
    let n = A.length;
    for (let i = 0; i < n - 2; i++) {
        for (let j = i; j < n - 2; j++) {
            while (A[j] > A[j + 1] || A[j] > A[j + 2]) {
                // Perform a 3-element rotation
                const tmp = A[j];
                A[j] = A[j + 1];
                A[j + 1] = A[j + 2];
                A[j + 2] = tmp;
            }
        }
    }
    // Check if array is sorted
    for (let i = 0; i < n - 1; i++) {
        if (A[i] > A[i + 1]) return "NO";
    }
    return "YES";
}