interface IpcAPI extends global {
  setWindowTitle: (title: string) => void;
  openLink: (url: string) => void;
}

declare global {
  interface Window {
    ipcAPI: IpcAPI;
  }
}
