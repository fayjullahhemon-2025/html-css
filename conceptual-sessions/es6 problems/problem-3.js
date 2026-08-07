const couponApplier = (records)=>{
    const discountPrice = records.price-records.price*0.1;
    return {...records,price:discountPrice};
}
console.log(couponApplier({orderId:"a1",price:370,customer:"Emon"}));