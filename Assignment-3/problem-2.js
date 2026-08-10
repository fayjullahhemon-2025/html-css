function filterActiveUsers(users) {
    if(!Array.isArray(users) || users.length===0){
        return "Invalid";
    }else{
        if(users.some((user)=> !user.hasOwnProperty('isActive')||typeof user.isActive!=='boolean'|| typeof user.name!=='string' )){
            return "Invalid";
        }else{
            return users.filter(user=> user.isActive)
        }
         
    }
}
// console.log(filterActiveUsers([
//  {name:"A", isActive:true},
//  {name:"B", isActive:false}
// ]
// ))
// Return "Invalid"
// Input Array না হলে
// Empty Array হলে
// Object-এ isActive property না থাকলে

console.log(filterActiveUsers([
 {name:"A", isActive:true},
 {name:"B", },
 {name:"C", isActive:false},
 {name:"D", isActive:true},
 {name:"E", isActive:false},
]
));
console.log(filterActiveUsers([
 {name:"A", isActive:true},
 {name:"B", isActive:true},
 {name:"C", isActive:false},
 {name:"D", isActive:true},
 {name:"E", isActive:false},
]
))
console.log(filterActiveUsers([
 {name:"18", isActive:true},
 {name:"B", isActive:true},
 {name:"C", isActive:false},
 {name:"D", isActive:true},
 {name:"E", isActive:false},
]
))
