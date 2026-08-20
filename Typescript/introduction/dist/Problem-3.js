"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateWeeklySteps(steps) {
    return steps.reduce((acc, curVal) => acc + curVal, 0);
}
console.log(calculateWeeklySteps([3000, 5200, 4100]));
console.log(calculateWeeklySteps([7000, 6500]));
console.log(calculateWeeklySteps([]));
