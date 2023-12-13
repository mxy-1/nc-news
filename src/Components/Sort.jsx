import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";

const Sort = ({ setArticles, selectedTopic }) => {
    const [sort, setSort] = useState("created_at");
    const [order, setOrder] = useState("desc");

    const handleChange = (e) => {
        setSort(e.target.value)
    }

    const handleOrderByChange = (e) => {
        setOrder(e.target.value)
    }

    useEffect(() => {
        getArticles(sort, order, selectedTopic)
        .then(({ articles }) => {
            setArticles(articles)
        })
    }, [sort, order])

    return (
        <>
            <label htmlFor="sort">sort by:</label>
            <select name="sort" id="sort" onChange={e =>
                handleChange(e)}>
                <option value="created_at">date</option>
                <option value="votes">votes</option>
            </select>

            <label htmlFor="order">order by:</label>
            <select name="order" id="order" onChange={handleOrderByChange}>
                <option value="desc">desc</option>
                <option value="asc">asc</option>
            </select>
        </>

    );
}

export default Sort;