function Super_reduced_string(s) {
    let arr = s.split('');
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === arr[i + 1]) {
            arr.splice(i, 2);
            i = 0; // reset to start to check again
        } else {
            i++;
        }
    }
    return arr.length === 0 ? 'Empty String' : arr.join('');
}
