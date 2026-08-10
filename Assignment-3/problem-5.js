function generateLeaderboard(students) {
    if (!Array.isArray(students)) {//fixed
        return "Invalid";
    }

    if (students.length ===0) {//fixed
        return "Invalid";
    }
    let qualified;
    if(students.some(student=>!student.hasOwnProperty('name')||!student.hasOwnProperty('score')|| typeof student.score!=='number'  || Number.isNaN(student.score)|| student.score===Infinity || student.score===-Infinity||typeof student.name!=='string'||!student.name ||!student.score )){
        return "Invalid";//fixed 9 cases
    }else{
        qualified = students.filter(student =>student.score >= 70);//fixed
    }

    const names = qualified.map(({ name }) => {
        return name.toUpperCase();//fixed
    });

    return names.slice(0, names.length);//fixed
}
console.log(generateLeaderboard([{name:"Rafi",score:90},{name:"Nafis",score:75},{name:"Karim",score:85},{name:"Sadia",score:65}]))
console.log(generateLeaderboard([{name:"A",score:70},{name:"B",score:71}]))
console.log(generateLeaderboard([]))
console.log(generateLeaderboard("students"))
console.log(generateLeaderboard([{name:"Rafi"}]))
console.log(generateLeaderboard([{score:90}]))
console.log(generateLeaderboard([{name:"Rafi",score:"90"}]))
console.log(generateLeaderboard([{name:undefined,score:90}]))
console.log(generateLeaderboard([{name:null,score:90}]))
console.log(generateLeaderboard([{name:"Rafi",score:NaN}]))
console.log(generateLeaderboard([{name:"Rafi",score:Infinity}]))
console.log(generateLeaderboard([{name:"Rafi",score:-Infinity}]))
console.log(generateLeaderboard([{name:'',score:95}]))
console.log(generateLeaderboard([{name:" ",score:95}]))
console.log(generateLeaderboard([{name:Infinity,score:95}]))
console.log(generateLeaderboard([{name:NaN,score:955}]))
console.log(generateLeaderboard([{name:NaN,score:95}]))
console.log(generateLeaderboard([{name:" ",score:95}]))