const { app, BrowserWindow, webContents } = require('electron');
const path = require('path');
const ipcMain = require('electron').ipcMain
const {Builder, By, Key, until} = require('selenium-webdriver');

const chrome = require('selenium-webdriver/chrome')
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
let mainWindow;

if (require('electron-squirrel-startup')) { 
  // eslint-disable-line global-require

  app.quit();
}

const createWindow = () => {

  // Create the browser window.

   mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
    }
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});



ipcMain.on('browserClick', function (event, userAgent, windowSize, pluginsDisable,incognitoEnable) {

  console.log(count,userAgent, windowSize, pluginsDisable,incognitoEnable)
  var opts = new chrome.Options();
  opts.addArguments(['user-agent="YOUR_USER_AGENT"']);

(async function example() {
  let driver = await new Builder().withCapabilities(opts).forBrowser('chrome').build();
  try {
    await driver.get('http://www.google.com/ncr');
  
  } catch{
 
  }
})();

  mainWindow.webContents.send('doSomethingWithUserAgent', userAgent + " idk");
 
})