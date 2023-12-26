import { useContext } from "react";
import { deleteComment } from "../../utils/api";
import convertDate from "../../utils/date";
import { UserContext } from "../../UserContext";
import up from "../../assets/up-arrow.png"
import down from "../../assets/down-arrow.png"
import "./SingleComment.css"

const SingleComment = ({ comment, setComments, i, comments }) => {
    const { comment_id, votes, created_at, author, body, article_id } = comment
    const { user } = useContext(UserContext)

    const updatedComments = [...comments]
    const deletedComment = updatedComments.splice(i, 1)

    const handleClick = () => {
        setComments(updatedComments)
        deleteComment(comment_id)
            .catch((err) => {
                setComments((comments) => [deletedComment, ...comments])
            })
    }

    return (
        <li className="single-comment">
            <div className="votes-wrapper-comment">
                <img src={up} alt="up arrow" className="vote-button-comment" />
                <p className="votes-comment">{votes}</p>
                <img src={down} alt="down arrow" className="vote-button-comment" />
            </div>
            <div className="comment-body-wrapper">
            <p className="comment-author"><strong>{author}</strong><em>{convertDate(created_at)}</em></p>
                <p className="comment-body">{body}</p>
                {user.username === author && <button onClick={handleClick}>delete</button>}
            </div>
        </li>
    );
}

export default SingleComment;