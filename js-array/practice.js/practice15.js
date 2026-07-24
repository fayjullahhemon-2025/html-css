// 3. Turn an array of words into a single sentence string.
// Expected: a string like "word word word"

const firstName = "Fayjullah";
const middleName = "Haque";
const lastName = "Emon";
const fullName = [firstName , middleName , lastName];
console.log(fullName);
const fullNameStr = fullName.join(' ');
console.log(fullNameStr);