import SingleComment from "./SingleComment";

const Comments = ({ comments, user, setComments }) => {
    return (
        <ul>
            {comments.map((comment, i) => {
                return <SingleComment comment={comment} key={comment.comment_id} setComments={setComments} i={i} comments={comments}/>
            })}
        </ul>
    )
}

export default Comments;
