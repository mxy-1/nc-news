import { useContext, useState } from "react";
import { postComment } from "../../utils/api";
import { UserContext } from "../../UserContext";

const AddComment = ({ setPostingComment, article_id, comments, setComments }) => {
    const [inputBody, setInputBody] = useState("");
    const [error, setError] = useState(false)
    const {user} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputBody.length < 5 || inputBody.length > 500) return setError(true)
         
        setPostingComment(true)

        setComments(comments => [{ author: user.username, body: inputBody, created_at: (new Date().toISOString()), comment_id: new Date() }, ...comments])

        postComment(article_id, user.username, inputBody)
            .then(() => {
                setPostingComment(false)
                setInputBody("")
                setError(false)
            })
            .catch(err => {
                setPostingComment(false)
                setError(true)
            })
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <textarea
                    name="comment"
                    id="comment"
                    cols="46"
                    rows="4"
                    placeholder="comment..."
                    value={inputBody}
                    onChange={e => setInputBody(e.target.value)} required >
                </textarea><br />
                <input type="submit" value="add comment" />
            </form>
            <p className="error">*min 5 characters. {500 - inputBody.length} characters remaining.</p>
            {!user && <p className="error" >**user must be logged in to post a comment.</p>}
            {error && <p className="error" >could not post comment. please try again.</p>}
        </div>
    );
}

export default AddComment;