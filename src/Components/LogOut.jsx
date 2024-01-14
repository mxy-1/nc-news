import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
import "./LogInOut.css"

const LogOut = () => {
    const { user, setUser } = useContext(UserContext)

    return (
        <div>
            {user &&
                <div className="login-form-container">
                    <p>{user.name} currently logged in</p>
                    <img className="logged-in" src={user.avatar_url} /><br/>
                    <Link to="/" ><button onClick={() =>  setUser("")} className="link-login" id="log-out-button">log out</button></Link>
                </div>}
        </div>
    );
}

export default LogOut;