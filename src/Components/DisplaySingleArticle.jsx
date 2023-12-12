import { useState } from "react";
import { patchArticleVotes } from "../utils/api";

const DisplaySingleArticle = ({ article_id, article, setArticleVotes, articleVotes }) => {

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
        <>
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
        </>

    );
}

export default DisplaySingleArticle;