// problem 12: filter numbers greater than a value 

function filterGreaterThan(numbers, numb){
    if(numbers.includes(numb)){
        for(const num of numbers){
            if(num>numb){
                console.log(num);
            }else{
                continue;
            }
        }
    }else{
        console.log(`${numb} is not present in ${numbers}`);
    }
}
const numbers = [10,20,30,40,50,60,70,80,90,100];
filterGreaterThan(numbers,-50);