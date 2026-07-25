const commitment = "I will work hard and will never give up.";
// console.log(commitment.reverse()); //there is not such function like array to reverse a string.

const parts = commitment.split('');
// console.log(parts.reverse().join(''));

// console.log(parts);
let concatinate='';
for(const i of parts){
    concatinate = i + concatinate;
    // console.log(i,"=>",concatinate);
}
console.log(concatinate);
