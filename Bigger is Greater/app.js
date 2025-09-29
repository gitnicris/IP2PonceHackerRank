function biggerIsGreater(w) {
    // Convert the string to an array for manipulation
    let arr = w.split('');
    let i = arr.length - 2;

    // Step 1: Find the first character that is smaller than the one after it
    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }

    // If no such character is found, return "no answer"
    if (i < 0) {
        return "no answer";
    }

    // Step 2: Find the smallest character on the right of 'i' that is larger than arr[i]
    let j = arr.length - 1;
    while (arr[j] <= arr[i]) {
        j--;
    }

    // Step 3: Swap characters at i and j
    [arr[i], arr[j]] = [arr[j], arr[i]];

    // Step 4: Reverse the substring after index i
    let result = arr.slice(0, i + 1).concat(arr.slice(i + 1).reverse());

    // Convert the array back to a string and return
    return result.join('');
}
