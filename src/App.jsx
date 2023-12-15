import './App.css'
import Header from "./Components/Header.jsx"
import MainContent from "./Components/MainContent.jsx"
import { Routes, Route } from "react-router-dom"
import SingleArticle from './Components/SingleArticle/SingleArticle.jsx'
import Error from './Components/Error.jsx'
import { useState } from 'react'
import NavBar from './Components/NavBar.jsx'

function App() {
    const [topics, setTopics] = useState([]);
    const [articles, setArticles] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState("");
    const [sort, setSort] = useState("created_at");
    const [order, setOrder] = useState("desc");

    return (
        <>
            <Header />
            <NavBar topics={topics} setTopics={setTopics} setArticles={setArticles} setSelectedTopic={setSelectedTopic} selectedTopic={selectedTopic} sort={sort} order={order} />
            <Routes>
                < Route path="/" element={<MainContent articles={articles} setArticles={setArticles} selectedTopic={selectedTopic} sort={sort} setSort={setSort} order={order} setOrder={setOrder} />} />
                < Route path="/articles" element={<MainContent articles={articles} setArticles={setArticles} selectedTopic={selectedTopic} sort={sort} setSort={setSort} order={order} setOrder={setOrder} />} />
                < Route path="/articles/:article_id" element={<SingleArticle />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    )
}

export default App
