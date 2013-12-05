var core = Object.create(require("./lib/emitter.js")), config = require("./config.js");

var pluginList = ["auth","roomauth","repeatban", "ratelimit", "wordban", "usernameban" , "originban", "loginrequired", 
	"members","http", "irc" , "occupants" , "room", "rooms" , "message" , "messages" , "roomvalidation" , 
	"messagevalidation" , "email", "threader1"];

process.nextTick(function(){
	// The ident server binds to port 113 after a while.
	if(config.core.uid) process.setuid(config.core.uid);
});
process.title = config.core.name;

function start(name) {
	var plugin = require("./"+name+"/"+name+".js");
	plugin(core);
}

pluginList.forEach(function(name) {
	start(name);
});






