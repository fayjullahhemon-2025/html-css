function getCngFare(distance, isNight=false, waitingMinutes=0){
  let total = 50;
  if(distance>2===true){
    total=total+(distance-2)*15;
  }

  total = total+waitingMinutes*2;

  if(isNight===true){
    total = total + total*(20/100);
  }
  return total;
}

console.log(getCngFare(2));
console.log(getCngFare(1));
console.log(getCngFare(5));
console.log(getCngFare(10));
console.log(getCngFare(5,false,10));
console.log(getCngFare(5,true));
console.log(getCngFare(5,true,10));