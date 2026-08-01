// 8. Given a nested object representing a person with an embedded address object, access and print a property from inside
// the nested object.

const person = {
    name: "Fayjullah Haque Emon",
    age: 26,
    title: "Engineer",
    address:{
        District: "Dhaka",
        Thana:"Ramna",
        'Post Office': "Shanti nagar",
        Zip: 1217,
        Area: "East Nayatola",
        "Holding No.": 572
    }
}
console.log(person.address);