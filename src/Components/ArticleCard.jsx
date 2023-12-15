import convertDate from "../utils/date";
import "./ArticleCard.css"

const ArticleCard = ({ article }) => {
    return (
        <li className="article-card">
            <p className="article-votes">{article.votes} {article.votes === 1 ? "vote" : "votes"}</p>
            <img className="article-card-img" src={article.article_img_url}></img>
            <div className="article-wrapper">
                <p className="article-date">{article.topic} | {convertDate(article.created_at)}</p>
                <h2 className="article-card-title">{article.title} <span className="article-author">{article.author}</span></h2> 

                <p className="article-comment">{article.comment_count} {article.comment_count === 1 ? "comment" : "comments"}</p>
            </div>
        </li>

    );
}

export default ArticleCard;