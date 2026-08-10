function studentIntroduction(student) {
    if (typeof student !== 'object' || !student.name ||!student.age || !student.course || student.name ===undefined || student.age === undefined || student.course === undefined ||student.name===null|| student.age === null || student.course === null || Number.isNaN(student.age)|| typeof student.name!== 'string'||typeof student.course!=='string'|| typeof student.age !=='number') {
        return "Invalid";
    } else {
        const { name, age, course } = student;
        return `My name is ${name}. I am ${age} years old. I am learning ${course}.`
    }
}
// const student = {
//     name: "Rafi",
//     age: 18,
//     course: "JavaScript"
// }
// const student2 = {
//     name: "Rafi",
//     course: "JavaScript"
// }
// const student3 = {
//     name: "Rafi",
// }
// const student4 = {
// }

const student5 = {
    name: "   ",
    course: "JavaScript"
}
// console.log(studentIntroduction(student));
// console.log(studentIntroduction(student2));
// console.log(studentIntroduction(student3));
// console.log(studentIntroduction(student4));
console.log(studentIntroduction(student5));

