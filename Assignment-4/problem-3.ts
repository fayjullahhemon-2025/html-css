function calculateWeeklyTotal(expenses: number[]): number {
    return expenses.reduce((acc,curVal)=>acc+curVal,0);
}
console.log(calculateWeeklyTotal([200, 450, 100]))
console.log(calculateWeeklyTotal([1000, 250]))
console.log(calculateWeeklyTotal([]))
