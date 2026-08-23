interface QuizSummary{
    total:number,
    average:number,
};
function getQuizSummary(scores: number[]): QuizSummary{
    const total:number = scores.reduce((acc:number,curVal:number)=>acc+curVal,0);
    const average:number = total!==0 && scores.length!==0? total/scores.length : 0;
    return {
        total,
        average
    }
}
console.log(getQuizSummary([8, 9, 7, 10]))
console.log(getQuizSummary([5, 5]))
console.log(getQuizSummary([]))
