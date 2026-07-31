// 2. Take a string with extra leading/trailing spaces and mixed casing, and use trim() and toLowerCase() to clean it up, then
// print the cleaned result.
const str = "    Hello     ";
console.log(str.trimStart().trimEnd().toUpperCase());