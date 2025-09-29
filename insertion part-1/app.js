function insertionSort1(n, arr) {
    let unsorted = arr[n - 1]; 
    let i = n - 2; 

    while (i >= 0 && arr[i] > unsorted) {
        arr[i + 1] = arr[i]; 
        console.log(arr.join(' ')); 
        i--;
    }
    arr[i + 1] = unsorted; 
    console.log(arr.join(' ')); 
}


