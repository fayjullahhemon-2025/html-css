import { use } from "react";
import UserCard from "./UserCard";

export default function Users({usersDataPromise}){
    const users = use(usersDataPromise);
    

    return (
        <div>
            <h3>Users:{users.length}</h3>
            {
                users.map(user=> <UserCard user={user}></UserCard> )
            }
        </div>
    )
}

/**
 * 1.Data source || JSON
 * JSON.stringify()
 * JSON.parse()
 * .json()
 * 
 */

// //callback
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=>res.json())
// .then((data)=>{console.log(data)})

// //async await
// async function loadData(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     return data;
// }
// //arrow function

// const loadData2 = async() =>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();

//     return data;
// }