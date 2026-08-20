"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    Status["Poor"] = "Poor";
    Status["Fair"] = "Fair";
    Status["Good"] = "Good";
    Status["Excellent"] = "Excellent";
})(Status || (Status = {}));
const getSignalStatus = (num) => {
    if (num >= 0 && num <= 25) {
        return Status.Poor;
    }
    else if (num < 56) {
        return Status.Fair;
    }
    else if (num < 86) {
        return Status.Good;
    }
    else if (num < 101) {
        return Status.Excellent;
    }
    else {
        return Status.Excellent;
    }
};
console.log(getSignalStatus(100));
