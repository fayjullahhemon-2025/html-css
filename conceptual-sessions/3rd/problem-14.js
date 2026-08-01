// 6. Given an object, use the delete operator to remove one of its properties and print the object before and after deletion.

const student = {
    name: "Fayjullah Haque Emon",
    age: 26,
    "phone number": "016********"
};
console.log(student);
delete student['phone number'];
console.log(student);