// // A-09  —  Email Domain Analyzer (done)         🟡 Medium
// // Concepts Used:  String · Split · Loop · Object 
// // Scenario:  MailBox Pro, an email management system, wants to analyze a sentence containing email addresses. Write a function analyzeEmailDomains(text) that returns an object containing the total number of email addresses and the longest email domain (the part after @).
// // "Invalid" if the input is not a string.
// // Expected Output:
// //    analyzeEmailDomains("Contact support@gmail.com admin@yahoo.com info@programminghero.com") 
// // → { emailCount: 3, longestDomain: "programminghero.com" } 

// // analyzeEmailDomains("Hello everyone!") 
// //       → { emailCount: 0, longestDomain: "" }

// // Hints:
// //   1.  Use split(" ") to separate the sentence into words. 
// //   2.  Check whether a word contains "@" using includes("@"), then split("@") to extract the domain and compare its length. 

// // Write your code here:

// function analyzeEmailDomains(text) {
//     if (text.includes('@')) {
//         const splitText = text.split(' ');
//         let count = 0;
//         let domain = [];
//         for(const word of splitText){
//             if(word.includes('@')){
//                 count++;
//                 domain.push(word.split('@'));
//             }
//         }
//         console.log(domain);

//     }
//     else{
//         return { emailCount: 0, longestDomain: "" };
//     }
// }

// console.log(analyzeEmailDomains("Contact support@gmail.com admin@yahoo.com info@programminghero.com"));
//  console.log(analyzeEmailDomains("Hello world!"));






