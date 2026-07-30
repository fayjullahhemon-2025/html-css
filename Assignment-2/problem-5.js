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
    return (total/times.length); //fix
}
