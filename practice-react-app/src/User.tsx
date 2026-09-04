import UserCard from './UserCard'

interface UserPropTypes{
    name:string,
    isLoggedIn:boolean 
}
const user:UserPropTypes[] = [
    {name: "Emon", isLoggedIn: true},
    {name: "Payel", isLoggedIn: false},
    {name: "Moon", isLoggedIn: true},
]
export default function User(){
    return (
        <>  
            <div>
                {
                    user.map(u => <UserCard name = {u.name}></UserCard> )
                }
            </div>
        </>
    )
}
// export default function User(){
//     return (
//         <>  
//             <div>
//                 {
//                     user.map(u => {
//                         if(u.isLoggedIn === true){
//                             return <li> {u.name} </li>
//                         }
//                     } )
//                 }
//             </div>
//         </>
//     )
// }