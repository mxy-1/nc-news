import { useParams } from "react-router-dom"
import { getArticleComments, getSingleArticle, patchArticleVotes, postComment } from "../utils/api";
import { useEffect, useState } from "react";
import SingleComment from "./SingleComment";

const SingleArticle = () => {
    const [loadingArticle, setLoadingArticle] = useState(true);
    const [article, setArticle] = useState({});
    const [comments, setComments] = useState([]);
    const [loadingComments, setLoadingComments] = useState(true);
    const [postingComment, setPostingComment] = useState(false);

    const [articleVotes, setArticleVotes] = useState(null);
    const [voteError, setVoteError] = useState(null);

    const [inputBody, setInputBody] = useState("");
    const [inputUsername, setInputUsername] = useState("");

    const { article_id } = useParams()
    const { article_id: id, article_img_url, author, body, comment_count, created_at, title, topic, votes } = article

    useEffect(() => {
        getSingleArticle(article_id)
            .then(({ article }) => {
                setArticle(article)
                setLoadingArticle(false)
                setArticleVotes(article.votes)
            })
    }, [comments]);

    useEffect(() => {
        getArticleComments(article_id)
            .then(({ comments }) => {
                setComments(comments)
                setLoadingComments(false)
            })
            .catch(err => console.log(err))
    }, [comments]);

    const handleClickUp = () => {
        setArticleVotes(articleVotes => articleVotes + 1)
        patchArticleVotes(article_id, 1)
            .then(() => setVoteError(null))
            .catch((err) => {
                setArticleVotes(articleVotes => articleVotes - 1)
                setVoteError("something went wrong, please try again")
            })
    }

    const handleClickDown = () => {
        setArticleVotes(articleVotes => articleVotes - 1)
        patchArticleVotes(article_id, -1)
            .then(() => setVoteError(null))
            .catch((err) => {
                setArticleVotes(articleVotes => articleVotes + 1)
                setVoteError("something went wrong, please try again")
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setPostingComment(true)
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
        <>
            <div className="single-article">
                {loadingArticle && <h2>loading article...</h2>}
                <h2 className="single-title">{title}</h2>
                <img id="single-article-img" src={article_img_url} />
                <h3 className="single-author">by {author}</h3>
                <p className="article-body">{body}</p>
                <div>
                    {voteError && <p>{voteError}</p>}
                    <button onClick={handleClickUp}>⇧</button>
                    <p className="article-votes">{articleVotes} votes</p>
                    <button onClick={handleClickDown}>⇩</button>
                </div>
            </div>

            <div className="comments-wrapper">
                {comment_count === 1 ? <h3>{comment_count} Comment</h3> : <h3>{comment_count} Comments</h3>}
                {loadingComments && <h2>loading comments...</h2>}

                <form onSubmit={e => handleSubmit(e)}>
                    <input type="text" placeholder="username..." value={inputUsername} onChange={e => setInputUsername(e.target.value)} required /><br />
                    <textarea name="comment" id="comment" cols="50" rows="4" placeholder="comment..." value={inputBody} onChange={e => setInputBody(e.target.value)} required></textarea><br />
                    <input type="submit" value="add comment" />
                </form>
                {postingComment && <p>posting comment...</p>}
                <ul>
                    {comments.map(comment => {
                        return <SingleComment comment={comment} key={comment.comment_id} />
                    })}
                </ul>
            </div>
        </>
    );
}

export default SingleArticle;