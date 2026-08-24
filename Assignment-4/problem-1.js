"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getBatteryStatus(percentage) {
    if (percentage >= 0 && percentage <= 20) {
        return "Low";
    }
    else if (percentage <= 50) {
        return "Medium";
    }
    else if (percentage <= 90) {
        return "High";
    }
    else {
        return "Full";
    }
}
console.log(getBatteryStatus(20.5));
console.log(getBatteryStatus(21));
console.log(getBatteryStatus(50));
console.log(getBatteryStatus(51));
console.log(getBatteryStatus(90));
console.log(getBatteryStatus(91));
console.log(getBatteryStatus(100));
//# sourceMappingURL=problem-1.js.map