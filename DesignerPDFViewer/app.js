function designerPdfViewer(h, word) {
    // Find the maximum height of the letters in the word
    let maxHeight = 0;
    for (let char of word) {
        let index = char.charCodeAt(0) - 97; // 'a' has ASCII value 97
        maxHeight = Math.max(maxHeight, h[index]);
    }
    // Calculate the area of the highlighted rectangle
    return maxHeight * word.length;
}
