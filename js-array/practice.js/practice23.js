// 2. Given an array of mixed values (numbers and strings), separate them into two arrays and log both.
const mixedArr = [1,"Nasima",2,"Rubina",3,"Sumi",4,"Emon",5,"Payel",6,"Moon"];
const number = [];
const siblings = [];
for(const i of mixedArr){
    if(typeof i === "string"){
        siblings.push(i);
    }else{
        number.push(i);
    }
}
console.log(number);
console.log(siblings);