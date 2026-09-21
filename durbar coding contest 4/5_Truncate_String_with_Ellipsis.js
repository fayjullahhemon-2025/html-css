function truncateString(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    }

    if (maxLength <= 3) {
        return "...";
    }

    return str.slice(0, maxLength - 3) + "...";
}
console.log(truncateString("Hello world, this is a long string", 10));
// Hello w...

console.log(truncateString("Short text", 15));
// Short text

console.log(truncateString("Hello", 3));
// ...

console.log(truncateString("Hello", 2));
// ...

console.log(truncateString("Hello", 5));
// Hello

console.log(truncateString("", 0));
// ""