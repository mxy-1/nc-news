import axios from "axios";

const api = axios.create({baseURL:"https://news-api-3trz.onrender.com/api"})

export const getArticles = () => {
    return api.get("/articles")
    .then(res => res.data)
}

export const getSingleArticle = (article_id) => {
    return api.get(`articles/${article_id}`)
    .then(res => res.data)
}