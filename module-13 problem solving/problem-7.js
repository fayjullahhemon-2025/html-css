//problem-7: check if a string is palindrom of not
function reverseStr(str){
    const strSplit = str.split('');
    let reverseString = [];
    for(const i of strSplit){
        reverseString = i + reverseString;
    }
    return reverseString;
}
function isPalindrome(str){
   let j = str.length-1;
   let i = 0;
   for( i = 0; i<=j;i++){
    if(str[i]===str[j]){
        j--;
        continue;
    }else{
        return false;
    }
   }
   if(i>=j){
    return true;
   }else{
    return false;
   }
}
const str = '1a2a1';
console.log(isPalindrome(str));
// console.log(isPalindrome("noon"));