import { useState, useEffect, useContext } from "react";
import { getUsers } from "../utils/api";
import { UserContext } from "../UserContext";

const LogIn = () => { 
    const [usernameInput, setUsernameInput] = useState("");
    const [users, setUsers] = useState([])
    const {user, setUser} = useContext(UserContext)

    const handleChange = (e) => {
        setUsernameInput(e.target.value)
        console.log(user, "user??")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const allUsernames = users.map(user => user.username)
        if (allUsernames.includes(usernameInput)) {
            setUser(usernameInput)
            console.log(user, "logged in!")
        } else {
            console.log(usernameInput, "nope!")
        }
        setUsernameInput("")
    }

    useEffect(() => {
        getUsers()
        .then(({users}) => {
            setUsers(users)
        })
    }, []);

    return (
        <div id="login-form-container">
            <h2>log in</h2>
            <form onSubmit={handleSubmit} >
                <label htmlFor="username">username: </label><br/>
                <input type="text" id="username" value={usernameInput} onChange={handleChange}/><br/>
                <input type="submit" value="log in"/>
            </form>
        </div>
    );
}

export default LogIn;