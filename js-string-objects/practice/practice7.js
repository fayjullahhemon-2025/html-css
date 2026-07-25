// Task 7.1 — Keys and Values
// let book = { title: "The Hobbit", author: "Tolkien", pages: 310 };
// Get an array of all keys 
// Get an array of all 
// Delete the pages property using delete.

let book = {
    title: "The Habbit",
    author: "Tolkein",
    pages: 310
}
const key = Object.keys(book);
console.log(key);
const value = Object.values(book);
console.log(value);
const keyValue = Object.entries(book);
console.log(keyValue);
delete book.pages;
console.log(book);

// Task 7.2 — Nested Objects
// let user = {
//   username: "coder123",
//   address: {
//     city: "Austin",
//     zip: "78701"
//   }
// }
// Log the city using dot notation chaining.
// Add a country property inside the address.
// Delete the zip property from the nested object.
console.log("Task 7.2 — Nested Objects");
let user = {
    username: "coder123",
    address:{
        city:"Austin",
        zip:"78701",
    }
}
console.log(user.address.city);
user.address['holding number']= "29/C";
console.log(user);
delete user.address.city;
console.log(user);
 