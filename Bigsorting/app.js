function bigSorting(unsorted) {
    return unsorted.sort((a, b) => {
        
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        
        return a.localeCompare(b);
    });
}
