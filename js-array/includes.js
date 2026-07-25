console.log("=====array1.concat(array2,array3,...)")
const number1 = [1,2,3,4];
const number2 = [5,6,7];
const number3 = number1.concat(number2);
console.log(number1);
console.log(number2);
console.log(number3);
console.log("===========X==============");
console.log("");
console.log("========array.includes(value)==========");
console.log(number1.includes(3));//true
console.log(number1.includes(6));//false
if(number1.includes(3)){
    console.log("exist");
}
console.log("---------------array.includes(value) is a case-sensitive --------------------");
const players=["Lessi","No Laand o","khamar"];
if(players.includes("Lessi")){
    console.log("Commity Team winner");
}else{
    console.log("Fair Match");
}
if(players.includes("lessi")){
    console.log("Where is Messi?");
}
else{
    console.log("Commity Team crying");
}
console.log("======================X====================");
console.log("");
console.log("============array.join()====================");
const joinedNumber1 = number1.join(" ");//[1 2 3 4] 
console.log(joinedNumber1);
const joinedNumber2 = number2.join("/");//[5/6/7]
console.log(joinedNumber2);
console.log("===============X==================");
console.log("");
console.log("=========array.indexOf(value)============");
const position = number1.indexOf(3);
console.log(position);//2
console.log(number1.indexOf(29));//-1
console.log("=============Array.isArray(array)==========");
console.log(typeof number1);//object
console.log(Array.isArray(number1));//true
console.log(Array.isArray(true));//false