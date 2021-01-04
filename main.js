const path = require('path')

const { app, BrowserWindow } = require('electron')

if(require('electron-squirrel-startup')) return;

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(app.getAppPath(), 'assets/icon.png'),
    webPreferences: {
      nodeIntegration: false,
      devTools: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

