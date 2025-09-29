function birthday(s, d, m) {
    let num = s;
    let nums = [];
    let count = 0;
    const add = (arr) => arr.reduce((a, b) => a + b, 0);
    for (let i = 0; i < s.length; i++) {
      let arrayElement = num.slice(0 + i, m + i);
      nums.push(arrayElement);
    }
    if(num.length===1 && num[0]===d){
        count++;
    }else{
      nums.forEach((el) => {
          if (add(el) === d) {
            count++;    
          }
        });
    }
    
  
    return count;
}