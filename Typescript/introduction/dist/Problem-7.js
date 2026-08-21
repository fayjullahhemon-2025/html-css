"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDistanceSummary(distances) {
    const total = distances.reduce((acc, curVal) => acc + curVal, 0);
    let avg;
    if (distances.length > 0) {
        avg = total / distances.length;
    }
    else {
        avg = 0;
    }
    return { total, average: Number.isNaN(avg) ? 0 : avg };
}
console.log(getDistanceSummary([4, 6, 5, 9]));
console.log(getDistanceSummary([10, 10]));
console.log(getDistanceSummary([]));
console.log(getDistanceSummary([3, 2, 3, 4]));
