import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";

const Nav = () => {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getTopics()
            .then(({ topics }) => {
                setTopics([...topics].map(topic => topic.slug))
            })
    }, [topics])

    return (
    <ul className="nav-wrapper">
        <Link to="/">
            <li className="nav" >home</li>
        </Link>
        {topics.map((topic) => {
            return (
                <Link to={`/articles/topics/${topic}`} key={topic}>
                    <li className="nav" >{topic}</li>
                </Link>
            )
        }
        )}
    </ul>);
}

export default Nav;