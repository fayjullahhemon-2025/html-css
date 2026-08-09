// Task 8: applyBonusPoints(users, bonus) — Pass by Reference vs Value 
// Return a NEW array of users with points increased by bonus, without mutating the original array or its objects.
// Input: users = [{ name: "Rafi", points: 20 }], bonus = 5 
// Output: [{ name: "Rafi", points: 25 }]
//  (original array's object must still have points: 20)

const applyBonusPoints = (users,bonus)=>{
    const structuredClonedUsersArr = structuredClone(users);
    const newArr = structuredClonedUsersArr.map(user=>{
        return {...user,points:bonus};
    });
    return newArr;
}
const users = [
    { name: "Rafi", points: 20 },
    { name: "Sagor", points: 25 },
    { name: "Infti", points: 26 }
]
console.log(applyBonusPoints(users,30));
console.log(users);