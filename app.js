// const {app, BrowserWindow} = require('electron')
const url = require("url");
const path = require("path");
const fs = require("fs");
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow
const ipcMain = electron.ipcMain
const shell = electron.shell

    let mainWindow

    function createWindow () {
      mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true,
          enableRemoteModule: true,
          contextIsolation: false,
        }
      })

      
      const localUrl =  url.format({
        pathname: path.join(__dirname, `/dist/electron-app/index.html`),
        protocol: "file:",
        slashes: true
      });


      console.log("print localUrl = "+localUrl);

      mainWindow.loadURL(localUrl);
      // Open the DevTools.
      mainWindow.webContents.openDevTools()

      mainWindow.on('closed', function () {
        mainWindow = null
      });
    }

    app.on('ready', createWindow);

    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    });

    app.on('activate', function () {
      if (mainWindow === null) createWindow()
    });

    ipcMain.on('ping', function (event, args) {
       args.push(new Date());
       args.push("pong");
      // event.returnValue = args;
      event.reply("pong",args);
    });

    function getFiles(dir,files_, type){
      debugger;
      files = files_||[];
      var files = fs.readdirSync(dir);
      for(var i in files){
        var name = path.join(dir,files[i]);
        if(fs.statSync(name).isDirectory()){
          getFiles(name,files_,type);
        }else{
          if(name.endsWith(type))
            files_.push(name);
        }
      }
      return files_;
    };