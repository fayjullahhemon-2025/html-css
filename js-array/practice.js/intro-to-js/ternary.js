// binary -> two 
// ternary -> three

const age = 20;
if(age >= 20){
    console.log('Please vote');
}
else{
    console.log('Grow up kidd');
}

// ternary operator 
// condition ? true : false 
age >= 19 ? console.log('Please vote') : console.log('grow up kiddo');

let price = 500;
const isLeader = false;
if(isLeader){
    price = 0;
}else{
    price +=100;
}
console.log('Total Price ',price);

// price = isLeader ? 'true' : 'false'

price = isLeader ? 0 : 500+100;
console.log('price now: '+price);