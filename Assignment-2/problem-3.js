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
console.log(calculateAiCost(300));
console.log(calculateAiCost(500));
console.log(calculateAiCost(650));
console.log(calculateAiCost(599));
console.log(calculateAiCost(1000));
console.log(calculateAiCost(-10));
console.log(calculateAiCost("500"));
console.log(calculateAiCost(Infinity));
console.log(calculateAiCost([500]));
console.log(calculateAiCost([]));
console.log(calculateAiCost({}));
console.log(calculateAiCost({token:1000}));
console.log(calculateAiCost(false));
console.log(calculateAiCost(true));