function cutTheSticks(arr) {
    let result = [];

    while (arr.length > 0) {
        result.push(arr.length);
        let min = Math.min(...arr);
        arr = arr.filter(stick => stick - min > 0).map(stick => stick - min);
    }

    return result;
}