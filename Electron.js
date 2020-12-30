const devMode = require('electron-is-dev')
const {app, BrowserWindow} = require('electron')

//set the location of the index.html file based on production/development environment
let indexURL = devMode ?
	'http://localhost:3000/' :
url.format({
	pathname: path.join(__dirname, 'build', 'index.html'),
	protocol: 'file:',
	slashes: true,
})

let mainWindow

app.on('ready', ()=>{
	
	mainWindow = new BrowserWindow({
		webPreferences: {
			nodeIntegration: false,
			preload: __dirname + '/Preload.js'
		}
	})
	
	mainWindow.loadURL(indexURL)
	mainWindow.maximize()
	
	if (devMode) {
		mainWindow.webContents.openDevTools({
			mode: 'bottom'
		})
	}
	
	mainWindow.on('close', ()=>{
		app.quit()
	})
})