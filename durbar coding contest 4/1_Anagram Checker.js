function isAnagram(s1, s2) {
    s1 = s1.replace(/[^a-zA-Z]/g, "").toLowerCase().split('');
    s2 = s2.replace(/[^a-zA-Z]/g, "").toLowerCase().split('');
    let sortedS1 = s1.sort();
    let sortedS2 = s2.sort();
    return sortedS1.join('') === sortedS2.join('')
    // return [sortedS1,sortedS2]
}
// console.log(isAnagram(`Hello, I am Emon`,`I Emon am , Hello`));
// console.log(isAnagram("listen", "silent"));
console.log(isAnagram("Hello", "world"));
console.log(isAnagram("listen", "silent"));