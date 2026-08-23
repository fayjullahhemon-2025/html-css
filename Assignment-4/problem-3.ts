function calculateWeeklyTotal(expenses: number[]): number {
    return expenses.reduce((acc:number,curVal:number)=>acc+curVal,0);
}
console.log(calculateWeeklyTotal([200, 450, 100]))
console.log(calculateWeeklyTotal([1000, 250]))
console.log(calculateWeeklyTotal([]))
