function bonusScore(scores) {
    if (Array.isArray(scores) && scores.length > 0) {
        let count = 0;
        for(const score of scores){
            if(typeof score!=='number'|| Number.isNaN(score)){
                count++;
            }
        }
        if(count>0){
            return "Invalid";
        }else{
            return scores.reduce((accumulator,currentVal)=>accumulator+(currentVal+10),0)
        }
    }else{
        return "Invalid";
    }
}
console.log(bonusScore([80, 65, 90, 75]));
console.log(bonusScore([100]));
console.log(bonusScore([0, 10]));
console.log(bonusScore([]));
console.log(bonusScore("scores"));
console.log(bonusScore([80, "90", 70]));
console.log(bonusScore([80, NaN, 70]));
console.log(bonusScore([80, undefined, 70]));
console.log(bonusScore([80, 35.4, 70]));
console.log(bonusScore(null));

// Return "Invalid" যদি—
// Input Array না হয়।
// Array Empty হয়।
// Array-এর মধ্যে Number ছাড়া অন্য কোনো Data Type থাকে।
