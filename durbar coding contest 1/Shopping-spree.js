function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {
  if(typeof totalMoney === 'number' && typeof cakeCost === 'number' && typeof donutCost === 'number' && totalMoney>0 && cakeCost>0 && donutCost>0){
    let remainingMoney = totalMoney-cakeCost;
    if(remainingMoney<0){
        return remainingMoney;
    }
    if(donutCost>0){
        return remainingMoney%donutCost;
    }else{
        return "Invalid"
    }
  }
}
// console.log(calculateRemainingMoney(100,20,10));
// console.log(calculateRemainingMoney(50,30,7));
console.log(calculateRemainingMoney(20,30,7));
// console.log(calculateRemainingMoney(50,30,0));