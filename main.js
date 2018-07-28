const {app, BrowserWindow} = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width           : 600,
    height          : 600,
    backgroundColor : '#ffffff',
    icon            : `file://${__dirname}/dist/monister/assets/logo.png`
  });

  win.loadURL(`file://${__dirname}/dist/monister/index.html`);

  //// uncomment below to open the DevTools.
  win.webContents.openDevTools();

  win.on('closed', function () {
    win = null
  });
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
});
