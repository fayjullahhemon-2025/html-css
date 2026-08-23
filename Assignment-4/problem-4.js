"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTrafficAction(light) {
    if (light === 'red') {
        return "Stop";
    }
    else if (light === 'yellow') {
        return "Slow Down";
    }
    else {
        return "Go";
    }
}
console.log(getTrafficAction('green'));
console.log(getTrafficAction('yellow'));
console.log(getTrafficAction('red'));
// console.log(getTrafficAction('white'));
//# sourceMappingURL=problem-4.js.map