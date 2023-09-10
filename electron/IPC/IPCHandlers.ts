import { BrowserWindow, IpcMainEvent, ipcMain } from "electron";
import { IPC_ACTIONS } from "./IPCActions";

const { SET_WINDOW_TITLE, OPEN_LINK } = IPC_ACTIONS.Window;

const handleSetWindowTitle = (event: IpcMainEvent, title: string) => {
  const webContents = event?.sender;
  const window = BrowserWindow.fromWebContents(webContents);

  window?.setTitle(title);
};

const handleOpenLink = (event: IpcMainEvent, url: string) => {
  console.log("Link");
};

const ipcHandlers = [
  {
    event: SET_WINDOW_TITLE,
    callback: handleSetWindowTitle,
  },
  {
    event: OPEN_LINK,
    callback: handleOpenLink,
  },
];

export const registerIPCHandlers = () => {
  ipcHandlers.forEach((handler: { event: string; callback: any }) => {
    ipcMain.on(handler.event, handler.callback);
  });
};
