import { useState } from "react";
import {getArticles} from "../utils/api";
import ArticleCard from "./ArticleCard";
import {Link} from "react-router-dom" 

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true)

    getArticles()
        .then(({ articles }) => {
            setArticles(articles)
            setLoading(false)
        })

    return (
        <div>
            {loading && <h2>loading...</h2>}
            <ul>
                {articles.map((article, i) => {
                    return (
                        <div className="articles" key={article.article_id}>
                            <Link to={`/articles/${article.article_id}`}>
                                <ArticleCard article={articles[i]} />
                            </Link>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Articles;