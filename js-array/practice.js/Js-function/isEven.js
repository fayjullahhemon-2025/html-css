function isEven(number){
    console.log(number, ' divided by 2 er vaagsesh ',number%2);
    if(number % 2 === 0){
        return true;
    }else{
        return false;
    }
}
const result = isEven(38);
console.log('is Even' , result);