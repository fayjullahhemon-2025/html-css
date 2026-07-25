// 7. Sort an array of numbers in ascending order, keeping numeric order correct (not string order).

const arr = [421,131,57,32,7,23,154];
let temp = 0;
for(let i = 0;i<arr.length;i++){
    for(let j = arr.length-1;j>=i;j--){
        if(arr[i]<arr[j]){
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] =  temp;
        }
        else{
            continue;
        }
    }
}
console.log(arr);