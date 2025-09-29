function circularArrayRotation(arr, k, queries) {
    // Perform the rotation
    k = k % arr.length; // Handle cases where k > arr.length
    const rotatedArray = arr.slice(-k).concat(arr.slice(0, -k));
    
    // Retrieve the queried indices
    return queries.map(index => rotatedArray[index]);
}

