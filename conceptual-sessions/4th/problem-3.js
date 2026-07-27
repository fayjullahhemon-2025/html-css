


function generateReportCard(student) {
    let total = 0;
    if (typeof student === 'object'  && Array.isArray(student)=== false) {
        if(typeof student['bangla'] === 'number' && typeof student['english'] === 'number' && typeof student['math'] === 'number'){
            total = student['bangla'] + student['english'] + student['math'];
        }else{
            return "invalid";
        }
        
        const avg = total / 3;
        let grade = 'A+';
        if (avg >= 90) {
            grade = "A+";
        } else if (avg >= 80 && avg < 90) {
            grade = "A";
        } else if (avg >= 70 && avg < 80) {
            grade = "B";
        }
        else {
            grade = "F";
        }
        const reportCard = {
            name: student['name'],
            total,
            average: avg,
            grade
        };
        return reportCard;
    }
    else{
        return "invalid";
    }

}
const student = {
    name: 'Ayan',
    bangla: 78,
    english: 85,
    math: 92
}
const result = generateReportCard(student);
const result2 = generateReportCard(['Ayan',78,85,92]);
console.log(result);
console.log(result2);