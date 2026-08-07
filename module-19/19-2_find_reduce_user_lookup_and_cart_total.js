/*
  Problem 1: User Lookup by ID
  findUserById(users, id) — find and return the single user object
  whose id matches. If no user matches,returns "User not found".

  Input:
    users = [
      { id: 1, name: "Rafi" },
      { id: 2, name: "Karim" },
    ]
    id = 2

  Output:
    { id: 2, name: "Karim" }
*/

// const findUserById = (users, id)=> users.find(user=> user.id===id);
const findUserById = (users, id) => {
    let expectedUser = users.find(user => user.id === id);
    return expectedUser ? expectedUser : "User Not found";
};
const users = [
    { id: 1, name: "Rafi" },
    { id: 2, name: "Karim" },
]
// console.log(findUserById(users,2));

/*
  Problem 2: Shopping Cart Total (reduce)
  getCartTotal(cart) — sum price * qty across every item in the cart
  using reduce().

  Input:
    cart = [
      { name: "Pen", price: 20, qty: 3 },
      { name: "Notebook", price: 50, qty: 2 },
    ]

  Output:
    160   (20*3 + 50*2)
*/



// Accumulator -> 0
// Pen -> Accumulator =  0 + (20 * 3) = 60
// Notebook -> Accumulator = 60 + (50 * 2)
// Accumulator -> 160

const getCartTotal = (cart) => {
    let total = cart.reduce((accumulator, currentVal) => {
        return accumulator + (currentVal.price*currentVal.qty);
        // console.log(currentVal.price*currentVal.qty);
    }, 0);
    // console.log(total);
    return total;
}
const cart = [
    { name: "Pen", price: 20, qty: 3 },
    { name: "Notebook", price: 50, qty: 2 },
];

console.log(getCartTotal(cart));