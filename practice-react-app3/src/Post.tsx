import { use } from "react"
import PostInfo from "./PostInfo"

export default function Post({userPostPromise}){
    const posts = use(userPostPromise)
    return (
        <div>
            {
                posts.map(post=> <PostInfo post={post}></PostInfo>)
            }
        </div>
    )
}