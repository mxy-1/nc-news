import { useState } from "react";
import Articles from "./Articles";
import NavBar from "./NavBar";
import Sort from "./Sort";

const MainContent = () => {
    const [topics, setTopics] = useState([]);
    const [articles, setArticles] = useState([]);

    return (
        <>
            <NavBar topics={topics} setTopics={setTopics} setArticles={setArticles} />
            <Sort setArticles={setArticles} />
            <Articles articles={articles} setArticles={setArticles} />
        </>

    );
}

export default MainContent;