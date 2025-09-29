function pageCount(n, p) {
  var frontFlip = Math.floor(p/2);
  var backFlip = Math.floor((n/2)-frontFlip);
  
  var result = Math.min(frontFlip, backFlip);
  return result;


}