function strangeCounter(t) {
    let cycleStart = 3; // Initial cycle starts with 3 seconds

    // Find the cycle where time 't' belongs
    while (t > cycleStart) {
        t -= cycleStart; // Reduce 't' by the current cycle length
        cycleStart *= 2; // Double the cycle length for the next cycle
    }

    // Calculate the value displayed at time 't'
    return cycleStart - t + 1;
}
