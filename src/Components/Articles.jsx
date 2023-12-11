import { useState } from "react";
import getArticles from "../utils/api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
    const [articles, setArticles] = useState([]);

    getArticles()
        .then(({ articles }) => {
            setArticles(articles)
        })

    return (
        <ul>
            {articles.map((article, i) => {
                return (
                <div className="articles" key={article.article_id}>
                    <ArticleCard article={articles[i]} />
                </div>
                )
            })}
        </ul>
    )
}

export default Articles;