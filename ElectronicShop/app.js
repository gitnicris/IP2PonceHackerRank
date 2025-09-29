function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let max = -1;
     
    for(let i = 0; i < keyboards.length; i++) {
        const keyboardPrice = keyboards[i];
        for(let j = 0; j < drives.length; j++) {
            const drivePrice = drives[j];
            if (keyboardPrice + drivePrice <= b && keyboardPrice + drivePrice > max) {
                max = keyboardPrice + drivePrice;
            }
        }
    }
    return max;
}