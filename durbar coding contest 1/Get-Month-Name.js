function getMonthName(monthNumber) {
  if(typeof monthNumber === 'number' && !Number.isNaN(monthNumber) && monthNumber !== 'Infinity' && monthNumber !== '-Infinity' && monthNumber!=='undefined' && monthNumber !=='null'){
    if(monthNumber === 1){
        return "January";
    }
    else if(monthNumber === 2){
        return "February";
    }
    else if(monthNumber === 3){
        return "March";
    }
    else if(monthNumber === 4){
        return "April";
    }
    else if(monthNumber === 5){
        return "May";
    }
    else if(monthNumber === 6){
        return "June";
    }
    else if(monthNumber === 7){
        return "July";
    }
    else if(monthNumber === 8){
        return "August";
    }
    else if(monthNumber === 9){
        return "September";
    }
    else if(monthNumber === 10){
        return "October";
    }
    else if(monthNumber === 11){
        return "November";
    }
    else if(monthNumber === 12){
        return "December";
    }
    else{
        return "Invalid";
    }
  }else{
    return "Invalid";
  }
}
console.log(getMonthName(1));
console.log(getMonthName(2));
console.log(getMonthName(3));
console.log(getMonthName(4));
console.log(getMonthName(5));
console.log(getMonthName(6));
console.log(getMonthName(7));
console.log(getMonthName(8));
console.log(getMonthName(9));
console.log(getMonthName(10));
console.log(getMonthName(11));
console.log(getMonthName(12));
console.log(getMonthName(0));
console.log(getMonthName(-1));
console.log(getMonthName(null));
console.log(getMonthName(undefined));
console.log(getMonthName(Infinity));
console.log(getMonthName(-Infinity));
console.log(getMonthName());
