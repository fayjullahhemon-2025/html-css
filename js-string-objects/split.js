const companiesStr = "Tesla SpaceX Paypal NeuralLink SolarCity Twitter";

// const companiesArr = companiesStr.split();//[ 'Tesla SpaceX Paypal NeuralLink SolarCity Twitter' ]
// const companiesArr = companiesStr.split('');
// [
//   'T', 'e', 's', 'l', 'a', ' ', 'S', 'p',
//   'a', 'c', 'e', 'X', ' ', 'P', 'a', 'y',
//   'p', 'a', 'l', ' ', 'N', 'e', 'u', 'r',
//   'a', 'l', 'L', 'i', 'n', 'k', ' ', 'S',
//   'o', 'l', 'a', 'r', 'C', 'i', 't', 'y',
//   ' ', 'T', 'w', 'i', 't', 't', 'e', 'r'
// ]
const companiesArr = companiesStr.split(' ');
//[ 'Tesla', 'SpaceX', 'Paypal', 'NeuralLink', 'SolarCity', 'Twitter' ]
const againCompaniesStr = companiesArr.join(' ');
console.log(againCompaniesStr);