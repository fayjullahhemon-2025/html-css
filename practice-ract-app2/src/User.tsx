import UserCard from './UserCard'
interface UserTypes{
    name:string,
    isLoggedIn:boolean 
}
const user:UserTypes[]= [
    {name:"Emon",isLoggedIn:true},
    {name:"Payel",isLoggedIn:false},
    {name:"Moon",isLoggedIn:true},
    {name:"Nasima",isLoggedIn:false},
]
export default function User(){

    return (
        <>
            <div>
                {
                    user.map(u=> 
                        <UserCard name = {u.name} isLoggedIn = {u.isLoggedIn}></UserCard>
                    )
                }
            </div>
        </>
    )
}