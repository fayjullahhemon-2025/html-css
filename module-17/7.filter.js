// filter 

const arr = [10,20,30,40,50,60];

const greaterThan25 = arr.filter(number=> number>25);

console.log(greaterThan25);

//behinde the scene

arr.filtering = (compare)=>{
    const newArr = [];
    for(const num of arr){
        if(compare(num)){
            newArr.push(num);
        }
    }
    return newArr;
}
const compare = num => num>25;

console.log(arr.filtering(number => number>25));