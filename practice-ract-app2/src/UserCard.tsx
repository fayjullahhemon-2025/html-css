import User from './User'

export default function UserCard({name,isLoggedIn}:{name:string,isLoggedIn:boolean}){
    if(isLoggedIn){
        return <li>Name: {name}</li>
    }
}