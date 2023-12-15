import { useState } from "react";
import { patchArticleVotes } from "../../utils/api";
import "./DisplaySingleArticle.css"

const DisplaySingleArticle = ({ article_id, article, setArticleVotes, articleVotes, errorMessage }) => {

    const { article_id: id, article_img_url, author, body, comment_count, created_at, title, topic, votes } = article

    const [voteError, setVoteError] = useState(null);

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

    return (
        <div className="single-article-container">
            <div className="votes-wrapper">
                {voteError && <p>{voteError}</p>}
                {!errorMessage && <button onClick={handleClickUp}>⇧</button>}
                <p className="article-votes">{articleVotes} votes</p>
                {!errorMessage && <button onClick={handleClickDown}>⇩</button>}
            </div>
            <div>
                <h2 className="single-title">{title}</h2>
                <img id="single-article-img" src={article_img_url} />
                <h3 className="single-author">by {author}</h3>
                <p className="article-body">{body}</p>
            </div>
        </div>

    );
}

export default DisplaySingleArticle;