function serviceLane(n, cases, width) {
    const result = [];

    for (let i = 0; i < cases.length; i++) {
        const [entry, exit] = cases[i];
        const minWidth = Math.min(...width.slice(entry, exit + 1));
        result.push(minWidth);
    }

    return result;
}