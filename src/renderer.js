const electron = require('electron')
const { ipcRenderer } = electron

var startButton = document.getElementById("start-browser");




startButton.onclick = () => {
var userAgent = document.getElementById("user-agent");
var windowSize = document.getElementById("window-size");
var pluginsDisable = document.getElementById("plugins-disable");
var incognitoEnable = document.getElementById("incognito-enable");


    ipcRenderer.send('browserStart:onclick', userAgent.value, windowSize.value, pluginsDisable.checked, incognitoEnable.checked);
}