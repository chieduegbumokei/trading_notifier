interface IpcAPI extends global {
  setWindowTitle: (title: string) => void;
}

declare global {
  interface Window {
    ipcAPI: IpcAPI;
  }
}
