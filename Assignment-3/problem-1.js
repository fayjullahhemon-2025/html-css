function studentIntroduction(student) {
    if (Array.isArray(student)||typeof student !== 'object' || !student|| Number.isNaN(student.age)|| typeof student.name!== 'string'||typeof student.course!=='string'|| typeof student.age !=='number'||student.name.trim()===''||student.course.trim()==='') {
        return "Invalid";
    } else {
        const { name, age, course } = student;
        return `My name is ${name}. I am ${age} years old. I am learning ${course}.`
    }
}
const student = {
    name: "Rafi",
    age: -18,
    course: "JavaScript"
}
const student2 = {
    name: "Rafi",
    course: "JavaScript"
}
const student3 = {
    name: "Rafi",
}
const student4 = {
}

const student5 = {
    name: "   ",
    age: 18,
    course: "JavaScript"
}
const student7 = [
    "rafi",18, "JavaScript"
]
const student6 = null;
const student8 = {
    age: 0,
    course: "JavaScript"
}
console.log(studentIntroduction(student));
console.log(studentIntroduction(student2));
console.log(studentIntroduction(student3));
console.log(studentIntroduction(student4));
console.log(studentIntroduction(student5));
console.log(studentIntroduction(student6));
console.log(studentIntroduction(student7));
console.log(studentIntroduction(student8));

