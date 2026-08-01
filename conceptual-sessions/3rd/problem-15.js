// 7. Write a program that loops through an object representing a person's details using a for...in loop and prints each key
// alongside its value.
const person = {
    name: "Tamim Iqbal",
    title: "Dot Baba",
    Occupation: "Cricketer of BD",
    address: {
        District: "Dhaka",
        Home: "Dhaka",
        "Holding No":"Chachar hotel"
    },
    "Special quotes":"Plz amake vule jayen na."
}
for(const info in person){
    console.log(info,":",person[info]);
}