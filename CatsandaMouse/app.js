function catAndMouse(x, y, z) {
    const distanceCatA = Math.abs(x - z);
    const distanceCatB = Math.abs(y - z);

    if (distanceCatA < distanceCatB) {
        return "Cat A";
    } else if (distanceCatB < distanceCatA) {
        return "Cat B";
    } else {
        return "Mouse C";
    }
}

