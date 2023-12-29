import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const Header = () => {
    const { user } = useContext(UserContext)
    return (
        <div className="header-wrapper">
            <h1>NC News</h1>
            <div className="login-wrapper">

                {user ?
                    <Link className="link"  to="/logout">
                        <p className="link-login">log out</p>
                    </Link> :
                    <Link className="link" to="/login">
                        <p className="link-login">log in</p>
                    </Link>
                }

                {user.username && <img className="avatar" src={user.avatar_url} />}
                <p className="header-username">{user.username}</p>
            </div>
        </div>
    );
}

export default Header;