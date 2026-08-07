const availableProductFilter = (products)=>{
    return products.filter((product=> product.inStock));
};
const products = [
    {name:"Shirt",inStock : true},
    {name:"Shoes",inStock : false},
];
console.log(availableProductFilter(products));