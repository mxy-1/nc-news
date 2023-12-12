import { useState } from "react";
import { postComment } from "../utils/api";

const AddComment = ({ setPostingComment, article_id, comments, setComments }) => {
    const [inputBody, setInputBody] = useState("");
    const [inputUsername, setInputUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputBody.length < 5) return alert("comment should be at least 5 characters")
        setPostingComment(true)

        setComments(comments => [{ author: inputUsername, body: inputBody, created_at: (new Date().toISOString()), comment_id: new Date() }, ...comments])

        postComment(article_id, inputUsername, inputBody)
            .then(() => {
                setPostingComment(false)
                setInputBody("")
                setInputUsername("")
            })
            .catch(err => {
                setPostingComment(false)
                alert("an error occurred. please check username is valid.")
            })
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input type="text" placeholder="username..." value={inputUsername} onChange={e => setInputUsername(e.target.value)} required /><br />
            <textarea
                name="comment"
                id="comment"
                cols="50"
                rows="4"
                placeholder="comment..."
                value={inputBody}
                onChange={e => setInputBody(e.target.value)} required >
            </textarea><br />
            <input type="submit" value="add comment" />
        </form>
    );
}

export default AddComment;