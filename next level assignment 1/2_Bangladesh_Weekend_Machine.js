function getDayType(any){
    switch(any){
        case 'Saturday':
        case 'Friday':
            return "Weekend";
            break;
        case 'Sunday':
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
                return "Working Day";
                break;
        default:
            return "Invalid Day";
            break;
    }
}
console.log(getDayType("Friday"));
console.log(getDayType("Saturday"));
console.log(getDayType("Sunday"));
console.log(getDayType("Monday"));
console.log(getDayType("Tuesday"));
console.log(getDayType("Wednesday"));
console.log(getDayType("Thursday"));
console.log(getDayType("Shundori kamala"));