export default function UserCard({user}){
    return(
        <div style={{border:'1px solid red',borderRadius:'5px',margin:'5px'}}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p><small>{user.phone}</small></p>
        </div>
    )
}