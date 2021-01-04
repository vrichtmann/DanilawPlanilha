const { app, BrowserWindow} = require('electron')
const path = require('path')

if(require('electron-squirrel-startup')) return;

function createWindow () {
    const win = new BrowserWindow({
        width: 1366,
        height: 768,
        icon: path.join(app.getAppPath(), 'build/icon.png'),
        webPreferences: {
          worldSafeExecuteJavaScript: true,
          contextIsolation: true,
          preload: path.join(app.getAppPath(), 'preload.js')
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

