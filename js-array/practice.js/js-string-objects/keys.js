const person = {
    name: "Emon",
    profession: 'student',
    age: 21,
    isSingle:false ,
    'home address':'dhaka',
    'parent:name':'Abul Mazid'
}
delete person.isSingle;
delete person['home address'];
const keys = Object.keys(person);
console.log(keys);
const values = Object.values(person);
console.log(values);
console.log(Object.entries(person));