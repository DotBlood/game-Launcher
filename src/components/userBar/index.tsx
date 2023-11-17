import logo from "../../assets/main/LOGO.svg";
import Settings from "../../assets/userBar/settings.svg";

import "./userbar.css";

type MenuItemClickHandler = (menuItem: string) => void;

interface SideBarProps {
  onMenuItemClick: MenuItemClickHandler;
}

const UserBar: React.FC<SideBarProps> = ({ onMenuItemClick }) => {
  return (
    <div className="userBar">
      <div className="container">
        <a href="https://github.com/DotBlood" target="_blank">
          <img className="userBar__icon btn__wrapper" src={logo} alt="Logo" />
        </a>
        <ul className="bottom">
          <div onClick={() => onMenuItemClick("SETTINGS")}>
            <img className="settings" src={Settings}></img>
          </div>
          <div
            className="btn__wrapper"
            style={{ paddingTop: "5px", paddingBottom: "5px" }}
          >
            <li
              className="userIcon"
              onClick={() => onMenuItemClick("USER_ACCAUNT")}
            ></li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default UserBar;
