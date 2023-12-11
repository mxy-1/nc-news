import { useParams } from "react-router-dom"
import { getSingleArticle } from "../utils/api";
import { useState } from "react";

const SingleArticle = () => {
    const [loading, setLoading] = useState(true);

    const { article_id } = useParams()
    const [article, setArticle] = useState({});
    const { article_id: id, article_img_url, author, body, comment_count, created_at, title, topic, votes } = article

    getSingleArticle(article_id)
        .then(({ article }) => {
            setArticle(article)
            setLoading(false)
        })

    return (
        <>
            {loading && <h2>loading...</h2>}
            <div className="single-article">
                <h2>{title}</h2>
                <img id="single-article-img" src={article_img_url} />
                <h3>by {author}</h3>
                <p>{body}</p>
            </div>
        </>
    );
}

export default SingleArticle;