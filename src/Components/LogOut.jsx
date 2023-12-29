import { useContext } from "react";
import { UserContext } from "../UserContext";


const LogOut = () => {
    const { user, setUser } = useContext(UserContext)

    return (
        <div>
            {user &&
                <div>
                    <img className="logged-in" src={user.avatar_url} /><p>{user.name} currently logged in</p>
                    <button onClick={() => setUser("")}>log out</button>
                </div>}
            {!user && <p>you have been logged out</p>}
        </div>
    );
}

export default LogOut;