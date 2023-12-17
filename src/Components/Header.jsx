import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-wrapper">
            <h1>NC News</h1>
            <Link id="link" to="/login">
                <p id="link-login">log in</p>
            </Link>
        </div>
    );
}

export default Header;