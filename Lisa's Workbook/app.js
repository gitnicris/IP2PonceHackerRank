function workbook(n, k, arr) {
    let specialProblems = 0;
    let pageNumber = 1;

    for (let chapter = 0; chapter < n; chapter++) {
        const problems = arr[chapter];

        for (let i = 1; i <= problems; i++) {
            if (i === pageNumber) {
                specialProblems++;
            }

            // Move to next page after k problems or at the end of the chapter
            if (i % k === 0 || i === problems) {
                pageNumber++;
            }
        }
    }

    return specialProblems;
}

// Example usage:
const n = 5; // Number of chapters
const k = 3; // Maximum problems per page
const arr = [4, 2, 6, 1, 10]; // Problems in each chapter

console.log(workbook(n, k, arr)); // Output: 4
