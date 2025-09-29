function beautifulTriplets(d, arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i] + d) && arr.includes(arr[i] + 2 * d)) {
            count++;
        }
    }

    return count;
}
