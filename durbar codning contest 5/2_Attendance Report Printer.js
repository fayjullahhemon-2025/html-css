function formatAttendanceReport(students) {
  return students.map(student=> {
    const result = Math.round((student.present/student.total)*100) 
    if(result>=90){
        return `${student.name}: ${student.present}/${student.total} (${result}%) - Excellent`
    }else if(result>=75 && result <=89){
        return`${student.name}: ${student.present}/${student.total} (${result}%) - Good`
    }else{
        return`${student.name}: ${student.present}/${student.total} (${result}%) - At Risk`
    }
  } )
}
// console.log(formatAttendanceReport([{ name: "Rafi", present: 18, total: 20 }]));
console.log(formatAttendanceReport([
  { name: "Lina", present: 15, total: 20 },
  { name: "Sam", present: 12, total: 20 }
]));