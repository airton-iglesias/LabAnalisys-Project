"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const url_1 = require("url");
const electron_1 = require("electron");
const electron_is_dev_1 = __importDefault(require("electron-is-dev"));
const electron_next_1 = __importDefault(require("electron-next"));
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
const createWindow = async () => {
    await (0, electron_next_1.default)('./renderer');
    const loadingWindow = new electron_1.BrowserWindow({
        width: 400,
        height: 200,
        frame: false,
        icon: "./icon.png",
        webPreferences: {
            nodeIntegration: true,
        },
    });
    const loadFile = electron_is_dev_1.default
        ? 'http://localhost:8000/loader'
        : (0, url_1.format)({
            pathname: (0, path_1.join)(__dirname, '../renderer/out/loader.html'),
            protocol: 'file:',
            slashes: true,
        });
    loadingWindow.loadURL(loadFile);
    const mainWindow = new electron_1.BrowserWindow({
        width: 1280,
        height: 720,
        minWidth: 1280,
        minHeight: 720,
        icon: "./icon.png",
        resizable: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: false,
            preload: (0, path_1.join)(__dirname, 'preload.js'),
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
    const url = electron_is_dev_1.default
        ? 'http://localhost:8000/'
        : (0, url_1.format)({
            pathname: (0, path_1.join)(__dirname, '../renderer/out/index.html'),
            protocol: 'file:',
            slashes: true,
        });
    mainWindow.loadURL(url);
    mainWindow.webContents.once('did-finish-load', () => {
        loadingWindow.close();
    });
    mainWindow.webContents.on('dom-ready', () => {
        mainWindow.show();
    });
};
electron_1.app.whenReady().then(() => {
    createWindow();
    electron_1.app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
});
