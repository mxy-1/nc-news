import { useState } from "react";
import Articles from "./Articles";
import Sort from "./Sort";


const MainContent = () => {
    const [articles, setArticles] = useState([]);
    const [sort, setSort] = useState("created_at");
    const [order, setOrder] = useState("desc");

    return (
        <>
            <Sort setSort={setSort} setOrder={setOrder}/>
            <Articles articles={articles} setArticles={setArticles} sort={sort} order={order} />
        </>

    );
}

export default MainContent;