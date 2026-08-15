const books: string[]=['books1','book2','book3'];
const runs:number[] = [10,20,30,40,50];
const shoppingList:[string,number] = ['iphone',15000];//tuple
const book:{
    // name:string,
    name:'chemistry',//literal. fixed value. new value nibe na.const er mto
    author:string,
    price:number,
    pages:number,
    // isUsed:boolean 
    isUsed?:boolean
}={
    name:'chemistry',
    author:'Nagg',
    price:500,
    pages:200,
    // isUsed:true
}
console.log(book) 
