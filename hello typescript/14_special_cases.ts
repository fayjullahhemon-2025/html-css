function calculateTax(amount:(string|number|null),taxRate:number){
    if(typeof amount === 'string'){
        amount = parseFloat(amount);
    }
    if(amount === null){
        amount = 0;
    }
    return amount*taxRate;
}
const myTax = calculateTax(100,0.15);
const yourTax = calculateTax('200',0.15);
const hisTax = calculateTax(null,0.15);

//null
const myFuture:number|null = null;
//any (generally not used)
const myAny:any = 'hello';
//unknown (jokhn ami sure na database ba user theke input ki hbe sheta ami sure janina)
let myUnknown:unknown;

//undefined
let myUndefined:undefined = undefined;
