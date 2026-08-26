function checkMathOperationsForNine(a, b) {
  if(typeof a === 'number' && typeof b ==='number' && !Number.isNaN(a)&&!Number.isNaN(b) && a>0 &&  b>0 && (a>0 && a<=1000)&&(b>0 && b<=1000)){
    if(a+b === 9 || a-b ===9 || a*b===9 || a/b===9){
        return 'Nine';
    }else{
        return "Nein";
    }
  }else{
    return "Nein";
  }
}

// console.log(checkMathOperationsForNine(5,4));
// console.log(checkMathOperationsForNine(10,1));
console.log(checkMathOperationsForNine(1001,992));