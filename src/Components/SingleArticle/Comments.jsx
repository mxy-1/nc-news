import SingleComment from "./SingleComment";

const Comments = ({ comments }) => {
    return (
        <ul>
            {comments.map(comment => {
                return <SingleComment comment={comment} key={comment.comment_id} />
            })}
        </ul>
    )
}

export default Comments;
