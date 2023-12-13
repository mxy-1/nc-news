import axios from "axios";

const api = axios.create({baseURL:"https://news-api-3trz.onrender.com/api"})

export const getArticles = (sort="created_at", order="desc", topic) => {
    let path = `/articles?sort_by=${sort}&order=${order}`
    if (topic) {
        path += `&topic=${topic}`
    }
    return api.get(path)
    .then(res => res.data)
}

export const getSingleArticle = (article_id) => {
    return api.get(`/articles/${article_id}`)
    .then(res => res.data)
}

export const getArticleComments = (article_id) => {
    return api.get(`/articles/${article_id}/comments`)
    .then(res => res.data)
}

export const patchArticleVotes = (article_id, num) => {
    return api.patch(`/articles/${article_id}`, {
        inc_votes: num
    })
}

export const postComment = (article_id, username, body) => {
    return api.post(`/articles/${article_id}/comments`, {
        username: username,
        body: body
    })
}

export const getTopics = () => {
    return api.get(`/topics`)
    .then(res => res.data)
}

export const deleteComment = (comment_id) => {
    return api.delete(`/comments/${comment_id}`)
}
