console.log("🚀 Electron main process started!");

const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let win;

function createWindow() {
  console.log("✅ createWindow() called");

  win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
    },
  });

  console.log(" Loading Vite URL...");
  win.loadURL("http://localhost:5173");

  win.on("ready-to-show", () => {
    console.log(" Window is ready to show");
    win.show();
  });

  // win.webContents.openDevTools();

  win.on("closed", () => {
    console.log(" Window closed");
    win = null;
  });
}

app.whenReady().then(() => {
  console.log(" App ready — calling createWindow()");
  createWindow();
});

ipcMain.handle("get-user-data", async () => {
  console.log("📩 Renderer requested user data");
  return { name: "Manoj", status: "online" };
});

app.on("window-all-closed", () => {
  console.log(" All windows closed");
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  console.log(" App activated");
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
