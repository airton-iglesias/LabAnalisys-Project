"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const electron_1 = require("electron");
const electron_next_1 = __importDefault(require("electron-next"));
const child_process_1 = require("child_process");
const startDjangoServer = () => {
    const djangoBackend = (0, child_process_1.spawn)(`python\\env\\Scripts\\python.exe`, ['python\\core\\manage.py', 'runserver', '--noreload']);
    djangoBackend.stdout.on('data', data => { console.log(`stdout:\n${data}`); });
    djangoBackend.stderr.on('data', data => { console.log(`stderr: ${data}`); });
    djangoBackend.on('error', (error) => { console.log(`error: ${error.message}`); });
    djangoBackend.on('close', (code) => { console.log(`child process exited with code ${code}`); });
    djangoBackend.on('message', (message) => { console.log(`message:\n${message}`); });
    return djangoBackend;
};
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
electron_1.app.on('ready', async () => {
    await (0, electron_next_1.default)('./renderer');
    const loadingWindow = new electron_1.BrowserWindow({
        width: 400,
        height: 200,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    loadingWindow.loadFile('./renderer/components/loading.html');
    const mainWindow = new electron_1.BrowserWindow({
        width: 1280,
        height: 720,
        minWidth: 1280,
        minHeight: 720,
        resizable: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: false,
            preload: (0, path_1.join)(__dirname, 'preload.js'),
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
electron_1.app.on('window-all-closed', electron_1.app.quit);
