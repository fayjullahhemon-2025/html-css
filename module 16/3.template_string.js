let name = "Emon";

let location = `Badda,
Dhaka`;

let message = `Hello ${name} ! Your location is ${location}`
console.log(message);
console.log("~~~~~~~~~~~~~~~~~~");

let price = 500;

let quantity = 5;

let message2 = `Hello, ${name}, your bill is ${price*quantity}`;
console.log(message2);

function admissionConfirmationMail(name,amount){
    return `
    Hello, ${name || "student"},
    Your payment is successfull.
    Your paid amount is ${amount}.
    `
}

console.log(admissionConfirmationMail("Emon",5500));
console.log(admissionConfirmationMail(undefined,5500));
