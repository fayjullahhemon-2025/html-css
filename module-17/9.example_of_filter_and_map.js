const products = [
    // Electronics
    {id:1,name:"Laptop",catagory:"Electronics",price:1200,inStock:true},
    {id:2,name:"Headphones",catagory:"Electronics",price:200,inStock:true},
    {id:3,name:"Smartphone",catagory:"Electronics",price:800,inStock:false},
    {id:4,name:"Monitor",catagory:"Electronics",price:300,inStock:true},
    {id:5,name:"Keyboard",catagory:"Electronics",price:75,inStock:true},
    // Books
    {id:6,name:"The hobbit",catagory:"Books",price:25,inStock:true},
    {id:8,name:"Dune",catagory:"Books",price:28,inStock:false},
    //Appliances
    {id:9,name:"Coffee Maker",catagory:"Appliances",price:150,inStock:false},
    {id:10,name:"Blender",catagory:"Appliances",price:80,inStock:true},
    {id:11,name:"Toaster",catagory:"Appliances",price:45,inStock:true},
    {id:9,name:"Microwave Oven",catagory:"Appliances",price:220,inStock:true},
    //Clothing
    {id:10,name:"T-shirt",catagory:"Clothing",price:20,inStock:true},
    {id:11,name:"Jeans",catagory:"Clothing",price:60,inStock:false},
    {id:11,name:"Jacket",catagory:"Clothing",price:110,inStock:true},
    {id:12,name:"Jacket",catagory:"Clothing",price:110,inStock:true},
    //Home Goods
    {id:16,name:"Desk Lamp",catagory:"Home Goods",price:35,inStock:true},
    {id:17,name:"Scented Candle",catagory:"Home Goods",price:15,inStock:true},
    {id:18,name:"Picture Frame",catagory:"Home Goods",price:22,inStock:false},
    //Groceries
    {id:19,name:"Organic Apples",catagory:"groceries",price:5,inStock:true},
    {id:20,name:"Artisan Bread",catagory:"groceries",price:8,inStock:true},
];

console.log(products.filter(products=>products.price>150 && products.inStock));