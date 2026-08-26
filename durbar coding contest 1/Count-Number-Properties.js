function countNumberProperties(numbers) {
  const numsProperty = [0,0,0,0];
  if(Array.isArray(numbers)){
    for(num of numbers){
        if(num%2===0){
            numsProperty[0]++;//even
        }else{
            numsProperty[2]++;//odd
        }
        if(num>0){
            numsProperty[3]++;//positive
        }else if(num<0){
            numsProperty[1]++;//negative
        }
    }
    return {
        even : numsProperty[0],
        negative : numsProperty[1],
        odd : numsProperty[2],
        positive : numsProperty[3]
    }
  }else{
    return "Invalid";
  }
}
console.log(countNumberProperties([-5,0,3,-4,1]));
console.log(countNumberProperties([2,4,6,8,10]));