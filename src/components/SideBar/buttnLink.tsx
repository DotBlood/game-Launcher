import { NavLink } from "react-router-dom";
import { IRouter } from "../../links";

const ButtonLink: React.FC<{ ArryRouter: IRouter }> = ({ ArryRouter }) => {
    return (
        <NavLink
            to={ArryRouter.to}
            className={({ isActive }) =>
                isActive ? "active menu__item" : "menu__item"
            }
        >
            <img className="menu__item-icon" src={ArryRouter.img} />
            <a className="menu__item-text">{ArryRouter.plaseholder}</a>
        </NavLink>
    );
};
export default ButtonLink;
