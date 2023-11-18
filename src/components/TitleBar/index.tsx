import { useState } from "react";
import "./TitleBar.css";
import hideScrean from "../../assets/title/hide-sceen.svg";
import fullScreen from "../../assets/title/full-screen.svg";
import closeScreen from "../../assets/title/close-screen.svg";
import Burger from "../../assets/title/burger.svg";

export interface TitleBarProps {
    BuildInfo?: string;
}

interface WINAPI extends Window {
    api: {
        hide: () => unknown;
        close: () => unknown;
        fullScrean: () => unknown;
    };
}

const TitleBar: React.FC<TitleBarProps> = ({ BuildInfo }) => {
    const [leftMenu, setLeftMenu] = useState<boolean>(true);

    const hide = () => {
        (window as unknown as WINAPI).api.hide();
    };

    const close = () => {
        (window as unknown as WINAPI).api.close();
    };

    const full = () => {
        (window as unknown as WINAPI).api.fullScrean();
    };

    const ShowSideBar = () => {
        const sideBar = document.getElementById("SideBar");
        if (sideBar) {
            if (leftMenu) {
                showSideBar();
                sideBar.animate([{ width: "350px" }, { width: "0px" }], {
                    duration: 120,
                    iterations: 1,
                });
                setTimeout(() => {
                    sideBar.hidden = true;
                }, 115);
            } else {
                showSideBar();
                sideBar.animate([{ width: "0px" }, { width: "350px" }], {
                    duration: 120,
                    iterations: 1,
                });
                sideBar.hidden = false;
            }
        }
    };

    const showSideBar = () => {
        setLeftMenu((prevState) => !prevState);
    };

    return (
        <header className="titleBar">
            <ul className="leftPanel">
                <li className="burgerMenu" onClick={ShowSideBar}>
                    <img src={Burger} alt="" />
                </li>
                <li className="buildInfo">
                    <p>{BuildInfo}</p>
                </li>
            </ul>
            <ul className="controlFrame">
                <li className="hideScreen btn" onClick={hide}>
                    <img src={hideScrean} alt="" />
                </li>
                <li className="fullScreen btn" onClick={full}>
                    <img src={fullScreen} alt="" />
                </li>
                <li className="closeScreen btn" onClick={close}>
                    <img src={closeScreen} alt="" />
                </li>
            </ul>
        </header>
    );
};

export default TitleBar;
