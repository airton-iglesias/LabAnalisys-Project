import { join } from 'path'
import { format } from 'url'

import { BrowserWindow, app} from 'electron'
import isDev from 'electron-is-dev'
import prepareNext from 'electron-next'

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

app.on('ready', async () => {
  await prepareNext('./renderer');

  const loadingWindow = new BrowserWindow({
    width: 400,
    height: 200,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const urlLoader = isDev
  ? 'http://localhost:8000/loading'
  : format({
      pathname: join(__dirname, '../renderer/out/loading.html'),
      protocol: 'file:',
      slashes: true,
    })

  loadingWindow.loadURL(urlLoader);

  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 1280,
    minHeight: 720,
    resizable: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: false,
      preload: join(__dirname, 'preload.js'),
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
});

app.on('window-all-closed', app.quit);