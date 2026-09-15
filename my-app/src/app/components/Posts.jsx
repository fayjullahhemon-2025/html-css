export default function Posts({ post }) {
    const {title} = post;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h2 className="text-sm">{post.author}</h2>
                <p>{post.content}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Read Full Article</button>
                </div>
            </div>
        </div>
    )
}