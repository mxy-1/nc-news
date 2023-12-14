import { useState } from "react";
import Articles from "./Articles";
import NavBar from "./NavBar";
import Sort from "./Sort";


const MainContent = () => {
    const [topics, setTopics] = useState([]);
    const [articles, setArticles] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState("");
    const [sort, setSort] = useState("created_at");
    const [order, setOrder] = useState("desc");


    return (
        <>
            <NavBar topics={topics} setTopics={setTopics} setArticles={setArticles} setSelectedTopic={setSelectedTopic} selectedTopic={selectedTopic} sort={sort} order={order}/>
            <Sort setArticles={setArticles} selectedTopic={selectedTopic} setSort={setSort} setOrder={setOrder} sort={sort} order={order}/>
            <Articles articles={articles} setArticles={setArticles}/>
       
        </>

    );
}

export default MainContent;