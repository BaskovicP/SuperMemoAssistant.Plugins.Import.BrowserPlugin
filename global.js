'use strict';

var nativePort = null;

function error(msg) {
	console.error(msg);
}

function warn(msg) {
	console.warn(msg)
}

function log(msg) {
	if (app.isLogEnabled)
		console.info(msg);
}

function verbose(msg) {
	if (app.isVerboseLogEnabled)
		console.log(msg);
}

function objectHas(object, key) {
	return object ? hasOwnProperty.call(object, key) : false;
}

function onPluginConnected() {
	chrome.action.setTitle({ title: app.name + " (connected)" });
	chrome.action.setIcon(robotIcons);
	chrome.action.enable();
}

function onPluginDisconnected() {
	chrome.action.setTitle({ title: app.name + " (disconnected)" });
	chrome.action.setIcon(robotDisabledIcons);
	chrome.action.disable();
}