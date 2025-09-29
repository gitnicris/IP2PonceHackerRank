function bonAppetit(bill, k, b) {
   
    const annaShare = (bill.reduce((sum, cost, index) => index !== k ? sum + cost : sum, 0)) / 2;

    
    if (b === annaShare) {
        console.log("Bon Appetit");
    } else {
        console.log(b - annaShare);
    }
}
