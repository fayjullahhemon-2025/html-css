type Light = 'red' | 'yellow' | 'green';
type Action = "Stop" | "Slow Down" | "Go";
function getTrafficAction(light: Light): Action {
    if(light === 'red'){
        return "Stop";
    }else if(light === 'yellow'){
        return "Slow Down";
    }else{
        return "Go";
    }
}

console.log(getTrafficAction('green'));
console.log(getTrafficAction('yellow'));
console.log(getTrafficAction('red'));
// console.log(getTrafficAction('white'));
