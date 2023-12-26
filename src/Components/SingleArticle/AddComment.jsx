import { useContext, useState } from "react";
import { postComment } from "../../utils/api";
import { UserContext } from "../../UserContext";

const AddComment = ({ setPostingComment, article_id, comments, setComments }) => {
    const [inputBody, setInputBody] = useState("");
    const [inputUsername, setInputUsername] = useState("");
    const [error, setError] = useState(false)
    const {user} = useContext(UserContext)
    const [validUser, setValidUser] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputBody.length < 5 || inputBody.length > 500) return setError(true)
        else if (inputUsername !== user.username) return setValidUser(false)

        setPostingComment(true)

        setComments(comments => [{ author: inputUsername, body: inputBody, created_at: (new Date().toISOString()), comment_id: new Date() }, ...comments])

        postComment(article_id, inputUsername, inputBody)
            .then(() => {
                setPostingComment(false)
                setInputBody("")
                setInputUsername("")
                setError(false)
                setValidUser(true)
            })
            .catch(err => {
                setPostingComment(false)
                setError(true)
            })
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" placeholder="username..." value={inputUsername} onChange={e => setInputUsername(e.target.value)} required /><br />
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
            <p>*min 5 characters. {500 - inputBody.length} characters remaining</p>
            {error && <p>could not post comment. please try again</p>}
            {!validUser && <p>username should matched logged in user</p>}
        </div>
    );
}

export default AddComment;