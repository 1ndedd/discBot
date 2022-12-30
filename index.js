const discord = require('discord.js');

const clientListener = new discord.Client();

clientListener.on("message", messsage=>{
    if(message.content == "hello"){
        message.content.send("Hello Hensem!");
    }
});

//start up the client bot
clientListener.login(token);