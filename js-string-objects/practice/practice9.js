// Task 9.1 — Contact Book
// Build a small "contact" system:
// let contact = {
//   name: "Alex Johnson",
//   email: "ALEX@EMAIL.COM",
//   phone: "555-1234"
// };
// Convert the email to lowercase and update the object.
// Loop through the contact object and print each key-value pair.
// Add a new property favoriteWords: [] (an array) — push 3 words to it.
// Reverse the name string just for fun using one of your three reverse functions from Task 4.1.
// Check if the email includes "@email.com" (case-insensitive) and log a confirmation message.
let contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234"
};
contact['email'] = contact.email.toLowerCase();
console.log(contact.email);

for(const c in contact){
    console.log(c , contact[c]);
}
contact.favoriteWords= ["Mango","Apple","Lychee"];
