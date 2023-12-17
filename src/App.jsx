import './App.css'
import Header from "./Components/Header.jsx"
import MainContent from "./Components/MainContent.jsx"
import { Routes, Route } from "react-router-dom"
import SingleArticle from './Components/SingleArticle/SingleArticle.jsx'
import Error from './Components/Error.jsx'
import Nav from './Components/Nav.jsx'
import LogIn from './LogIn.jsx'

function App() {

    return (
        <>
            <Header />
            <Nav />
            <Routes>
                < Route path="/" element={<MainContent />} />
                <Route path="/login" element={<LogIn />} />
                < Route path="/articles" element={<MainContent />} />
                <Route path="/articles/topics/:topic" element={<MainContent />} />
                < Route path="/articles/:article_id" element={<SingleArticle />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    )
}

export default App
