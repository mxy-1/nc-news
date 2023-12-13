import { useEffect, useState} from "react";
import { getArticleByTopic, getArticles, getTopics } from "../utils/api";
import { Link } from "react-router-dom";

const NavBar = ({setArticles}) => {
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTopics()
        .then(({topics}) => {
            setTopics([...topics].map(topic => topic.slug))
        })
    }, [topics])

    const handleClick = (topic) => {
        setLoading(true)
        if (topic) {
            getArticleByTopic(topic)
            .then(({articles}) => {
                setArticles(articles)
                setLoading(false)
            })   
        }
        else {
            getArticles()
            .then(({articles}) => {
                setArticles(articles)
                setLoading(false)
            })
        }
    }

    return (
        <>
         <ul>
        <Link to="/" onClick={() => handleClick()}>
            <li >home</li>
        </Link>
        {topics.map((topic) => {
       return (
       <Link to={`/articles?topic=${topic}`} key={topic}>
           <li onClick={() => handleClick(topic)} >{topic}</li>
       </Link>
       )}
        )}
    </ul>
    {loading && <h2>loading...</h2>}
        </>
   

    )
}
 
export default NavBar;