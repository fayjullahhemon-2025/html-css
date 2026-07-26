// Problem 14: You are given an object containing information about a student.

// ---- Tasks ----
// Print all keys.
// Print all values.
// Print each key-value pair.
// name: Utsho
// age: 26
// university: DIU
// department: CSE

// Count the total number of properties in the object.
// Check if the object contains a property named "email".

//---- Expected input:
//  const student = {
//   name: "Utsho",
//   age: 25,
//   university: "DIU",
//   department: "CSE",
// };

// -----------------------------

//---- Expected output:
// name age university department

// Utsho 26 DIU CSE

// name: Utsho
// age: 26
// university: DIU
// department: CSE

// Total Properties: 4
// Has Email: false
const student = {
  name: "Emon",
  age: 26,
  university: "UIU",
  department: "CSE",
};
console.log(Object.keys(student).join(' ')); //name age university department
console.log(Object.values(student).join(' ')); //Emon 26 UIU CSE
for(const info in student){
    console.log(info,": ",student[info]);
}
console.log("Total Properties: ",Object.keys(student).length);
// console.log("Has Email: ",student.hasOwnProperty("email"));
console.log("Has Email: ",Object.keys(student).includes('email'));

// obj.hasOwnProperty(key) is used for check any key exist or not in object.
// console.log("Has Email: ",student.hasOwnProperty('email')); // it returns true or false value. and strictly case-sensitive.

// Alternative way,
// console.log("Has Email: "), Object.keys(student).includes('email'));// it returns true or false value and includes(value) is a strictly case-sensitive like obj.hasOwnProperty(key);