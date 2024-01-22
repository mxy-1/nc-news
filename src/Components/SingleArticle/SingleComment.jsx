import { useContext, useState } from "react";
import { deleteComment, patchCommentVotes } from "../../utils/api";
import convertDate from "../../utils/date";
import { UserContext } from "../../UserContext";
import up from "../../assets/up-arrow.png"
import down from "../../assets/down-arrow.png"
import "./SingleComment.css"
import { useNavigate } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";

const SingleComment = ({ comment, setComments, i, comments }) => {
    const { comment_id, votes, created_at, author, body, article_id } = comment
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    const [commentVotes, setCommentVotes] = useState(votes);
    const [voteError, setVoteError] = useState(null);

    const updatedComments = [...comments]
    const deletedComment = updatedComments.splice(i, 1)

    const handleClick = () => {
        setComments(updatedComments)
        deleteComment(comment_id)
            .catch((err) => {
                setComments((comments) => [deletedComment, ...comments])
            })
    }

    const handleUpClick = () => {
        if (user) {
            setCommentVotes(commentVotes => commentVotes + 1)
            patchCommentVotes(comment_id, 1)
                .then(() => setVoteError(null))
                .catch(err => {
                    setCommentVotes(commentVotes => commentVotes - 1)
                    setVoteError("something went wrong. please try again")
                })
        }
        else {
            navigate("/login")
        }
    }

    const handleDownClick = () => {
        if (user) {
            setCommentVotes(commentVotes => commentVotes - 1)
            patchCommentVotes(comment_id, -1)
                .then(() => setVoteError(null))
                .catch(err => {
                    setCommentVotes(commentVotes => commentVotes + 1)
                    setVoteError("something went wrong. please try again")
                })
        }
        else {
            navigate("/login")
        }
    }

    return (
        <li className="single-comment">
            <div className="votes-wrapper-comment">
                <img src={up} alt="up arrow" className="vote-button-comment" onClick={handleUpClick} />
                <p className="votes-comment">{commentVotes}</p>
                <img src={down} alt="down arrow" className="vote-button-comment" onClick={handleDownClick}/>
            </div>
            <div className="comment-body-wrapper">
                <p className="comment-author"><strong>{author}</strong><em>{convertDate(created_at)}</em></p>
                <p className="comment-body">{body}</p>
                {voteError && <p>{voteError}</p>}
                {user.username === author && <div className="delete-wrapper"><button className="delete" onClick={handleClick}><RiDeleteBinLine size="14px" id="delete-icon"/>delete</button></div>}
            </div>
        </li>
    );
}

export default SingleComment;