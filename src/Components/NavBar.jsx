import { useEffect, useState} from "react";
import { getArticles, getTopics } from "../utils/api";
import { Link } from "react-router-dom";
import ErrorTopic from "./ErrorTopic";

const NavBar = ({setArticles, setSelectedTopic, selectedTopic, sort, order}) => {
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTopics()
        .then(({topics}) => {
            setTopics([...topics].map(topic => topic.slug))
        })
    }, [topics])

    useEffect(() => {
        getArticles(sort, order, selectedTopic)
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
         <ul className="nav-wrapper">
        <Link to="/" onClick={() => handleClick()}>
            <li className="nav" >home</li>
        </Link>
        {topics.map((topic) => {
       return (
       <Link to={`/articles?topic=${topic}`} key={topic}>
           <li className="nav" onClick={() => handleClick(topic)} >{topic}</li>
       </Link>
       )}
        )}
    </ul>
    {loading && <h2>loading...</h2>}
    <ErrorTopic topics={topics} setArticles={setArticles}/>
        </>
    )
}
 
export default NavBar;