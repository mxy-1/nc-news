const Sort = ({setSort, setOrder}) => {
    const handleChange = (e) => {
        setSort(e.target.value)
    }

    const handleOrderByChange = (e) => {
        setOrder(e.target.value)
    }

    return (
        <div className="sort-options">
            <label id="sort-label" htmlFor="sort">sort by:</label>
            <select name="sort" id="sort" onChange={e =>
                handleChange(e)}>
                <option value="created_at">date</option>
                <option value="votes">votes</option>
                <option value="author">author</option>
                <option value="title">title</option>
            </select>

            <label id="order-label" htmlFor="order">order by:</label>
            <select name="order" id="order" onChange={handleOrderByChange}>
                <option value="desc">desc</option>
                <option value="asc">asc</option>
            </select>
        </div>
    );
}

export default Sort;