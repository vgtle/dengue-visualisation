import { app, BrowserWindow } from "electron"
import { join } from 'path';
// import {Url} from 'url';
import electronIsDev from 'electron-is-dev';

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({width: 800, height: 600, titleBarStyle: 'hidden',  fullscreen: false, movable: true});
  mainWindow.loadURL(electronIsDev ? 'http://localhost:3000' : `file://${join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});