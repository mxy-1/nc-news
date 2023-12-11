const ArticleCard = ({ article }) => {
    return (
        <div className="article-card">
            <img src={article.article_img_url}></img>
            <h2 >{article.title}</h2>
            <p>by {article.author}</p>
            <p>{article.topic}</p>
            <p>Votes: {article.votes}</p>
            <p>Comments: {article.comment_count}</p>
        </div>

    );
}

export default ArticleCard;