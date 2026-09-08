export default function CommentCard({comment}){
    return(
        <div>
            <h3>Name: {comment.name}</h3>
            <p>Email: {comment.email}</p>
            <div>
                <p>{comment.body}</p>
            </div>
        </div>
    )
}