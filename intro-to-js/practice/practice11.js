// Build a grading system using a marks variable (A+, A, B, C, F) — it must have at least 5 condition branches.

const mark = 69;
if(mark >90 && mark <=100){
    console.log("A+");
}
else if(mark >80){
    console.log("A");
}
else if(mark >70){
    console.log("B");
}
else if(mark >60){
    console.log("C");
}
else{
    console.log("F");
}