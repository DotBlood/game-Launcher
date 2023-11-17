import "./SideBar.css";

type MenuItemClickHandler = (menuItem: string) => void;

interface SideBarProps {
  activeMenuItem: string;
  onMenuItemClick: MenuItemClickHandler;
}

const SideBar: React.FC<SideBarProps> = ({
  activeMenuItem,
  onMenuItemClick,
}) => {
  return (
    <div id="SideBar" className="sideBar">
      <div className="container">
        <ul className="menu">
          <li
            className={`menu__item ${
              activeMenuItem === "SHOP" ? "active" : ""
            }`}
            onClick={() => onMenuItemClick("SHOP")}
          >
            <img className="menu__item-icon" src="./asd.png" alt="" />
            <a className="menu__item-text">Магазин</a>
          </li>

          <li
            className={`menu__item ${
              activeMenuItem === "LIBRARY" ? "active" : ""
            }`}
            onClick={() => onMenuItemClick("LIBRARY")}
          >
            <img className="menu__item-icon" src="./asd.png" alt="" />
            <a className="menu__item-text">Библиотека</a>
          </li>

          <li
            className={`menu__item ${
              activeMenuItem === "DOWNLOAD" ? "active" : ""
            }`}
            onClick={() => onMenuItemClick("DOWNLOAD")}
          >
            <img className="menu__item-icon" src="./asd.png" alt="" />
            <a className="menu__item-text">Загрузки</a>
          </li>

          <li
            className={`menu__item ${
              activeMenuItem === "SUPPORT" ? "active" : ""
            }`}
            onClick={() => onMenuItemClick("SUPPORT")}
          >
            <img className="menu__item-icon" src="./asd.png" alt="" />
            <a className="menu__item-text">Поддержка</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
