// Problem 5 —Debugging Challenge: API Response Time Monitor
/* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */
function averageResponseTime(times) {
    if (Array.isArray(times) === false) { //fix
        return "Invalid";
    }

    if (times.length === 0) {// fix
        return "Invalid";
    }

    let total = 0;
    for (let i = 0; i < times.length; i++) {
        if(typeof times[i]==='number' && !Number.isNaN(times[i])){ //fix
            total = total + times[i]; //fix
        }else{
            return "Invalid";
        }
    }
    return total / times.length;
}
// Sample Test Cases
console.log(averageResponseTime([120, 200, 150, 130])); // Output: 150
console.log(averageResponseTime([100, 100])); // Output: 100
console.log(averageResponseTime([])); // Output: Invalid
console.log(averageResponseTime("logs")); // Output: Invalid
console.log(averageResponseTime([120, "200", 150])); // Output: Invalid

// Hidden & Edge Test Cases
console.log(averageResponseTime([100, NaN, 150])); // Output: Invalid (NaN inside array)
console.log(averageResponseTime([100, null, 150])); // Output: Invalid (null is not a valid response time)
console.log(averageResponseTime([120, undefined, 150])); // Output: Invalid
console.log(averageResponseTime([0, 0, 0])); // Output: 0
console.log(averageResponseTime(null)); // Output: Invalid