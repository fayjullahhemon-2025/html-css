//index
const players = ["abul","babul","cabul","dabul","kabul"];
console.log(players.length);
// zero based index
const player1 = players[0];//abul
console.log(player1);//abul
const player5 = players[4];
console.log(player5);
console.log(players[5]);//undefined
players[1] = 'ebul';
console.log(players);