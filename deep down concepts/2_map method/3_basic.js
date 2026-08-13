const students =[ {
    name:"Emon",
    age:26,
    university: "United International University",
    id:"011221072",
    department: "CSE"
},
{
    name:"Ananna",
    age:23,
    university: "United International University",
    id:"011221259",
    department: "CSE"
},
{
    name:"Sharmin Haque",
    age:24,
    university: "United International University",
    id:"011221109",
    department: "BBA"
},
{
    name:"Tahmina Ahmed",
    age:25,
    university: "United International University",
    id:"011221234",
    department: "EEE"
},
];
const transferedStudents = students.map(student=>{
    if(student.age>=25){
        return{
            ...student,university:"North South University"
        }
    }
}).filter(student=> student!==undefined);
console.log(transferedStudents);