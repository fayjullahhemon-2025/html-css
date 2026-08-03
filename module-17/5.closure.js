function relation(){
    const name = "Fahmida";
    let memory = 0;
    return function (memory){
        memory--;
        return memory;
    }
}

const firstYearOBreakUp = relation();
const SecondYearOfBreakUp = relation();
const ThirdYearOfBreakUp = relation();
const FourthYearOfBreakUp = relation();

console.log(firstYearOBreakUp(10));
console.log(SecondYearOfBreakUp(7));
console.log(ThirdYearOfBreakUp(3));
console.log(FourthYearOfBreakUp(1));