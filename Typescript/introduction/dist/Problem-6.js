"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee = [
    { name: "Lima",
        onDuty: true },
    { name: "Karim",
        onDuty: false }
];
function findOnDutyEmployees(employees) {
    return employees.filter(emp => emp.onDuty);
}
console.log(findOnDutyEmployees(employee));
