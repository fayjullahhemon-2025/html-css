// Problem 2 — Elevator Weight Safety Checker
function isElevatorSafe(weights) {
  if(Array.isArray(weights)){
    let sum = 0;
    for(const weight of weights){
        if(typeof weight === 'number' && weight>=0 && !Number.isNaN(weight)){
            /** weight ki number kina, 0 ba tar boro kina, NaN kina check korechi */
            sum = sum + weight;
        }else{
            return "Invalid";
        }
    }
    if(sum<=400){
        return true;
    }else{
        return false;
    }
  }else{
    return "Invalid";
  }
}

console.log(isElevatorSafe([60, 75, 50])); //true
console.log(isElevatorSafe([90, 100, 95, 120])); //false
console.log(isElevatorSafe([90, 100, 95, 120])); //false
console.log(isElevatorSafe([400]));//true
console.log(isElevatorSafe([Infinity]));//false
console.log(isElevatorSafe([2311111111123123n]));//false
console.log(isElevatorSafe([]));//true
console.log(isElevatorSafe("60,75,50"));//Invalid
console.log(isElevatorSafe([60,"75",50]));//Invalid
console.log(isElevatorSafe([60,75,true]));//Invalid
console.log(isElevatorSafe([60,75,NaN]));//Invalid
console.log(isElevatorSafe([60,75,-23]));//Invalid
console.log(isElevatorSafe([60,75,undefined]));//Invalid
console.log(isElevatorSafe([60,75,null]));//Invalid
console.log(isElevatorSafe([NaN,NaN,NaN]));//Invalid