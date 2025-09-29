function repeatedString(s, n) {
    const countAInS = s.split('').filter(char => char === 'a').length;
    const fullRepeats = Math.floor(n / s.length);
    const remainder = n % s.length;
    const countAInRemainder = s.slice(0, remainder).split('').filter(char => char === 'a').length;

    return (countAInS * fullRepeats) + countAInRemainder;
}
