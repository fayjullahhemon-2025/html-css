import Link from "next/link";

export default function Designer({designer}) {
    const {id,name,role,skills,experience,image,description} = designer;
    return (
        <div className="card bg-base-100 w-96 shadow-sm pt-5">
            <figure>
                <img className="rounded-2xl"
                    src={image}
                    alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Role: {role}</p>
                <p>Experience: {experience}</p>
                {
                    skills.map(skill=><li>{skill}</li>)
                }
                <div className="card-actions justify-end">
                    <Link href={`/about/designer/${id}`}>
                        <button className="btn btn-primary">More Details</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}