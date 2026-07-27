



function weeklyStepsSummary(stepsArray) {
    let sum = 0;
    if (Array.isArray(stepsArray)) {
        for (const i of stepsArray) {
            if(typeof i === 'number'){
                sum += i;
            }else{
                return "invalid";
            }
            
        }
        if (sum >= 50000) {
            const targetPass = {
                "Total Steps": sum,
                "Goal Reached": true
            };
            return targetPass;

        } else {
            const targetPass = {
                "Total Steps": sum,
                "Goal Reached": false
            };
            return targetPass;
        }
    }
    else {
        return "invalid";
    }

}

console.log(weeklyStepsSummary(8000));
console.log(weeklyStepsSummary([8000, 7500, 9200, 6000, 10000, 5500, 4000]));
console.log(weeklyStepsSummary([8000, 7500, 9200, 6000, 10000, 5500, 4000,"Hello"]));