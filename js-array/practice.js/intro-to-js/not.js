const isLoggedIn = false;
// if(isLoggedIn === true){
//     console.log('Perfect :)');
// }
// else{
//     console.log('please login');
// }
// if(isLoggedIn === false){
//     console.log('Please login');
// }

if(!isLoggedIn){
    console.log('Please log in');
}
// !isLoggedIn 
// = not false 
// = true
//truthy and falsy value
// 0 -> falsy value 
// 1 -> truthy value 

// const number = 0;
const number = 1;
if(number){
    console.log('number is truthy');
}

const name = '';
if(!name){
    console.log('name is truthy');
}
// !!name 
// not not name
// not not falsy 
// not (not falsy)
// not truthy
// falsy 