import { useState } from "react";
import convertDate from "../utils/date";
import { deleteComment } from "../utils/api";

const SingleComment = ({ comment, setComments, i, comments}) => {
    const { comment_id, votes, created_at, author, body, article_id } = comment
    const [user, setUser] = useState("jessjelly")

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
            <p>{author} {convertDate(created_at)}</p>
            <p>{body}</p>
            {user === author && <button onClick={handleClick}>delete</button>}
        </li>

    );
}

export default SingleComment;