'use strict';  

importScripts(  
  'consts.js',  
  'config.js'  
);  

importScripts(  
  'global.js'  
);  

importScripts(  
  'background.nativeMessaging.messages.js',  
  'background.nativeMessaging.js',  
  'background.contextMenus.js',  
  'background.messages.js'  
);  

onPluginDisconnected();  

if (!nativePort) {  
    nativeConnect();  
}