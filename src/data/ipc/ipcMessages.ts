declare global {
  interface Window {
    ipcAPI: IpcAPI;
  }
}

const { setWindowTitle } = window["ipcAPI"];

export { setWindowTitle };
