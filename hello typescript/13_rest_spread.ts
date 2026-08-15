const device = {
    name:'Iphone',
    type:'Smartphone',
    price:999,
    color:'black',
    storage:'128GB'
};
const {name:deviceName,...deviceInfo} = device;
const number3:number[]=[1,2,3,4,5];
const newNumbers:number[]= [6,7,8];
const closeFriends:string[]=['Abdul','Alif','Afsar'];
const allNumbers:number[] = [...number3 , ...newNumbers];

console.log(allNumbers);