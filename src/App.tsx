import TitleBar from "./components/TitleBar";
import SideBar from "./components/SideBar";
import { Config } from "./types/MainConfig";
import configJson from "./config.json";
import UserBar from "./components/userBar";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
    const config = configJson as Config;

    return (
        <>
            <TitleBar BuildInfo={config.version} />

            <div className="mainFrame">
                <SideBar />

                <div className="mainWindows">
                    <Routes>
                        <Route path="/download" element={<>download</>} />
                        <Route path="/shop" element={<>shop</>} />
                        <Route path="/library" element={<>library</>} />
                        <Route path="/accaunt" element={<>Accaunt</>} />
                        <Route path="/settings" element={<>settings</>} />
                        <Route path="/support" element={<>support</>} />
                    </Routes>
                </div>

                <UserBar />
            </div>
        </>
    );
};

export default App;
