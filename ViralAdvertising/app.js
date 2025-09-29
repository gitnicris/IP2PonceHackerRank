function viralAdvertising(n) {
    let shared = 5; // Initial number of people the ad is shared with
    let cumulativeLikes = 0; // Total likes accumulated

    for (let day = 1; day <= n; day++) {
        let liked = Math.floor(shared / 2); // People who liked the ad
        cumulativeLikes += liked; // Add to total likes
        shared = liked * 3; // Each person shares with 3 others
    }

    return cumulativeLikes; // Return total likes after n days
}
