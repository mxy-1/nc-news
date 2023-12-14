import { useEffect, useState} from "react";
import { getArticles, getTopics } from "../utils/api";
import { Link } from "react-router-dom";

const NavBar = ({setArticles, setSelectedTopic, selectedTopic}) => {
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTopics()
        .then(({topics}) => {
            setTopics([...topics].map(topic => topic.slug))
        })
    }, [topics])

    useEffect(() => {
        getArticles("created_at", "desc", selectedTopic)
        .then(({articles}) => {
            setArticles(articles)
            setLoading(false)
        })
    }, [selectedTopic])

    const handleClick = (topic) => {
        if (topic !== selectedTopic) {
            setLoading(true)
            setSelectedTopic(topic)
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