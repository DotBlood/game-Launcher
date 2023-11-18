import "./SideBar.css";
import ButtonLink from "./buttnLink";
import { linkArr } from "../../links";

const SideBar: React.FC = () => {
    return (
        <div id="SideBar" className="sideBar">
            <div className="container">
                <ul className="menu">
                    {linkArr.map((ссылка) => (
                        <ButtonLink key={ссылка.key} ArryRouter={ссылка} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
