const ArticleCard = ({ article }) => {
    return (
        <div className="article-card">
            <p className="article-date">{article.topic} | {article.created_at.slice(0, 10)}</p>
            <img className="article-card-img" src={article.article_img_url}></img>
            <h2 className="article-card-title">{article.title} </h2>
            <p className="article-author">{article.author}</p>
            {/* <p>{article.topic}</p> */}
            <p>{article.votes} {article.votes === 1 ? "vote" : "votes"}</p>
            <p>{article.comment_count} {article.comment_count === 1 ? "comment" : "comments"}</p>
        </div>

    );
}

export default ArticleCard;