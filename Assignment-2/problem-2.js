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
// Sample Test Cases
console.log(isElevatorSafe([60, 75, 50])); // Output: true
console.log(isElevatorSafe([90, 100, 95, 120])); // Output: false
console.log(isElevatorSafe([400])); // Output: true
console.log(isElevatorSafe("60,75,50")); // Output: Invalid

// Hidden & Edge Test Cases
console.log(isElevatorSafe([])); // Output: true (0 <= 400 is true, or depending on strict array check)
console.log(isElevatorSafe([100, "200", 50])); // Output: Invalid (String inside array)
console.log(isElevatorSafe([100, NaN, 50])); // Output: Invalid (NaN inside array)
console.log(isElevatorSafe([100, null, 50])); // Output: Invalid (null inside array)
console.log(isElevatorSafe([-50, 100])); // Output: Invalid (Negative weight is physically impossible)
console.log(isElevatorSafe([Infinity])); // Output: Invalid / false

// console.log(isElevatorSafe([60, 75, 50])); //true
// console.log(isElevatorSafe([90, 100, 95, 120])); //false
// console.log(isElevatorSafe([90, 100, 95, 120])); //false
// console.log(isElevatorSafe([400]));//true
// console.log(isElevatorSafe([Infinity]));//false
// console.log(isElevatorSafe([2311111111123123n]));//false
// console.log(isElevatorSafe([]));//true
// console.log(isElevatorSafe("60,75,50"));//Invalid
// console.log(isElevatorSafe([60,"75",50]));//Invalid
// console.log(isElevatorSafe([60,75,true]));//Invalid
// console.log(isElevatorSafe([60,75,NaN]));//Invalid
// console.log(isElevatorSafe([60,75,-23]));//Invalid
// console.log(isElevatorSafe([60,75,undefined]));//Invalid
// console.log(isElevatorSafe([60,75,null]));//Invalid
// console.log(isElevatorSafe([NaN,NaN,NaN]));//Invalid