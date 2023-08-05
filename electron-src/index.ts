import { join } from 'path';
import { BrowserWindow, app } from 'electron';
import prepareNext from 'electron-next';
import { spawn } from 'child_process';

const startDjangoServer = () => {
    const djangoBackend = spawn(`python\\env\\Scripts\\python.exe`, ['python\\core\\manage.py', 'runserver', '--noreload']);
    djangoBackend.stdout.on('data', data =>{console.log(`stdout:\n${data}`);});
    djangoBackend.stderr.on('data', data =>{console.log(`stderr: ${data}`);});
    djangoBackend.on('error', (error) =>{console.log(`error: ${error.message}`);});
    djangoBackend.on('close', (code) =>{console.log(`child process exited with code ${code}`);});
    djangoBackend.on('message', (message) =>{console.log(`message:\n${message}`);});
    return djangoBackend;
}

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

  loadingWindow.loadFile('./renderer/components/loading.html');

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

  mainWindow.loadURL('http://localhost:8000');

  mainWindow.webContents.once('did-finish-load', () => {
    loadingWindow.close();
  });
  mainWindow.webContents.on('dom-ready', () => {
    mainWindow.show();
  });

  startDjangoServer();
});

app.on('window-all-closed', app.quit);