import { join } from 'path'
import { format } from 'url'

import { BrowserWindow, app} from 'electron'
import isDev from 'electron-is-dev'
import prepareNext from 'electron-next'

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

const createWindow = async () => {
  await prepareNext('./renderer');

  const loadingWindow = new BrowserWindow({
    width: 400,
    height: 200,
    frame: false,
    icon: "./icon.png",
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const loadFile = isDev
  ? 'http://localhost:8000/loader'
  : format({
      pathname: join(__dirname, '../renderer/out/loader.html'),
      protocol: 'file:',
      slashes: true,
    })

  loadingWindow.loadURL(loadFile);

  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 1280,
    minHeight: 720,
    icon: "./icon.png",
    resizable: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: false,
      preload: join(__dirname, 'preload.js'),
      webSecurity: false,
    },
    show: false,
    frame: true,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#1e293b',
      symbolColor: 'white',
      height: 30
    }
  });
  

  const url = isDev
  ? 'http://localhost:8000/'
  : format({
      pathname: join(__dirname, '../renderer/out/index.html'),
      protocol: 'file:',
      slashes: true,
    })

  mainWindow.loadURL(url)


  mainWindow.webContents.once('did-finish-load', () => {
    loadingWindow.close();
  });
  mainWindow.webContents.on('dom-ready', () => {
    mainWindow.show();
  });
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})