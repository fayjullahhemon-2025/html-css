import { use } from "react";
import CommentCard from "./CommentCard";

interface CommentsProps {
    userCommentsPromise: Promise<any>
}

export default function Comments({ userCommentsPromise }: CommentsProps) {
    let commentInfo = use(userCommentsPromise);
    console.log(commentInfo);
    return (
        <div>
            {
                commentInfo.map((comment: any) => <CommentCard comment={comment} ></CommentCard>)
            }
        </div>
    )
}