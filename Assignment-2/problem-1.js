// Problem 1 — Match Winner
function matchWinner(teamAGoals, teamBGoals) {
  if(typeof teamAGoals === 'number' && typeof teamBGoals === 'number' && teamAGoals >=0 && teamBGoals >= 0 && teamAGoals%1===0 && teamBGoals%1===0){
    /**  check kortese parameter number kina, number 0 theke boro kina, number ki integer kina. cz goal number kokhono fraction hobe na.*/
        if(teamAGoals>teamBGoals){
            return "Team A Won";
        }else if(teamAGoals<teamBGoals){
            return "Team B Won";
        }else{
            return "Draw";
        }
  }else{
    return "Invalid";
  }
}
// Sample Test Cases
console.log(matchWinner(2, 1)); // Output: Team A Won
console.log(matchWinner(1, 3)); // Output: Team B Won
console.log(matchWinner(2, 2)); // Output: Draw
console.log(matchWinner("3", 2)); // Output: Invalid

// Hidden & Edge Test Cases
console.log(matchWinner(NaN, 2)); // Output: Invalid (NaN is typeof 'number' but invalid goal)
console.log(matchWinner(Infinity, 1)); // Output: Invalid (Infinity is not a valid score)
console.log(matchWinner(1.5, 2)); // Output: Invalid (Goals must be integers)
console.log(matchWinner(-1, 2)); // Output: Invalid (Goals cannot be negative)
console.log(matchWinner(undefined, 2)); // Output: Invalid
console.log(matchWinner(null, 0)); // Output: Invalid (null coerces to 0 in math, needs strict check)
// console.log("Team A: 2, Team B: 1",matchWinner(2,1));
// console.log("Team A: 1, Team B: 3",matchWinner(1,3));
// console.log("Team A: 2, Team B: 2",matchWinner(2,2));
// console.log("Team A: 0, Team B: 0",matchWinner(0,0));
// console.log("Team A: -0, Team B: 0",matchWinner(-0,0));
// console.log("Team A: 2.5, Team B: 2",matchWinner(2.5,2));
// console.log("Team A: '3', Team B: 2",matchWinner("3",2));
// console.log("Team A: [3,2], Team B: undefined",matchWinner([3,2],undefined));
// console.log("Team A: false, Team B: false",matchWinner(true,false));
// console.log("Team A: undefined, Team B: undefined",matchWinner(undefined,undefined));
// console.log("Team A: NaN, Team B: NaN",matchWinner(NaN,NaN));
// console.log("Team A: null, Team B: null",matchWinner(null,null));
// console.log("Team A: {a:3}, Team B: {b:2}",matchWinner({a:3},{b:2}));
// console.log("Team A: -3, Team B: 2",matchWinner(-3,2));
// console.log("Team A: -3, Team B: ",matchWinner(3));
// console.log("Team A: Infinity, Team B: 12",matchWinner(Infinity,12));
// console.log("Team A: -Infinity, Team B: 12",matchWinner(-Infinity,12));
// console.log("Team A: 23421435435n, Team B: 12",matchWinner(23421435435n,12));
