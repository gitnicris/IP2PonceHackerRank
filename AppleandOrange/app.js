function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;

    for (let i = 0; i < apples.length; i++) {
        const landingPosition = a + apples[i];
        if (landingPosition >= s && landingPosition <= t) {
            appleCount++;
        }
    }

    for (let i = 0; i < oranges.length; i++) {
        const landingPosition = b + oranges[i];
        if (landingPosition >= s && landingPosition <= t) {
            orangeCount++;
        }
    }

    console.log(appleCount);
    console.log(orangeCount);
}
