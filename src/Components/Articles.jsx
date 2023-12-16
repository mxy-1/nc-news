import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { Link, useNavigate, useParams } from "react-router-dom"

const Articles = ({ articles, setArticles, sort, order }) => {
    const [loading, setLoading] = useState(true)
    const { topic } = useParams()
    const [error, setError] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        getArticles(sort, order, topic)
            .then(({ articles }) => {
                setArticles(articles)
                setLoading(false)
            })
            .catch(err => {
                setError(true)
                setLoading(false)
            })
    }, [topic, sort, order]);

    return (
        <div>
            {loading && <><div className="loader"></div><p className="loading">loading...</p></>}
            <ul>
                {articles.map((article, i) => {
                    return (
                        <div className="articles" key={article.article_id}>
                            <Link className="single-article-link" to={`/articles/${article.article_id}`}>
                                <ArticleCard article={articles[i]} />
                            </Link>
                        </div>
                    )
                })}
            </ul>
            {error && navigate("/*")}
        </div>
    )
}

export default Articles;