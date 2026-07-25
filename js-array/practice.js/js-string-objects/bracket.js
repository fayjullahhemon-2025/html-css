const person = {
    name: "Emon",
    profession: 'student',
    age: 21,
    isSingle:false ,
    'home address':'dhaka',
    'parent:name':'Abul Mazid'
}
console.log(person['parent:name']);
// const key = person['home address'];
// console.log(person[key]);
// console.log(key)
const key = 'home address';
console.log(person[key]);//dhaka