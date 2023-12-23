import { useState, useEffect, useContext } from "react";
import { getUsers } from "../utils/api";
import { UserContext } from "../UserContext";

const LogIn = () => { 
    const [usernameInput, setUsernameInput] = useState("");
    const [users, setUsers] = useState([])
    const [userExists, setUserExists] = useState(true);
    const {user, setUser} = useContext(UserContext)

    const handleChange = (e) => {
        setUsernameInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const allUsernames = users.map(user => user.username)
        if (allUsernames.includes(usernameInput)) {
            setUserExists(true)
            setUser(users.filter(user => {
                return user.username === usernameInput
            })[0])
            console.log(user, "logged in!")
        } else {
            setUserExists(false)
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
            {userExists && user &&
            <div>
                <img id="logged-in" src={user.avatar_url}/><p>{user.name} currently logged in</p>
            </div>}
            {!userExists && <p>username does not exist. please try again.</p>}
        </div>
    );
}

export default LogIn;