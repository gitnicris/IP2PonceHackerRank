function hurdleRace(k, height) {
    let max = Math.max(...height);
    if (max > k ){
        return max - k;
    } else {
        return 0;
    }

}