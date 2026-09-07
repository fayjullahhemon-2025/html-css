export default function PostInfo({post}){
    return(
        <div style={{border:'1px solid red',borderRadius:'5px',margin:'5px'}}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}