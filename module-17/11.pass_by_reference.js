const user = {
    name:"Emon",
    age:26
}
function changeInfo(user){
    user.name = "Payel";
    console.log(user);
}
changeInfo(user);
console.log(user);
function changeInfoV2(user){
    user = {name:"Moon",age:18}
    console.log(user);
}
changeInfoV2(user);
console.log(user);
const user2 = {
    name:"Emon",
    age:26
}
changeInfo({...user2});
console.log(user2);