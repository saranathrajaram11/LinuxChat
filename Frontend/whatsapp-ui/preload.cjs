const { contextBridge, ipcRenderer } = require("electron");



console.log("✅ Preload script loaded!");

contextBridge.exposeInMainWorld("electronAPI", {
    getUserData: async () => { 
        console.log( "Calling ipcRenderer.invoke('get-user-data')");
        return await ipcRenderer.invoke("get-user-data");
    },
});