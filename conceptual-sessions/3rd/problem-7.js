// 7. Given an object representing a book, use Object.keys() and Object.values() to print all of its property names and values
// separately.

const book = {
    title: "Gobore PoddoFul",
    writer: "Haga mathay selim",
    ISBN:676767
}
console.log(Object.keys(book));
console.log(Object.values(book));
console.log(Object.entries(book).join(','));