import Articles from "./Articles";
import Sort from "./Sort";


const MainContent = ({articles, setArticles, selectedTopic, sort, setSort, setOrder, order}) => {

    return (
        <>
            <Sort setArticles={setArticles} selectedTopic={selectedTopic} setSort={setSort} setOrder={setOrder} sort={sort} order={order}/>
            <Articles articles={articles} setArticles={setArticles}/>
       
        </>

    );
}

export default MainContent;