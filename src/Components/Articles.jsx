import { useEffect, useState } from "react";
import {getArticles} from "../utils/api";
import ArticleCard from "./ArticleCard";
import {Link} from "react-router-dom" 

const Articles = ({articles, setArticles}) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getArticles()
        .then(({ articles }) => {
            setArticles(articles)
            setLoading(false)
        })
    }, []);
    

    return (
        <div>
            {loading && <h2>loading...</h2>}
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
        </div>
    )
}

export default Articles;