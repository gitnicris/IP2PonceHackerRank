function timeInWords(h, m) {
    const array = [
        "zero", "one", "two", "three", "four", "five", "six", "seven",
        "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen",
        "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty",
        "twenty one", "twenty two", "twenty three", "twenty four", "twenty five",
        "twenty six", "twenty seven", "twenty eight", "twenty nine"
    ];
    
    if (m === 0) {
        return array[h] + " o' clock";
    }
    if (m === 15) {
        return 'quarter past ' + array[h];
    }
    if (m === 30) {
        return 'half past ' + array[h];
    }
    if (m === 45) {
        return 'quarter to ' + array[h + 1];
    }
    if (m < 30) {
        if (m === 1) {
            return array[m] + ' minute past ' + array[h];
        }
        return array[m] + ' minutes past ' + array[h];
    }
    // for m > 30 and not 45
    const minutesTo = 60 - m;
    if (minutesTo === 1) {
        return 'one minute to ' + array[h + 1];
    }
    return array[minutesTo] + ' minutes to ' + array[h + 1];
}
