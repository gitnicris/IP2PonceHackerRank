function equalizeArray(arr) {
    const frequency = {};
    
    // Count the frequency of each element
    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
    }
    
    // Find the maximum frequency
    const maxFrequency = Math.max(...Object.values(frequency));
    
    // Calculate deletions needed
    return arr.length - maxFrequency;
}