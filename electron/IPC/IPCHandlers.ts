import { BrowserWindow, IpcMainEvent, ipcMain, shell } from "electron";
import { IPC_ACTIONS } from "./IPCActions";

const { SET_WINDOW_TITLE, OPEN_LINK } = IPC_ACTIONS.Window;

const handleSetWindowTitle = (event: IpcMainEvent, title: string) => {
  const webContents = event?.sender;
  const window = BrowserWindow.fromWebContents(webContents);

  window?.setTitle(title);
};

const handleOpenLink = (_event: IpcMainEvent, url: string) => {
  shell.openExternal(url);
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
