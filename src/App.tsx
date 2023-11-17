import TitleBar from "./components/TitleBar";
import SideBar from "./components/SideBar";
import { useState } from "react";
import { Config } from "./types/MainConfig";
import configJson from "./config.json";
import UserBar from "./components/userBar";

function App() {
  const config = configJson as Config;

  const [activeMenuItem, setActiveMenuItem] = useState<string>("Магазин");

  const handleMenuItemClick = (menuItem: string) => {
    setActiveMenuItem(menuItem);
  };
  let content = null;
  switch (activeMenuItem) {
    case "DOWNLOAD":
      content = <div className="DownloadWindow">DOWNLOAD menu</div>;
      break;
    case "SHOP":
      content = <div className="ShopWindow">SHOP menu</div>;
      break;
    case "LIBRARY":
      content = <div className="MyLibWindow">LIBRARY menu</div>;
      break;
    case "SUPPORT":
      content = <div className="SupportWindow">SUPPORT menu</div>;
      break;
    case "SETTINGS":
      content = <div className="SettingsWindow">SETTINGS menu</div>;
      break;
    case "USER_ACCAUNT":
      content = <div className="UserWindow">USER_ACCAUNT menu</div>;
      break;
    default:
      content = <div className="mainloadWindow">Main menu</div>;
      break;
  }

  return (
    <>
      <TitleBar BuildInfo={config.version} />

      <div className="mainFrame">
        <SideBar
          activeMenuItem={activeMenuItem}
          onMenuItemClick={handleMenuItemClick}
        />

        <div className="mainWindows">{content}</div>

        <UserBar onMenuItemClick={handleMenuItemClick} />
      </div>
    </>
  );
}

export default App;
