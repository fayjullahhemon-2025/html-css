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
export default function User(user:UserTypes){
    return (
        <>
            <li>Name: {user.name}</li>
        </>
    )
}