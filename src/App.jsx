import './App.css'
import Header from "./Components/Header.jsx"
import MainContent from "./Components/MainContent.jsx"
import { Routes, Route } from "react-router-dom"
import SingleArticle from './Components/SingleArticle/SingleArticle.jsx'
import Error from './Components/Error.jsx'
import Nav from './Components/Nav.jsx'
import LogIn from './Components/LogIn.jsx'
import { UserProvider } from './UserContext.jsx'
import LogOut from './Components/LogOut.jsx'

function App() {

    return (
        <UserProvider>
            <Header />
            <Nav />
            <Routes>
                < Route path="/" element={<MainContent />} />
                <Route path="/logout" element={<LogOut />} />
                <Route path="/login" element={<LogIn />} />
                < Route path="/articles" element={<MainContent />} />
                <Route path="/articles/topics/:topic" element={<MainContent />} />
                < Route path="/articles/:article_id" element={<SingleArticle />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </UserProvider>
    )
}

export default App
