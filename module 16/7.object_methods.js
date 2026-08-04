const student = {
    name: "Emon",
    id:72,
    age:26,
};
const keys = Object.keys(student);
const values= Object.values(student);
const entries = Object.entries(student);
// console.log(entries);

for(const elem of entries){
    // console.log(elem);//return 1D array (records)
    const [key,value] = elem;//destructure
    console.log(key,value);
}

const bankAccount = {
    accountNumber : "1234",
    balance: 5000
};
Object.seal(bankAccount);
delete bankAccount.balance;
console.log(bankAccount);//balance delete hoy nai cz seal existing property delete korte dey na.
bankAccount.balance = 300;
console.log(bankAccount.balance);//seal object er exisiting property edit kora jay.

bankAccount.nomineeName = "Abbu";
console.log(bankAccount);//new property add hbe na seal er khetre

// freeze 

const birthCertificate = {
    name: "Emon",
    birthDate: "24/06/2000",
    cardNumber:"2323543464234"
};
Object.freeze(birthCertificate);

delete birthCertificate.cardNumber;
birthCertificate.fatherName = "Abbu";
birthCertificate.cardNumber = "011221072";
console.log(birthCertificate);//never delete because freeze doesn't allowed to delete, modified or add new property to object
