import axios from "axios";

const getArticles = () => {
    return axios.get("https://news-api-3trz.onrender.com/api/articles")
    .then(res => res.data)
}
 
export default getArticles;