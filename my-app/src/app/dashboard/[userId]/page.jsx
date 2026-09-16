export default async function userDetail({params}){
    const {userId} = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();
    console.log(user);
    return(
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
        </div>
    )
}