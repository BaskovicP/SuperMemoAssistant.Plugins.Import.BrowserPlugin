'use strict';  

// Prvo učitajte consts.js i config.js koje definiraju app objekt  
importScripts(  
  'consts.js',  
  'config.js'  
);  

// Zatim učitajte global.js koji koristi app objekt  
importScripts(  
  'global.js'  
);  

// Na kraju učitajte ostatak skripti  
importScripts(  
  'background.nativeMessaging.messages.js',  
  'background.nativeMessaging.js',  
  'background.contextMenus.js',  
  'background.messages.js'  
);  

// Inicijalizacija iz background.js  
onPluginDisconnected();  

if (!nativePort) {  
    nativeConnect();  
}