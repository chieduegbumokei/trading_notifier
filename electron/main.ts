import { app, BrowserWindow } from "electron";
import path from "node:path";
import { registerIPCHandlers } from "./IPC/IPCHandlers";
import installExtension, { REDUX_DEVTOOLS } from "electron-devtools-installer";

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, "../dist");
process.env.PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, "../public");

let win: BrowserWindow | null;
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

function createWindow() {
  win = new BrowserWindow({
    minHeight: 800,
    minWidth: 864,
    icon: path.join(__dirname, "../build/icon.png"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      webSecurity: false,
      sandbox: false,
    },
  });

  // Test active push message to Renderer-process.
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, "index.html"));
  }

  win.maximize();
}

app.on("window-all-closed", () => {
  win = null;
});

app.whenReady().then(() => {
  registerIPCHandlers();
  [REDUX_DEVTOOLS].map((extension) => {
    installExtension(extension)
      .then((name: string) => console.log(`Added extension ${name}.`))
      .catch((err) => console.log("An error occurred: ", err));
  });

  createWindow();
});
