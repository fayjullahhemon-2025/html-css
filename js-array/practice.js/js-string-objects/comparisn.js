const subject = 'chemistry';
const book = 'CHeMisTry';

// console.log(book.toLowerCase());
// if(subject.toLowerCase() === book.toLowerCase()){
//     console.log('Poira poira fataye felbo...');
// }
// else{
//     console.log('Aibar ki auto pass ase?');
// }
const emailUserProvided = ' goni@Gmail.com ';
const emailSavedInDatabase = 'goni@gmail.com';
console.log(emailUserProvided.trim());
console.log('###',emailUserProvided.trimStart(),'###');
console.log('###',emailUserProvided.trimEnd(),'###');
console.log('###',emailUserProvided.trimStart().trimEnd(),'###');

if (emailUserProvided.toLowerCase().trimStart().trimEnd() === emailSavedInDatabase.toLowerCase().trim()) {
    console.log('Welcome to the website');
}