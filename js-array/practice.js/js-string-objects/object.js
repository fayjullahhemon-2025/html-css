const sunglass={
    color: 'white',
    price: 120,
    brand: 'Ray Ban',
};
// console.log(sunglass);

const phone = {
    brand: 'Apple',
    version: 17,
    isThreeCamera: false,
    appsInstalled:['fb','chatgpt','neptune'],
    isSecondHand: false,
    price:999
};
// console.log(phone);

const cat = {
    Name: "Tom",
    age: 1,
    'Favorite Fish':'Tuna',
    color:'Orange'
};
console.log(cat['Favorite Fish']);

const car = {
    model: "BMW",
    color: "Black",
    price: 250,
    accelerate: function (){
        console.log("Increasing speed of the car");
    }
};