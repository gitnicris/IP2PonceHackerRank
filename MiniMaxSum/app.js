function MiniMaxSum(arr) {
    const n = arr.length;
    let minSum = 0;
    let maxSum = 0;
    arr.sort((a, b) => a - b);
    for (let i = 0; i < n - 1; i++) {
        minSum += arr[i];
    }
    for (let i = 1; i < n; i++) {
        maxSum += arr[i];
    }   
    console.log(minSum + ' ' + maxSum);
}   