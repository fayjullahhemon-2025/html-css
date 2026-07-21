// const and let variables cannot be use after ending the loop
const num = [1,2,3,4]
for(const i of num){
    // console.log(i);
}
// console.log(i);

for(let i of num){
    // console.log(i);
}
// console.log(i);

for(var j of num){
    console.log(j);
}
console.log(j);