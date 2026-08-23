"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
function getQuizSummary(scores) {
    const total = scores.reduce((acc, curVal) => acc + curVal, 0);
    const average = total !== 0 && scores.length !== 0 ? total / scores.length : 0;
    return {
        total,
        average
    };
}
console.log(getQuizSummary([8, 9, 7, 10]));
console.log(getQuizSummary([5, 5]));
console.log(getQuizSummary([]));
//# sourceMappingURL=problem-5.js.map