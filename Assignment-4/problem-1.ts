type Status = "Low"| "Medium" | "High" | "Full";
function getBatteryStatus(percentage: number): Status {
    if(percentage>=0 && percentage<=20){
        return "Low";
    }
    else if(percentage>=21 && percentage<=50){
        return "Medium";
    }
    else if(percentage>=51 && percentage<=90){
        return "High";
    }
    else{
        return "Full";
    }
}

console.log(getBatteryStatus(18));
console.log(getBatteryStatus(50));
console.log(getBatteryStatus(86));
console.log(getBatteryStatus(95));
