const ArticleCard = ({ article }) => {
    return (
        <div className="article-card">
            <img src={article.article_img_url}></img>
            <h2 >{article.title}</h2>
            <p>by {article.author}</p>
            <p>{article.topic}</p>
            <p>{article.votes} {article.votes === 1 ? "vote" : "votes"}</p>
            <p>{article.comment_count} {article.comment_count === 1? "comment" : "comments"}</p>
            <p>{article.created_at.slice(0, 10)}</p>
        </div>

    );
}

export default ArticleCard;