function permutationEquation(p) {
    const n = p.length;
    const result = [];
    
    for (let x = 1; x <= n; x++) {
        const index = p.indexOf(x) + 1;
        const y = p.indexOf(index) + 1;
        result.push(y);
    }
    
    return result;
}
