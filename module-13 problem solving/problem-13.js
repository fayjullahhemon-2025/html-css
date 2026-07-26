// problem 13: loop through object 
let monitor = {
    color:"Black",
    brand:"Sam Su N G",
    display:16.5,
    size:"Onek boro",
    test:"dummy"
}
for(const key in monitor){
    console.log(key,"==>",monitor[key]);
}