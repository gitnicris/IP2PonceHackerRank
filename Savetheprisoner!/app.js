function saveThePrisoner(n, m, s) {
    // Calculate the last prisoner to receive a treat
    let result = (s + m - 1) % n;
    return result === 0 ? n : result;
}
