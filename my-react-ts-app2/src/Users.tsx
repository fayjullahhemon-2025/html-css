import UserCard from "./userCard"
interface User{
    name:string,
    isLoggedIn:boolean 
}
const users:User[] = [
    {name:'Emon',isLoggedIn:true},
    {name:'Payel',isLoggedIn:true},
    {name:'Moon',isLoggedIn:false},
    {name:'Nasma',isLoggedIn:true},
    {name:'Sumi',isLoggedIn:false},
]
export default function Users(){
    return (
        <>
            <div >
                {
                    users.map(user=> <UserCard name={user.name}></UserCard>)
                }
            </div>
        </>
    )
}
// export default function Users(){
//     return (
//         <>
//             <div>
//                 {
//                     users.map(user=> <li>{user.name}</li>)
//                 }
//             </div>
//         </>
//     )
// }