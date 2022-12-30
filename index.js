const { Client, Events, GatewayIntentBits } = require('discord.js');

const { token } = require('./config.json') ;

const discClient = new Client({ intents: [GatewayIntentBits.Guilds] });


discClient.on(Events.ClientReady, c=> {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

discClient.on("message", messsage=>{
    if(message.content == "hello"){
        message.content.send("Hello Hensem!");
    }
});

//start up the client bot
discClient.login(token);