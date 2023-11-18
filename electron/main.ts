import { app, BrowserWindow, globalShortcut, ipcMain } from "electron";
import path from "node:path";
process.env.DIST = path.join(__dirname, "../dist");
process.env.VITE_PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, "../public");

let win: BrowserWindow | null;
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, "icon.png"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    autoHideMenuBar: true,
    show: false,
    frame: false,
    minWidth: 900,
    minHeight: 600,
  });

  if (VITE_DEV_SERVER_URL) {
    win.webContents.openDevTools();
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, "index.html"));
  }

  win.on("ready-to-show", win.show);
}



// APP_API
app
  .on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
      win = null;
    }
  })
  .on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

// WINDOW_API
ipcMain
  .on("close", () => {
    if (process.platform !== "darwin") {
      app.exit();
    }
  })
  .on("full", () => {
    if (win?.isMaximized()) {
      win.restore();
    } else {
      win?.maximize();
    }
  })
  .on("hide", (event) => {
    event.preventDefault();
    win?.minimize();
  });

app
  .whenReady()
  .then(() => {
    globalShortcut.register('F11', () => {
      return false;
    })
  })
  .then(createWindow)
  .catch((e) => {
    console.error(e);
    app.exit(-1);
  });
