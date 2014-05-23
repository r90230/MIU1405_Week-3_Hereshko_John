Titanium.UI.setBackgroundColor('#000');

var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var margin = 10;
var canvasSize = pWidth-margin*4;
var size = canvasSize/3;


var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#d3d3d3"	
});

var galleryWindow = Ti.UI.createWindow({
	backgroundColor: "#d3d3d3",
	layout: "horizontal"
});

var detailWindow = Ti.UI.createWindow({
	backgroundColor: "#d3d3d3"
});

var border = Ti.UI.createView({
	backgroundColor: "#cecece",
	height: 1,
	width: pWidth,
	top: 20
});

var viewContainer = Ti.UI.createScrollView({
	width: pWidth,
	contentWidth: pWidth,
	height: pHeight-border.height-border.top,
	showVerticalScrollIndicator: true,
	backgroundColor: "#fef",
	layout: "horizontal"
});

var button = Ti.UI.createView({
	height: 70,
	width: pWidth - 50,
	backgroundColor: "#fff"
});

var detailView = Ti.UI.createView({
	height: pHeight-border.height-border.top,
	width: pWidth,
	backgroundColor: "#fef"
});

var startText = Ti.UI.createLabel({
	text: "Tap here to search"
});

var loadFile = require("proto");

button.add(startText);
galleryWindow.add(border,viewContainer);
mainWindow.add(button);
mainWindow.open();