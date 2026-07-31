// Problem 3 — AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
 if(typeof tokensUsed === 'number' && tokensUsed>=0 && !Number.isNaN(tokensUsed) && tokensUsed!==Infinity){
    if(tokensUsed>500){
        tokensUsed = tokensUsed - 500;
        return Math.floor((tokensUsed/100))*5;
    }else{
        return 0;
    }
 }else{
    return "Invalid";
 }
}

// Sample Test Cases
console.log(calculateAiCost(300)); // Output: 0
console.log(calculateAiCost(500)); // Output: 0
console.log(calculateAiCost(650)); // Output: 5
console.log(calculateAiCost(1000)); // Output: 25
console.log(calculateAiCost(-10)); // Output: Invalid
console.log(calculateAiCost("500")); // Output: Invalid

// Hidden & Edge Test Cases
console.log(calculateAiCost(NaN)); // Output: Invalid (NaN is typeof 'number')
console.log(calculateAiCost(Infinity)); // Output: Invalid
console.log(calculateAiCost(599)); // Output: 0 (Only 99 extra tokens, less than 100)
console.log(calculateAiCost(0)); // Output: 0
console.log(calculateAiCost(undefined)); // Output: Invalid
// console.log(calculateAiCost(300));
// console.log(calculateAiCost(500));
// console.log(calculateAiCost(650));
// console.log(calculateAiCost(599));
// console.log(calculateAiCost(1000));
// console.log(calculateAiCost(-10));
// console.log(calculateAiCost("500"));
// console.log(calculateAiCost(Infinity));
// console.log(calculateAiCost([500]));
// console.log(calculateAiCost([]));
// console.log(calculateAiCost({}));
// console.log(calculateAiCost({token:1000}));
// console.log(calculateAiCost(false));
// console.log(calculateAiCost(true));