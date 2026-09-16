import Link from "next/link";

export default function Developer({ developer }) {
    const { id, name, role, skills, experience, image } = developer;
    return (
        <div className="card card-side bg-base-100 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>role: {role}</p>
                <p>Experience: {experience}</p>
                <p>Skills:</p>
                {
                    skills.map(skill => <li>{skill}</li>)
                }
                <div className="card-actions justify-end">
                    {
                        <Link href={`/about/developer/${id}`}>
                            <button className="btn btn-primary">More Details</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}