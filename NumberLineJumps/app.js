function kangaroo(x1, v1, x2, v2) {
  if (x1 > x2) {
    if (v1 >= v2) return "NO";
  }

  if (x2 > x1) {
    if (v2 >= v1) return "NO";
  }

  let jump = (x2 - x1) / (v2 - v1);
  return jump % 1 === 0 ? "YES" : "NO";
}
console.log(kangaroo(35, 1, 45, 3));