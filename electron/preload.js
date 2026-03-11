const { contextBridge } = require('electron');

// Expose a minimal safe API to the renderer if needed in future
contextBridge.exposeInMainWorld('__electronAPI', {
  // placeholder for future APIs
});