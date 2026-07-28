/** Largest & Smallest in an Array   
Concepts Used:  Arrays · Loops · Conditionals
Scenario:  Given an array of numbers, find both the largest AND smallest value using a single loop (no built-in Math.max/Math.min).
If the input is not an array, return "Invalid".
If any element of the array is not a number, return "Invalid".
Expected Output:
   Numbers: [45, 12, 89, 3, 67]
   Largest: 89
   Smallest: 3

Hints:
  1.  Initialize both max and min to the first element
  2.  Update them inside one loop as you compare each number
*/
function  largestSmallest(numbers){
    let MaxVal = -Infinity;
    let MinVal = Infinity;
    for(const num of  numbers){
        if(num>MaxVal){
            MaxVal = num;
        }else if(num< MinVal){
            MinVal = num;
        }else{
            continue;
        }
    }
    return {Numbers: numbers, Largest: MaxVal, Smallest:MinVal};
}
console.log(largestSmallest([45, 12, 89, 3, 67]));