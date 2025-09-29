function taumBday(b, w, bc, wc, z) {
    // Effective cost of black gifts (either buy directly or convert from white)
    const blackCost = Math.min(bc, wc + z);

    // Effective cost of white gifts (either buy directly or convert from black)
    const whiteCost = Math.min(wc, bc + z);

    // Total cost
    return BigInt(b) * BigInt(blackCost) + BigInt(w) * BigInt(whiteCost);
}