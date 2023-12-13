import { useParams } from "react-router-dom"
import { getArticleComments, getSingleArticle } from "../utils/api";
import { useEffect, useState } from "react";
import Comments from "./Comments";
import AddComment from "./AddComment";
import DisplaySingleArticle from "./DisplaySingleArticle";

const SingleArticle = () => {
    const [loadingArticle, setLoadingArticle] = useState(true);
    const [article, setArticle] = useState({});
    const [comments, setComments] = useState([]);
    const [loadingComments, setLoadingComments] = useState(true);
    const [postingComment, setPostingComment] = useState(false);
    const [articleVotes, setArticleVotes] = useState(null);
    

    const { article_id } = useParams()

    const { article_id: id, article_img_url, author, body, comment_count, created_at, title, topic, votes } = article

    useEffect(() => {
        getSingleArticle(article_id)
            .then(({ article }) => {
                setArticle(article)
                setLoadingArticle(false)
                setArticleVotes(article.votes)
            })
    }, [comments]);

    useEffect(() => {
        getArticleComments(article_id)
            .then(({ comments }) => {
                setComments(comments)
                setLoadingComments(false)
            })
            .catch(err => console.log(err))
    }, [comments]);

    return (
        <>
            <div className="single-article">
                {loadingArticle && <h2>loading article...</h2>}
                <DisplaySingleArticle article_id={article_id} article={article} setArticleVotes={setArticleVotes} articleVotes={articleVotes} />
            </div>

            <div className="comments-wrapper">
                {comment_count === 1 ? <h3>{comment_count} Comment</h3> : <h3>{comment_count} Comments</h3>}
                {loadingComments && <h2>loading comments...</h2>}
                <AddComment setPostingComment={setPostingComment} article_id={article_id} comments={comments} setComments={setComments}/>
                {postingComment && <p>posting comment...</p>}

                <Comments comments={comments} setComments={setComments}/>
            </div>
        </>
    );
}

export default SingleArticle;