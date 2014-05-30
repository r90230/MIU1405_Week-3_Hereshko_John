var imageFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "HahaYoWhatUp");
var imageFiles = imageFolder.getDirectoryListing();

var plotWin = Ti.UI.createWindow({
	backgroundColor: "#d3d3d3"
});

var extraWin = Ti.UI.createWindow({
	backgroundColor: "#d3d3d3"
});

var openWindow = function(){
	galleryWindow.open({transition: Ti.UI.iPhone.AnimationStyle.CURL_UP});
};

var openPlot = function(){
	plotWin.open({transition:Ti.UI.iPhone.AnimationStyle.CURL_UP});
};

var openExtra = function(){
	extraWin.open({transition:Ti.UI.iPhone.AnimationStyle.CURL_UP});
};

var imageList = [{title: "Final Fantasy XIV: A Realm Reborn", 
image: imageFiles[0], desc: "Platform: PC, PlayStation 3, PlayStation 4; ESRB Rating: T for Teen; Rating: Average 7.5/10; Genre: Massively Multiplayer Online Role Playing Game; Number of Players: One Player, Online massive multiplayer only.", 
plot: "In the fantasy world of Eorzea, you play as your customized character, an up and coming adventurer who gets thrown into a giant adventure all the like. Throughout this adventure, your character becomes involved in a huge war across all the land against the imperial forces. Meeting with many familiar characters, the battles you fight lead to becoming a true hero, a Warrior of Light.", 
extra: "Following behind SquareEnix’s previous MMO, Final Fantasy XI, this game improves gameplay and graphics immensely. You play in an online world, with players all over of different experiences and levels. As many online games of this nature has, there are your tanks, the front line attempting to take the damage for your group; The Damage Per Second, or DPS group, who is attempting to deal as much damage as possible to enemies to end them faster; And the healer, who is focusing on keeping everyone’s health as high as possible while they are in combat. The further you get into the game, the more advanced your character becomes.",
},
{image: imageFiles[1], title: "Grand Theft Auto V", desc: "Platform: PlayStation 3, Xbox 360, PC; ESRB Rating: M for Mature; Rating: Average 9/10; Genre: Action-Adventure; Number of Players: One player, online options", 
plot: "The game focuses around three people. The main plot focuses on Franklin, a young man caught up in a large amount of criminal activities. This is until an old professional criminal named Michael caught him in the act, and starts getting back into the ‘theft’ game by working a few bank robberies with Franklin. Enough attention is brought to the group that an old insane partner of Michael’s, Trevor, catches wind of Michael being back in the game, and has his own agenda for what’s happening.", 
extra: "The Grand Theft Auto series is one of the most well known series of video games across the nation. The game throws you into an open world environment, and allows you to have a lot of freedom as to what you are able to do at any time. With the variety of characters available, different stories can be seen at anytime, finally leading to the conclusion. However, there is also an online mode which allows you to throw your own character into the city of Los Santos, a fake city based on San Andreas.",
},
{image: imageFiles[2], title: "Monster Hunter 3: Ultimate", desc: "Platform: Nintendo Wii U, Nintendo 3DS; ESRB Rating: T for Teen; Rating: Average of 9.5/10; Genre: Action-Adventure; Number of Players: 1 Player, Online Multiplayer up to 4 players.", 
plot: "After a large monster is spotted outside of Moga Village, the Village Chief and his son summon a Monster Hunter, an adventurer trained in killing the huge monsters across the land. As the game progresses, you will find the Hunter going against larger and larger monsters, including dragons, water serpents, giant moles, and much more. ", 
extra: "The Monster Hunter series is a very popular one, at the least in Japan. This game pits you against large monsters, and gives you a multitude of weapons to defeat your foes with. The great part about this game, however, is the implementation of multiplayer, allowing you and your friends to enjoy an insane battle against gigantic foes, feeling epic as you tear through dragons and leviathans alike. It does have role playing game elements, as it allows you to create armor and weapons to allow you to defeat more powerful monsters."
},
{image: imageFiles[3], title: "Titanfall", desc: "Platform: Xbox 360, Xbox One, PC; ESRB Rating: M for Mature; Rating: Average 4/5; Genre: First person Shooter; Number of Players: One Player, Online Multiplayer only, 12 players per match", 
plot: "This game takes you into the life of a professional Titan pilot, trained in free-running as well as combat, in the organizations of either the IMC (Interstellar Mining Corporation) or the Frontier Militia. The IMC was originally a mining company using the Titans as mining support. However, eventually the company expanded to military leaders and contractors in order to expand and create an empire across the galaxy. After enough violence, the Frontier Militia was formed to create a combat against the overzealous IMC.", 
extra: "Titanfall is a first person shooter, with two major sides of the main battle. The game is entirely online, so no matter how many times you play the game, you will be playing with another person online. The main portion of the game will be played as a free running Titan pilot, traversing the map attempting to kill the opposing team and waiting for when your Titan will be available. The time it takes to wait for your Titan reduces as you perform well. Once your Titan becomes available, you are a much heavier contender. However, you are much more heavily protected, and hit much harder.",
},
{image: imageFiles[4], title: "Watch_Dogs", desc: "Platform: PlayStation 3, PlayStation 4, Xbox 360, Xbox One, PC; ESRB Rating: M for Mature; Rating: Pre-Release, expected great reviews; Genre: Action-Adventure; Number of Players: 1 Player, online multiplayer explained below;", 
plot: "In this game, you play as Aiden Pierce, a highly skilled hacker and a thug in the past. His family is put through a tragedy of sorts, which causes Aiden to create his own ‘renegade’ type of justice against a supercomputer known as ctOS (Central Operating System).", 
extra: "Watch_Dogs is an open-world action-adventure game based in Chicago, Illinois. The main mechanic of the game is Aiden’s ability to hack into the ctOS supercomputer mentioned above, allowing him to access information, trigger traffic lights and cause distractions, hack into ATMs, and much more. It also includes combat as a third person shooter, implementing stealth and parkour to make many ways to complete a goal. The game also includes a multiplayer mode completely implemented into the single player, allowing anyone to ‘hack’ your character at any time."
}];

console.log(imageList[0].image);

button.addEventListener("click", openWindow);

var getDetail = function(dataSource){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#f5f5f5"
	});
			
	var detailView = Ti.UI.createView({
		height: 65,
		backgroundColor:"#fff",
		top:0
	});
	
	var detailBorder = Ti.UI.createView({
		backgroundColor: "#dbdbdb",
		height: 1,
		top: viewContainer.height + viewContainer.top
	});
	
	var detailTitle = Ti.UI.createLabel({
		text: dataSource.title,
		font: {fontSize: 20, fontWeight: "bold"},
		top: 30,
		width: "100%",
		textAlign: "center"
	});
	
	var detailPic = Ti.UI.createImageView({
		image: dataSource.image,
		top: margin*6
	});

	var detailText = Ti.UI.createLabel({
		text: dataSource.desc,
		font: {fontSize: 13},
		width: "100%",
		top: "50%"
	});
	
	var plotButton = Ti.UI.createLabel({
		title: imageList[1].plot,
		text: "See Plot",
		backgroundColor: "#333",
		color: "fff",
		height: 50,
		width: "80%",
		bottom: 105,
		textAlign: "center"
	});
	
	var extraButton = Ti.UI.createLabel({
		text: "See Extra",
		backgroundColor: "#333",
		color: "fff",
		height: 50,
		width: "80%",
		bottom: 55,
		textAlign: "center"
	});
		
	var closeButton = Ti.UI.createLabel({
		text: "Close Window",
		backgroundColor: "#333",
		color: "fff",
		height: 50,
		width: "100%",
		bottom: 0,
		textAlign: "center"
	});
	
	var closeWindow = function(){
		detailWindow.close({transition: Ti.UI.iPhone.AnimationStyle.CURL_UP});
	};
	
	plotButton.addEventListener("click", getPlot);
	extraButton.addEventListener("click", getExtra);
	closeButton.addEventListener("click", closeWindow);
	
	detailView.add(detailTitle);
	detailWindow.add(detailView, detailBorder, detailText, detailPic, plotButton, extraButton, closeButton);
	
	detailWindow.open({transition: Ti.UI.iPhone.AnimationStyle.CURL_UP});


};

var getPlot = function(dataSource){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#f5f5f5"
	});
			
	var detailView = Ti.UI.createView({
		height: 65,
		backgroundColor:"#fff",
		top:0
	});
	
	var detailBorder = Ti.UI.createView({
		backgroundColor: "#dbdbdb",
		height: 1,
		top: viewContainer.height + viewContainer.top
	});

	var detailText = Ti.UI.createLabel({
		text: dataSource.title,
		font: {fontSize: 13},
		width: "100%",
		top: "50%"
	});
	
	var closeButton = Ti.UI.createLabel({
		text: "Close Window",
		backgroundColor: "#333",
		color: "fff",
		height: 50,
		width: "100%",
		bottom: 0,
		textAlign: "center"
	});
	
	var closeWindow = function(){
		detailWindow.close({transition: Ti.UI.iPhone.AnimationStyle.CURL_UP});
	};
	
	closeButton.addEventListener("click", closeWindow);

	detailView.add(detailText);
	detailWindow.add(detailView, detailBorder, detailText, closeButton);
	
	detailWindow.open({transition: Ti.UI.iPhone.AnimationStyle.CURL_UP});
};

var getExtra = function(dataSource){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#f5f5f5"
	});
			
	var detailView = Ti.UI.createView({
		height: 65,
		backgroundColor:"#fff",
		top:0
	});
	
	var detailBorder = Ti.UI.createView({
		backgroundColor: "#dbdbdb",
		height: 1,
		top: viewContainer.height + viewContainer.top
	});

	var detailText = Ti.UI.createLabel({
		text: dataSource.title,
		font: {fontSize: 13},
		width: "100%",
		top: "50%"
	});
	
	var closeButton = Ti.UI.createLabel({
		text: "Close Window",
		backgroundColor: "#333",
		color: "fff",
		height: 50,
		width: "100%",
		bottom: 0,
		textAlign: "center"
	});
	
	var closeWindow = function(){
		extraWin.close({transition: Ti.UI.iPhone.AnimationStyle.CURL_UP});
	};
	
	closeButton.addEventListener("click", closeWindow);

	detailView.add(detailText);
	detailWindow.add(detailView, detailBorder, detailText, closeButton);
	
	extraWin.open({transition: Ti.UI.iPhone.AnimationStyle.CURL_UP});
};

for(var i=0; i<imageFiles.length; i++){
	var view = Ti.UI.createView({
		backgroundColor: "#000",
		top: margin*2,
		left: margin,
		width: size*1.55,
		height: size*1.55
	});
	var newPicture = Ti.UI.createImageView({
		title: imageList[i].title,
		image: "HahaYoWhatUp/" + imageList[i].image,
		desc: imageList[i].desc,
		top: 0,
		height: view.height,	
		width: view.width
	});

	view.add(newPicture);
	viewContainer.add(view);
};

viewContainer.addEventListener("click", function(event){
	console.log(event);
	getDetail(event.source);
});

console.log(imageFiles);
