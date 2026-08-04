function bkashPayment(){
    console.log("Bkash Payment successfull");
}
function nagadPayment(){
    console.log("Nagad payment successfull");
}
function rocketPayment(){
    console.log("Rocket payment successfull");
}
function cardPayment(){
    console.log("Card payment succcessfull");
}

function foodOrder(food,amount,callback){
    console.log(`${food} : ${amount} TK`);
    callback();
}
foodOrder("Chotpoti",120,nagadPayment);
foodOrder("Fuchka",150,bkashPayment);
foodOrder("Biriany",350,cardPayment);