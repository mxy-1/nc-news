import convertDate from "../utils/date";

const SingleComment = ({comment}) => {
    const {comment_id, votes, created_at, author, body, article_id} = comment
    return (
        <li className="single-comment">
            <p>{author} {convertDate(created_at)}</p>
            <p>{body}</p>
        </li>
    );
}
 
export default SingleComment;