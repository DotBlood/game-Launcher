import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/main/LOGO.svg";
import Settings from "../../assets/userBar/settings.svg";

import "./userbar.css";

const UserBar: React.FC = () => {
    return (
        <div className="userBar">
            <div className="container">
                <Link
                    to="https://github.com/DotBlood"
                    className="btn__wrapper"
                    target="_blank"
                    style={{ marginTop: "15px" }}
                >
                    <img className="userBar__icon" src={logo} alt="Logo" />
                </Link>

                <ul className="bottom">
                    <NavLink key="settings" to={"/settings"} className="">
                        <img className="settings" src={Settings}></img>
                    </NavLink>

                    <NavLink
                        key={"accaunt"}
                        to={"/accaunt"}
                        className="btn__wrapper"
                    >
                        <li className="userIcon"></li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default UserBar;
