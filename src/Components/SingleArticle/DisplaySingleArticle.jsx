import { useContext, useState } from "react";
import { patchArticleVotes } from "../../utils/api";
import "./DisplaySingleArticle.css"
import { Link, useNavigate } from "react-router-dom";
import up from "../../assets/up-arrow.png"
import down from "../../assets/down-arrow.png"
import { UserContext } from "../../UserContext";

const DisplaySingleArticle = ({ article_id, article, setArticleVotes, articleVotes, errorMessage }) => {
    const {user} = useContext(UserContext)
    
    const { article_id: id, article_img_url, author, body, comment_count, created_at, title, topic, votes } = article

    const [voteError, setVoteError] = useState(null);

    const navigate = useNavigate()

    const handleClickUp = () => {
        if (user) {
            setArticleVotes(articleVotes => articleVotes + 1)
            patchArticleVotes(article_id, 1)
                .then(() => setVoteError(null))
                .catch((err) => {
                    setArticleVotes(articleVotes => articleVotes - 1)
                    setVoteError("something went wrong, please try again")
                })
        } else {
            navigate("/login")
        }
    }

    const handleClickDown = () => {
        if (user) {
            setArticleVotes(articleVotes => articleVotes - 1)
            patchArticleVotes(article_id, -1)
                .then(() => setVoteError(null))
                .catch((err) => {
                    setArticleVotes(articleVotes => articleVotes + 1)
                    setVoteError("something went wrong, please try again")
                })
        } else {
            navigate("/login")
        }    
    }

    return (
        <div className="single-article-container">
            <div className="votes-wrapper">
                {voteError && <p>{voteError}</p>}
                {!errorMessage && <img src={up} alt="up arrow" className="vote-button" onClick={handleClickUp}/>}
                <p className="article-votes" id="single-article-votes"> {articleVotes} votes</p>
                {!errorMessage && 
                <img src={down} alt="down arrow" className="vote-button" onClick={handleClickDown}/>}
            </div>
            <div>
                <Link className="topic-link" to={`/articles/topics/${topic}`}>
                    <p className="single-topic">{topic}</p>
                </Link>
                <h2 className="single-title">{title}</h2>
                <img id="single-article-img" src={article_img_url} />
                <h3 className="single-author">by {author}</h3>
                <p className="article-body">{body}</p>
            </div>
        </div>

    );
}

export default DisplaySingleArticle;