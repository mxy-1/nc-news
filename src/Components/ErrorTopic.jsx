import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const ErrorTopic = ({ topics, setArticles }) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [error, setError] = useState(false)
    const navigate = useNavigate();

    const topic = searchParams.get("topic")
    useEffect(() => {
        if ((!topics.includes(topic)) && topic) {
            setError(true)
            navigate("/*")
        } else {
            setError(false)
        }
    }, [searchParams])

}

export default ErrorTopic;