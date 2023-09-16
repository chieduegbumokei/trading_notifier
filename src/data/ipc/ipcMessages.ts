declare global {
  interface Window {
    ipcAPI: IpcAPI;
  }
}

const { setWindowTitle, openLink } = window["ipcAPI"];

export { setWindowTitle, openLink };
