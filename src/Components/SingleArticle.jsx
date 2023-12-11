import { useParams } from "react-router-dom"
import { getArticleComments, getSingleArticle } from "../utils/api";
import { useState } from "react";
import SingleComment from "./SingleComment";

const SingleArticle = () => {
    const [loading, setLoading] = useState(true);
    const [article, setArticle] = useState({});
    const [comments, setComments] = useState([]);

    const { article_id } = useParams()
    const { article_id: id, article_img_url, author, body, comment_count, created_at, title, topic, votes } = article 

    getSingleArticle(article_id)
        .then(({ article }) => {
            setArticle(article)
            setLoading(false)
        })

    getArticleComments(article_id)
        .then(({comments}) => {
            setComments(comments)
        })
        .catch(err => console.log(err))

    return (
        <>
            {loading && <h2>loading...</h2>}
            <div className="single-article">
                <h2>{title}</h2>
                <img id="single-article-img" src={article_img_url} />
                <h3>by {author}</h3>
                <p>{body}</p>
            </div>

            <div className="comments-wrapper">
                {comment_count === 1 ? <h3>{comment_count} Comment</h3> : <h3>{comment_count} Comments</h3>}
                <ul>
                    {comments.map(comment => {
                        return <SingleComment comment={comment} key={comment.comment_id}/>
                    })}
                </ul>
            </div>
        </>
    );
}

export default SingleArticle;