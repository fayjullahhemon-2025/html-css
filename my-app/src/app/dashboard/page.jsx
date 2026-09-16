import Link from "next/link";

export default async function Dashboard() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    console.log(users)
    return (
        <div className='grid grid-cols-3' >
            {
                users.map(user => <div key={user.id} className="card card-border bg-base-100 gap-2 m-2">
                    <div className="card-body">
                        <h2 className="card-title">{user.name}</h2>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                        <p>{user.website}</p>
                        <div className="card-actions justify-end">
                            {
                                <Link href={`/dashboard/${user.id}`} >
                                    <button className="btn btn-primary">More</button>
                                </Link>
                            }
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}