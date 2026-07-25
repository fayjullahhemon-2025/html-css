// Build a simple login + role-check system that verifies username/password and shows a different message based on admin/user role — combine everything from this module (comparison, logical operators, if-else, ternary).

const isAdmin = false;
const adminUsername = "admin";
const adminPassword = "admin";
const userUsername = "user";
const userPassword = "user";
let message = "";
if(isAdmin){
    message = adminUsername === "admin" && adminPassword === "admin" ? "Admin dashboard" : "Wrong Credential";
}else{
    message = userUsername === "user" && userPassword === "user" ? "User Dashboard" : "Wrong Credential";
}
console.log(message);