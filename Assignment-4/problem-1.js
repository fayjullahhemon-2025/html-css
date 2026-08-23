"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getBatteryStatus(percentage) {
    if (percentage >= 0 && percentage <= 20) {
        return "Low";
    }
    else if (percentage >= 21 && percentage <= 50) {
        return "Medium";
    }
    else if (percentage >= 51 && percentage <= 90) {
        return "High";
    }
    else {
        return "Full";
    }
}
console.log(getBatteryStatus(18));
console.log(getBatteryStatus(50));
console.log(getBatteryStatus(86));
console.log(getBatteryStatus(95));
//# sourceMappingURL=problem-1.js.map