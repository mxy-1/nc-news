import { useParams } from "react-router-dom"
import { getArticleComments, getSingleArticle } from "../utils/api";
import { useEffect, useState } from "react";
import SingleComment from "./SingleComment";

const SingleArticle = () => {
    const [loadingArticle, setLoadingArticle] = useState(true);
    const [article, setArticle] = useState({});
    const [comments, setComments] = useState([]);
    const [loadingComments, setLoadingComments] = useState(true);

    const { article_id } = useParams()
    const { article_id: id, article_img_url, author, body, comment_count, created_at, title, topic, votes } = article 

    useEffect(() => {
        getSingleArticle(article_id)
        .then(({ article }) => {
            setArticle(article)
            setLoadingArticle(false)
        })
    }, []);
    
    useEffect(() => {
        getArticleComments(article_id)
        .then(({comments}) => {
            setComments(comments)
            setLoadingComments(false)
        })
        .catch(err => console.log(err))
    }, []);

    

    return (
        <>
            <div className="single-article">
            {loadingArticle && <h2>loading article...</h2>}
                <h2 className="single-title">{title}</h2>
                <img id="single-article-img" src={article_img_url} />
                <h3 className="single-author">by {author}</h3>
                <p className="article-body">{body}</p>
            </div>

            <div className="comments-wrapper">
                {comment_count === 1 ? <h3>{comment_count} Comment</h3> : <h3>{comment_count} Comments</h3>}
                {loadingComments && <h2>loading comments...</h2>}
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