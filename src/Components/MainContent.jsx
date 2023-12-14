import { useState } from "react";
import Articles from "./Articles";
import NavBar from "./NavBar";
import Sort from "./Sort";

const MainContent = () => {
    const [topics, setTopics] = useState([]);
    const [articles, setArticles] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState("");

    return (
        <>
            <NavBar topics={topics} setTopics={setTopics} setArticles={setArticles} setSelectedTopic={setSelectedTopic} selectedTopic={selectedTopic}/>
            <Sort setArticles={setArticles} selectedTopic={selectedTopic}/>
            <Articles articles={articles} setArticles={setArticles}/>
        </>

    );
}

export default MainContent;