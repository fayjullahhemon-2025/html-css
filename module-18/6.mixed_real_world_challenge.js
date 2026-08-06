/*
  Problem 1: Add Grade to Each Student (Without Changing Original)
  
  You have an array of student objects, each with name and marks.
  Create a NEW array where every student also has a "grade" field,
  based on their marks. The ORIGINAL array must stay exactly the same.

  Grading rule:
    marks >= 90 -> "A+"
    marks >= 80 -> "A"
    marks >= 60 -> "B"
    below 60    -> "Fail"

  Input:
    [
      { name: "Rafi", marks: 85 },
      { name: "Karim", marks: 45 }
    ]

  Output (new array):
    [
      { name: "Rafi", marks: 85, grade: "A" },
      { name: "Karim", marks: 45, grade: "Fail" }
    ]

  Original array must remain untouched (no "grade" field added to it).
*/

// const gradeSheet = (students) => {
//     // const gradeList = [...students]; // array of object er sudhu array er shallow copy hoise, object er na. tai object change hole main object o change hoye jabe.
//     const gradeList = structuredClone(students);//structuredClone() function array of object er array and object duita kei deep copy kre. ete main object er kno changes ashe na 
//     gradeList.filter(record => {
//         if (record.marks >= 90) {
//             record.grade = "A+";
//         } else if (record.marks >= 80) {
//             record.grade = "A";
//         } else if (record.marks >= 60) {
//             record.grade = "B";
//         } else {
//             record.grade = "Fail";
//         }
//     })
//     return gradeList;
// }
// const students = [
//     { name: "Rafi", marks: 85 },
//     { name: "Karim", marks: 45 }
// ];
// console.log(gradeSheet(students));
// console.log(students);
const students = [
    { name: "Rafi", marks: 85 },
    { name: "Karim", marks: 45 }
];

const addGrade = (students => {
    const grade = (marks) => {
        if (marks >= 90) {
            return "A+";
        } else if (marks >= 80) {
            return "A";
        } else if (marks >= 60) {
            return "B";
        } else {
            return "Fail";
        }
    };
    const newModifiedStudent = students.map((student) => {
        return {
            name: student.name,
            marks: student.marks,
            grade: grade(student.marks)
        }
    });
    return newModifiedStudent;
});
console.log(addGrade(students));
console.log(students);

/*
  Problem 2: Cart Total Calculator
  
  You have an array of cart items, each with a name, price, and qty
  (quantity). Calculate:
    1. Total number of items in the cart (sum of all qty)
    2. Total cost (sum of price x qty for each item)

  Then print one final message using a template string:
    "Total: X items, Y Taka"

  Input:
    [
      { name: "Pen", price: 100, qty: 1 },
      { name: "Notebook", price: 100, qty: 2 }
    ]

  Output:
    "Total: 3 items, 300 Taka"

  Bonus: if the cart is missing (null/undefined), don't crash —
  print "Total: 0 items, 0 Taka" instead.
*/

const cartTotalCalculator = (products) => {
   
        const totalQty = products.reduce((accumulator, currentValue) => { if(currentValue.name && currentValue.price && currentValue.qty){
            return accumulator + currentValue.qty
        }else{
            return 0;
        } }, 0);
        const totalPrice = products.reduce((accumulator, currentValue) => { if(currentValue.name && currentValue.price && currentValue.qty){return accumulator + currentValue.price * currentValue.qty }else{return 0}}, 0);
        console.log(`Total: ${totalQty} items, ${totalPrice} Taka`);
   

};
cartTotalCalculator([
    { name: "Pen", price: 100, qty: 1 },
    { name: "Notebook", price: 100, qty: 2 }
]);
cartTotalCalculator([
    { name:undefined, price: null, qty: 1 },
    { name: "Notebook", price: 100, qty: null }
]);

