const SingleComment = ({comment}) => {
    const {comment_id, votes, created_at, author, body, article_id} = comment
    return (
        <li className="single-comment">
            <h3>{author}</h3>
            <p>{created_at.slice(0, 10)}</p>
            <p>{body}</p>
        </li>
    );
}
 
export default SingleComment;