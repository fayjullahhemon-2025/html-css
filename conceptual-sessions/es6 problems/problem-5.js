const generateTopScorers = (students)=>{
    if( students.some(student=> !student.name || !student.age)){
        return" invalid";
    }else{
        return "valid";
    };
}
const player = [
    {name:"Emon",age:26},  
    {name:"Payel",age:22},  
    {age:26},  
    {name:"Emon"},  
]
console.log(generateTopScorers(player))